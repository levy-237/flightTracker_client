import { z } from "zod";
import { pageSchema } from "./page";

export const aircraftSchema = z.object({
  id: z.number(),
  hex: z.string(),
  aircraftType: z.string().nullable(),
  registration: z.string().nullable(),
});

export const aircraftListSchema = z.object({
  content: z.array(aircraftSchema),
  page: pageSchema,
});
