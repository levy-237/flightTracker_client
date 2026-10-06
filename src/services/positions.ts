import { API_URL } from "../configs/api-config";
import { positionListSchema } from "../schemas/position";
import type { PaginationParams } from "../types/pagination";
import type { PositionList } from "../types/position";

export async function fetchFlightPositions(
  flightId: number,
  { page = 1, size = 40 }: PaginationParams = {},
  signal?: AbortSignal,
): Promise<PositionList> {
  const searchParams = new URLSearchParams({
    page: String(Math.max(1, page)),
    size: String(size),
  });
  const response = await fetch(
    `${API_URL}/flights/${flightId}/positions?${searchParams}`,
    { signal },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return positionListSchema.parse(await response.json());
}
