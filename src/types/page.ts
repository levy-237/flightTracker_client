import type { z } from "zod";
import type { pageSchema } from "../schemas/page";

export type Page = z.infer<typeof pageSchema>;
