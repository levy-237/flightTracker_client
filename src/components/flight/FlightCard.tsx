import type { Flight } from "../../types/flight";
import { AircraftDetails } from "../aircraft/AircraftDetails";
import { AircraftImage } from "../aircraft/AircraftImage";
import { FlightPositions } from "./FlightPositions";
import "../../styles/RecordList.css";

export function FlightCard({ flight }: { flight: Flight }) {
  return (
    <article className="record-card">
      <AircraftImage />
      <h3>{flight.callsign || "Unknown callsign"}</h3>
      <dl className="record-details">
        <dt>Flight ID</dt>
        <dd>{flight.id}</dd>
        <dt>Callsign</dt>
        <dd>{flight.callsign || "Unknown"}</dd>
        <dt>Last seen</dt>
        <dd>
          <time dateTime={flight.lastSeen} title={flight.lastSeen}>
            {new Date(flight.lastSeen).toLocaleString()}
          </time>
        </dd>
      </dl>
      <h4>Aircraft</h4>
      <AircraftDetails aircraft={flight.aircraft} />
      <FlightPositions flightId={flight.id} />
    </article>
  );
}
