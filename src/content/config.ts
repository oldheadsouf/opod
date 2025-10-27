import { defineCollection, z } from 'astro:content';

// Shared tag taxonomy for cross-referencing
const tagSchema = z.enum([
  'cultural-drift',
  'meaning-decay',
  'alternate-history',
  'forgotten-trends',
  'lost-movements',
  'obsolete-knowledge',
  'extinct-aesthetics',
  'dead-media',
  'temporal-anomaly',
  'pattern-recognition',
  'field-work',
  'documentation',
]);

// Dispatches (Blog Posts) Collection
const dispatchesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(tagSchema).optional(),
  }),
});

// Operations (Projects) Collection
const operationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(tagSchema).optional(),
  }),
});

// Research (Short Fiction) Collection
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(tagSchema).optional(),
  }),
});

// Artifacts (Art Gallery) Collection
const artifactsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    medium: z.string(),
    image_url: z.string(),
    external_url: z.string().url().optional(),
    youtube_id: z.string().optional(),
    tags: z.array(tagSchema).optional(),
  }),
});

export const collections = {
  'dispatches': dispatchesCollection,
  'operations': operationsCollection,
  'research': researchCollection,
  'artifacts': artifactsCollection,
};
