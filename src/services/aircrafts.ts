import { aircraftListSchema } from "../schemas/aircraft";
import type { PaginationParams } from "../types/pagination";

export async function fetchAircrafts(
  { page = 1, size = 40 }: PaginationParams = {},
  signal?: AbortSignal,
) {
  const searchParams = new URLSearchParams({
    page: String(Math.max(1, page)),
    size: String(size),
  });
  const response = await fetch(
    `${import.meta.env.VITE_AIRCRAFTS_API_URL}?${searchParams}`,
    { signal },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return aircraftListSchema.parse(await response.json());
}
