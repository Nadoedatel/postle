import { z } from 'zod';

export const updateMaterialSchema = z.object({
  text: z.string().trim().min(1).max(1000),
})

export type UpdateMaterialDto = z.infer<typeof updateMaterialSchema>
