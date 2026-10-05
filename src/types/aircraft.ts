import type { z } from "zod";
import type { aircraftSchema, aircraftListSchema } from "../schemas/aircraft";

export type Aircraft = z.infer<typeof aircraftSchema>;
export type AircraftList = z.infer<typeof aircraftListSchema>;
