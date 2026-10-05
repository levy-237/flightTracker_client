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
  const baseUrl = import.meta.env.VITE_AIRCRAFTS_API_URL.replace(/\/$/, "");
  const response = await fetch(
    `${baseUrl}/${aircraftId}/flights?${searchParams}`,
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
    `${import.meta.env.VITE_FLIGHTS_API_URL}?${searchParams}`,
    { signal },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return flightListSchema.parse(await response.json());
}
