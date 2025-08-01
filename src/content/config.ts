// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Define a collection for your proyectos
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number(),
    url: z.string().url(),
  }),
});

// 2. Export the collection
export const collections = {
  'projects': projectsCollection,
};