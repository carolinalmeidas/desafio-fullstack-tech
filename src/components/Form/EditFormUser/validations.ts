import { z } from "zod";


export const schema = z.object({
  name: z.string().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
});

export type UserDataEditContact = z.infer<typeof schema>;