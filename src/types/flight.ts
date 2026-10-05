import type { z } from "zod";
import type { flightSchema, flightListSchema } from "../schemas/flight";

export type Flight = z.infer<typeof flightSchema>;
export type FlightList = z.infer<typeof flightListSchema>;
