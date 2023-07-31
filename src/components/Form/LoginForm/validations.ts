import { z } from "zod";

export const schema = z
  .object({
    email: z.string().email("Campo Obrigatório"),
    password: z.string().nonempty("Campo Obrigatório"),
  })
export type LoginData = z.infer<typeof schema>;