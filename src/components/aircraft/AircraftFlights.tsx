import { useId, useState } from "react";
import useFetchAircraftFlights from "../../hooks/useFetchAircraftFlights";
import { Pagination } from "../Pagination";
import { AircraftFlightCard } from "./AircraftFlightCard";
import "../../styles/AircraftFlights.css";

export function AircraftFlights({ aircraftId }: { aircraftId: number }) {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const panelId = useId();
  const { flights, page: pagination, isPending, isError, refetch } =
    useFetchAircraftFlights(aircraftId, { page }, expanded);

  return (
    <div className="aircraft-flights">
      <button
        type="button"
        className="aircraft-flights-toggle"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        <span>Flights</span>
        <span aria-hidden="true">{expanded ? "▴" : "▾"}</span>
      </button>
      <div id={panelId} hidden={!expanded}>
        {expanded && (
          <div className="aircraft-flights-content">
            {isPending ? (
              <div className="record-list" role="status" aria-label="Loading flights">
                {[0, 1, 2].map((index) => (
                  <div className="aircraft-flight-card" key={index} aria-hidden="true">
                    <span className="skeleton skeleton-title" />
                    <span className="skeleton skeleton-line" />
                  </div>
                ))}
              </div>
            ) : isError ? (
              <div className="aircraft-flights-error" role="alert">
                <p>Could not load flights for this aircraft.</p>
                <button type="button" onClick={() => void refetch()}>Try again</button>
              </div>
            ) : (
              <>
                {pagination && <Pagination page={pagination} onPageChange={setPage} />}
                {flights.length === 0 && (
                  <p className="record-empty">No flights recorded for this aircraft.</p>
                )}
                <div className="record-list">
                  {flights.map((flight) => (
                    <AircraftFlightCard key={flight.id} flight={flight} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
