import { z } from "zod";
import { flightSchema } from "./flight";
import { pageSchema } from "./page";

export const positionSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  altitude: z.number().nullable(),
  groundSpeed: z.number().nullable(),
  track: z.number().nullable(),
  barometricRate: z.number().nullable(),
  recordedAt: z.iso.datetime(),
  flight: flightSchema,
});

export const positionListSchema = z.object({
  content: z.array(positionSchema),
  page: pageSchema,
});
