import { z } from 'zod';

export const getManyMaterialSchema = z.object({
  title: z.string().trim().min(1).max(100),
  text: z.string().trim().min(1).max(1000),
  dateAt: z.date(),
})

export type GetManyMaterialDto = z.infer<typeof getManyMaterialSchema>
