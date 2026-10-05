import type { Aircraft } from "../../types/aircraft";
import { AircraftDetails } from "./AircraftDetails";
import { AircraftImage } from "./AircraftImage";
import { AircraftFlights } from "./AircraftFlights";
import "../../styles/RecordList.css";

export function AircraftCard({ aircraft }: { aircraft: Aircraft }) {
  return (
    <article className="record-card">
      <AircraftImage />
      <h3>{aircraft.registration || aircraft.hex}</h3>
      <AircraftDetails aircraft={aircraft} />
      <AircraftFlights aircraftId={aircraft.id} />
    </article>
  );
}
