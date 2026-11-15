// Build output (dist/) -> FTP web root. Reads settings from nebula/.env
//   npm run deploy            build, then upload
//   npm run deploy -- --skip-build   upload the existing dist/ only
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { Client } from 'basic-ftp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envFile = path.join(root, '.env');
if (existsSync(envFile)) process.loadEnvFile(envFile);

const { FTP_HOST, FTP_USER, FTP_PASS, FTP_DIR = '/', FTP_SECURE = 'true' } = process.env;
// FTP_SECURE: true = explicit FTPS (AUTH TLS), implicit = implicit FTPS (usually port 990), false = plain FTP
const secure = FTP_SECURE === 'implicit' ? 'implicit' : FTP_SECURE === 'true';
const FTP_PORT = Number(process.env.FTP_PORT || (secure === 'implicit' ? 990 : 21));
if (!Number.isInteger(FTP_PORT) || FTP_PORT < 1 || FTP_PORT > 65535) {
  console.error(`FTP_PORT must be a number between 1 and 65535 (got "${process.env.FTP_PORT}")`);
  process.exit(1);
}
const missing = Object.entries({ FTP_HOST, FTP_USER, FTP_PASS }).filter(([, v]) => !v).map(([k]) => k);
if (missing.length) {
  console.error(`Missing in .env: ${missing.join(', ')}  (copy .env.example to .env and fill it in)`);
  process.exit(1);
}

if (!process.argv.includes('--skip-build')) {
  console.log('Building…');
  execSync('npm run build', { cwd: root, stdio: 'inherit' });
}

const dist = path.join(root, 'dist');
if (!existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/ is missing or incomplete. Run npm run build first.');
  process.exit(1);
}

/** All files under dir, with POSIX-style paths relative to it (includes dotfiles like .htaccess). */
function walk(dir, base = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const rel = base ? `${base}/${d.name}` : d.name;
    const abs = path.join(dir, d.name);
    return d.isDirectory() ? walk(abs, rel) : [{ abs, rel, size: statSync(abs).size }];
  });
}

const client = new Client(30_000);
client.ftp.verbose = false;
try {
  console.log(`Connecting to ${FTP_HOST}:${FTP_PORT} as ${FTP_USER} (${secure === 'implicit' ? 'implicit FTPS' : secure ? 'FTPS' : 'plain FTP'})…`);
  await client.access({
    host: FTP_HOST,
    port: FTP_PORT,
    user: FTP_USER,
    password: FTP_PASS,
    secure,
    secureOptions: { servername: FTP_HOST },
  });
  // Order matters behind Cloudflare: upload every asset (CSS/JS/images/fonts) before any HTML.
  // If a page went up first, a visitor could request a CSS file that is not there yet and
  // Cloudflare would cache that 404 for hours. Pages go last, the home page very last.
  const all = walk(dist);
  const isPage = (f) => f.rel.endsWith('.html');
  const pages = all.filter(isPage).sort((a, b) => Number(a.rel === 'index.html') - Number(b.rel === 'index.html'));
  const order = [...all.filter((f) => !isPage(f)), ...pages];

  const remoteRoot = FTP_DIR.replace(/\/+$/, '');
  // Hashed files in _astro/ never change content, so skip ones already on the server.
  const existing = new Map();
  try {
    for (const f of await client.list(`${remoteRoot}/_astro`)) existing.set(f.name, f.size);
  } catch {}

  console.log(`Uploading ${order.length - pages.length} assets, then ${pages.length} pages -> ${FTP_DIR}`);
  let uploaded = 0;
  let skipped = 0;
  let currentDir = null;
  for (const f of order) {
    const relDir = path.posix.dirname(f.rel);
    const name = path.posix.basename(f.rel);
    if (relDir === '_astro' && existing.get(name) === f.size) {
      skipped++;
      continue;
    }
    const remoteDir = relDir === '.' ? remoteRoot || '/' : `${remoteRoot}/${relDir}`;
    if (remoteDir !== currentDir) {
      await client.ensureDir(remoteDir);
      currentDir = remoteDir;
    }
    await client.uploadFrom(f.abs, name);
    uploaded++;
    if (f === pages[0]) console.log('  assets done, uploading pages…');
  }
  console.log(`Done. Uploaded ${uploaded} files, skipped ${skipped} unchanged assets. Visit https://nut.in.th/`);
} catch (err) {
  const detail = [err.code, err.message].filter(Boolean).join(' ') || String(err);
  console.error(`Deploy failed: ${detail}`);
  if (/timeout|ETIMEDOUT|control socket/i.test(detail) || !err.message?.trim()) {
    console.error(`Hint: ${FTP_HOST}:${FTP_PORT} did not answer. If the domain is behind Cloudflare, use the hosting server's own FTP host name, and check FTP_PORT.`);
  } else if (/certificate|altnames|self.signed/i.test(detail)) {
    console.error('Hint: the TLS certificate does not match FTP_HOST. Use the host name shown in your hosting panel.');
  } else if (/530|login/i.test(detail)) {
    console.error('Hint: login was refused. Check FTP_USER and FTP_PASS.');
  }
  process.exitCode = 1;
} finally {
  client.close();
}
