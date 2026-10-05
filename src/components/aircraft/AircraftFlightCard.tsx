import type { Flight } from "../../types/flight";
import { FlightPositions } from "../flight/FlightPositions";

export function AircraftFlightCard({ flight }: { flight: Flight }) {
  return (
    <article className="aircraft-flight-card">
      <div className="aircraft-flight-heading">
        <h4>{flight.callsign || "Unknown callsign"}</h4>
        <span>#{flight.id}</span>
      </div>
      <dl className="record-details">
        <dt>Last seen</dt>
        <dd>
          <time dateTime={flight.lastSeen} title={flight.lastSeen}>
            {new Date(flight.lastSeen).toLocaleString()}
          </time>
        </dd>
      </dl>
      <FlightPositions flightId={flight.id} />
    </article>
  );
}
