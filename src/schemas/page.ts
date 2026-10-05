import { z } from "zod";

export const pageSchema = z.object({
  size: z.number().int().nonnegative(),
  totalElements: z.number().int().nonnegative(),
  totalPages: z.number().int().nonnegative(),
  number: z.number().int().nonnegative(),
});
