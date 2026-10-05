import { z } from "zod";
import { aircraftSchema } from "./aircraft";
import { pageSchema } from "./page";

export const flightSchema = z.object({
  id: z.number(),
  aircraft: aircraftSchema,
  callsign: z.string(),
  lastSeen: z.iso.datetime(),
});

export const flightListSchema = z.object({
  content: z.array(flightSchema),
  page: pageSchema,
});
