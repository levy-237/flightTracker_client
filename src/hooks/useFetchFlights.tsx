import { useQuery } from "@tanstack/react-query";
import { fetchFlights } from "../services/flights";
import type { PaginationParams } from "../types/pagination";

export default function useFetchFlights(
  { page = 1, size = 40 }: PaginationParams = {},
) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["flights", page, size],
    queryFn: ({ signal }) => fetchFlights({ page, size }, signal),
  });

  return { isError, isPending, flights: data?.content ?? [], page: data?.page };
}
