import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    banner_url: z.string().optional(),
    banner_pos: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
    banner_url: z.string().optional(),
  }),
});

export const collections = {
  articles,
  projects,
};

export const post_collection_names = [
  'articles',
  'projects',
];