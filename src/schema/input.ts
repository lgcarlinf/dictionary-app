import { z } from "zod";

export const schemaInput = z.object({
  search: z.string().nonempty("El campo de búsqueda no puede estar vacío"),
});
