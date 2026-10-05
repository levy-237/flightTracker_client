import { useQuery } from "@tanstack/react-query";
import { fetchFlightPositions } from "../services/positions";
import type { PaginationParams } from "../types/pagination";

export default function useFetchFlightPositions(
  flightId: number,
  { page = 1, size = 40 }: PaginationParams = {},
  enabled = false,
) {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["flights", flightId, "positions", page, size],
    queryFn: ({ signal }) => fetchFlightPositions(flightId, { page, size }, signal),
    enabled,
  });

  return { positions: data?.content ?? [], page: data?.page, isPending, isError, refetch };
}
