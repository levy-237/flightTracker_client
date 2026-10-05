import { useState } from "react";
import useFetchFlights from "../../hooks/useFetchFlights";
import { FlightCard } from "./FlightCard";
import { Pagination } from "../Pagination";
import { RecordListSkeleton } from "../skeletons/RecordListSkeleton";
import "../../styles/RecordList.css";

export function Flights() {
  const [page, setPage] = useState<number>(1);

  const { flights, isPending, isError, page: pagination } = useFetchFlights({ page });

  if (isPending) return <RecordListSkeleton kind="flights" />;
  if (isError) return <p>Could not load flights.</p>;

  return (
    <section className="record-list" aria-label="Flights">
      {pagination && <Pagination page={pagination} onPageChange={setPage} />}
      {flights.length === 0 && <p className="record-empty">No flights found.</p>}
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </section>
  );
}
