import { z } from "zod";


export const schema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
});

export type LoginDataEdit = z.infer<typeof schema>;