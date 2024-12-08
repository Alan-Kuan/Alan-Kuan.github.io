import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
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
  type: 'content',
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