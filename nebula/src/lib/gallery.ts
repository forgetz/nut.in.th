// Gallery: every image in nebula/gallery/ becomes an entry at build time.
// Optional caption files next to an image: <name>.txt (English / default) and <name>.th.txt (Thai).
// First line = title, remaining lines = description.
import fs from 'node:fs';
import path from 'node:path';
import type { Lang } from '../i18n/ui';

const files = import.meta.glob<{ default: ImageMetadata }>('/gallery/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}', {
  eager: true,
});

export interface GalleryItem {
  id: string;
  image: ImageMetadata;
  title: string;
  description: string;
  date: Date;
}

function readCaption(base: string, lang: Lang) {
  const candidates = lang === 'th' ? [`${base}.th.txt`, `${base}.txt`] : [`${base}.txt`, `${base}.en.txt`];
  for (const file of candidates) {
    if (fs.existsSync(file)) {
      const [title = '', ...rest] = fs.readFileSync(file, 'utf8').replace(/\r/g, '').split('\n');
      return { title: title.trim(), description: rest.join('\n').trim() };
    }
  }
  return null;
}

export function getGallery(lang: Lang): GalleryItem[] {
  return Object.entries(files)
    .map(([key, mod]) => {
      const abs = path.resolve(process.cwd(), `.${key}`);
      const name = path.basename(key, path.extname(key));
      const base = path.join(path.dirname(abs), name);
      const caption = readCaption(base, lang);
      let date = new Date(0);
      try {
        date = fs.statSync(abs).mtime;
      } catch {}
      return {
        id: name.replace(/[^a-z0-9_-]+/gi, '-').toLowerCase(),
        image: mod.default,
        title: caption?.title ?? '',
        description: caption?.description ?? '',
        date,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
