import type { z } from "zod";
import type { positionSchema, positionListSchema } from "../schemas/position";

export type Position = z.infer<typeof positionSchema>;
export type PositionList = z.infer<typeof positionListSchema>;
