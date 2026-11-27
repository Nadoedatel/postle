import { z } from 'zod';

export const createMaterialSchema = z.object({
  text: z.string().trim().min(1).max(1000),
});

export type CreateMaterialDto = z.infer<typeof createMaterialSchema>;
