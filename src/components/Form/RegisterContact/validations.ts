import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty("Campo Obrigatório"),
  email: z.string().email("Campo Obrigatório"),
  phone: z.string().nonempty("Campo Obrigatório"),
});

