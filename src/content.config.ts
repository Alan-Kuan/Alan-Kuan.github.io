import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    banner: z.object({
      url: z.string(),
      pos: z.string().optional(),
    }).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
    banner: z.object({
      url: z.string(),
      pos: z.string().optional(),
    }).optional(),
  }),
});

const blurhashes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/blurhashes' }),
  schema: z.record(z.object({
    blurhash: z.string(),
    aspect_ratio: z.number(),
  })),
});

export const collections = {
  articles,
  projects,
  blurhashes,
};