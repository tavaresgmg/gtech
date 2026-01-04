import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string(),
    link: z.string().optional(),
    badge: z.string(),
    status: z.enum(['live', 'beta']),
    order: z.number(),
  }),
});

export const collections = {
  'products': productsCollection,
};
