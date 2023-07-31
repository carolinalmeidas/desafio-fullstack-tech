import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty("Campo Obrigatório"),
  email: z.string().email("Campo Obrigatório"),
  password: z.string().nonempty("Campo Obrigatório"),
  phone: z.string().nonempty("Campo Obrigatório"),
});

export type LoginDataRegister = z.infer<typeof schema>;






