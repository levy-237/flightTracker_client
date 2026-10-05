import { useQuery } from "@tanstack/react-query";
import { fetchAircrafts } from "../services/aircrafts";
import type { PaginationParams } from "../types/pagination";

export default function useFetchAircrafts(
  { page = 1, size = 40 }: PaginationParams = {},
) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["aircrafts", page, size],
    queryFn: ({ signal }) => fetchAircrafts({ page, size }, signal),
  });

  return { isError, isPending, aircrafts: data?.content ?? [], page: data?.page };
}
