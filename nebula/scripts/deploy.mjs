// Build output (dist/) -> FTP web root. Reads settings from nebula/.env
//   npm run deploy            build, then upload
//   npm run deploy -- --skip-build   upload the existing dist/ only
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { Client } from 'basic-ftp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envFile = path.join(root, '.env');
if (existsSync(envFile)) process.loadEnvFile(envFile);

const { FTP_HOST, FTP_USER, FTP_PASS, FTP_DIR = '/', FTP_SECURE = 'true' } = process.env;
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

const client = new Client(30_000);
client.ftp.verbose = false;
try {
  console.log(`Connecting to ${FTP_HOST} as ${FTP_USER}…`);
  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASS,
    secure: FTP_SECURE === 'true',
    secureOptions: { servername: FTP_HOST },
  });
  let files = 0;
  client.trackProgress((info) => {
    if (info.type === 'upload' && info.bytes === 0) return;
    if (info.type === 'upload') files++;
  });
  console.log(`Uploading dist/ -> ${FTP_DIR}`);
  await client.ensureDir(FTP_DIR);
  await client.uploadFromDir(dist);
  client.trackProgress();
  console.log(`Done. Uploaded ${files} files. Visit https://nut.in.th/`);
} catch (err) {
  console.error('Deploy failed:', err.message);
  process.exitCode = 1;
} finally {
  client.close();
}
