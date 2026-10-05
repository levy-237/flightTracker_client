import { useQuery } from "@tanstack/react-query";
import { fetchAircraftFlights } from "../services/flights";
import type { PaginationParams } from "../types/pagination";

export default function useFetchAircraftFlights(
  aircraftId: number,
  { page = 1, size = 40 }: PaginationParams = {},
  enabled = false,
) {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["aircrafts", aircraftId, "flights", page, size],
    queryFn: ({ signal }) => fetchAircraftFlights(aircraftId, { page, size }, signal),
    enabled,
  });

  return { flights: data?.content ?? [], page: data?.page, isPending, isError, refetch };
}
