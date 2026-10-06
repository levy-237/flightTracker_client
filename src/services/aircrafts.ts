import { API_URL } from "../configs/api-config";
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
    `${API_URL}/aircrafts?${searchParams}`,
    { signal },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return aircraftListSchema.parse(await response.json());
}
