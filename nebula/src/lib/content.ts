import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'> & { slug: string };

/** Slug without the language folder: "th/foo" -> "foo" */
export const slugOf = (id: string) => id.split('/').slice(1).join('/');

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (e) => e.id.startsWith(`${lang}/`));
  return all
    .map((e) => ({ ...e, slug: slugOf(e.id) }))
    .sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

export async function getLegal(lang: Lang, doc: string) {
  const all = await getCollection('legal', (e) => e.id === `${lang}/${doc}`);
  const entry = all[0];
  if (!entry) throw new Error(`Missing legal page: ${lang}/${doc}.md`);
  return entry;
}
