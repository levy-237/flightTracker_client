import type { z } from "zod";
import type { apiResponseSchema, apiResponseBroadcastSchema } from "../schemas/apiresponse";

export type ApiResponse = z.infer<typeof apiResponseSchema>;
export type ApiResponseBroadcast = z.infer<typeof apiResponseBroadcastSchema>;
