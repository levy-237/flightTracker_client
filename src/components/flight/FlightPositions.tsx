import { useId, useState } from "react";
import useFetchFlightPositions from "../../hooks/useFetchFlightPositions";
import { Pagination } from "../Pagination";
import { PositionsSkeleton } from "../skeletons/PositionsSkeleton";
import { PositionCard } from "./PositionCard";
import "../../styles/FlightPositions.css";

export function FlightPositions({ flightId }: { flightId: number }) {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const panelId = useId();
  const {
    positions,
    page: pagination,
    isPending,
    isError,
    refetch,
  } = useFetchFlightPositions(flightId, { page }, expanded);

  return (
    <div className="flight-positions">
      <button
        type="button"
        className="positions-toggle"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        <span>Positions</span>
        <span aria-hidden="true">{expanded ? "▴" : "▾"}</span>
      </button>
      <div id={panelId} hidden={!expanded}>
        {expanded && (
          <div className="positions-content">
            {isPending ? (
              <PositionsSkeleton />
            ) : isError ? (
              <div className="positions-error" role="alert">
                <p>Could not load positions.</p>
                <button type="button" onClick={() => void refetch()}>
                  Try again
                </button>
              </div>
            ) : (
              <>
                {pagination && (
                  <Pagination page={pagination} onPageChange={setPage} />
                )}
                {positions.length === 0 && (
                  <p className="record-empty">
                    No positions recorded for this flight.
                  </p>
                )}
                <div className="record-list">
                  {positions.map((position, index) => (
                    <PositionCard
                      key={`${position.recordedAt}-${index}`}
                      position={position}
                    />
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
