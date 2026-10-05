import { z } from "zod";

export const apiResponseSchema = z.object({
  aircraftId: z.number(),
  aircraftType: z.string().nullable(),
  altitude: z.number().nullable(),
  callsign: z.string(),
  flightId: z.number(),
  groundSpeed: z.number().nullable(),
  hex: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  recordedAt: z.iso.datetime(),
  registration: z.string().nullable(),
  track: z.number().nullable(),
  verticalRate: z.number().nullable(),
});

export const apiResponseBroadcastSchema = z.array(apiResponseSchema);
