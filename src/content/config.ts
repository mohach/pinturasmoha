import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    description: z.string(),
    image:       z.string().optional().default(''),
    author:      z.string().optional().default('Moha'),
    tags:        z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog };
