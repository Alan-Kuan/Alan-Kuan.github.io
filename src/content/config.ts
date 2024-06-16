import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
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