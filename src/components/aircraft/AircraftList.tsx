import { useState } from "react";
import useFetchAircrafts from "../../hooks/useFetchAircrafts";
import { AircraftCard } from "./AircraftCard";
import { Pagination } from "../Pagination";
import { RecordListSkeleton } from "../skeletons/RecordListSkeleton";
import "../../styles/RecordList.css";

export function AircraftList() {
  const [page, setPage] = useState(1);
  const { aircrafts, isPending, isError, page: pagination } = useFetchAircrafts({ page });

  if (isPending) return <RecordListSkeleton kind="aircraft" />;
  if (isError) return <p>Could not load aircrafts.</p>;

  return (
    <section className="record-list" aria-label="Aircraft list">
      {pagination && <Pagination page={pagination} onPageChange={setPage} />}
      {aircrafts.length === 0 && <p className="record-empty">No aircraft found.</p>}
      {aircrafts.map((aircraft) => (
        <AircraftCard key={aircraft.id} aircraft={aircraft} />
      ))}
    </section>
  );
}
