import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Projects live in src/content/projects/<lang>/<slug>.md — same slug in both languages.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int(),
      client: z.string().optional(),
      kind: z.string().optional(), // e.g. "Campaign site"
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      link: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
    }),
});

// Terms and privacy: src/content/legal/<lang>/{terms,privacy}.md
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { projects, legal };
