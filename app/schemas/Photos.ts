import { z } from 'zod';

// Validating what we are receiving from Pexels API
const BasicPhotosSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

export const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
});

export const CompletePhotosSchema = BasicPhotosSchema.extend({
  photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;

export type PhotosResults = z.infer<typeof CompletePhotosSchema>;
