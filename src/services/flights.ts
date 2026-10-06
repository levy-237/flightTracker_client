import { API_URL } from "../configs/api-config";
import { flightListSchema } from "../schemas/flight";
import type { PaginationParams } from "../types/pagination";
import type { FlightList } from "../types/flight";

export async function fetchAircraftFlights(
  aircraftId: number,
  { page = 1, size = 40 }: PaginationParams = {},
  signal?: AbortSignal,
): Promise<FlightList> {
  const searchParams = new URLSearchParams({
    page: String(Math.max(1, page)),
    size: String(size),
  });
  const response = await fetch(
    `${API_URL}/aircrafts/${aircraftId}/flights?${searchParams}`,
    { signal },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return flightListSchema.parse(await response.json());
}

export async function fetchFlights(
  { page = 1, size = 40 }: PaginationParams = {},
  signal?: AbortSignal,
) {
  const searchParams = new URLSearchParams({
    page: String(Math.max(1, page)),
    size: String(size),
  });
  const response = await fetch(
    `${API_URL}/flights?${searchParams}`,
    { signal },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return flightListSchema.parse(await response.json());
}
