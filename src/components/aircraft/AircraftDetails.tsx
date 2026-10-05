import type { Aircraft } from "../../types/aircraft";

export function AircraftDetails({ aircraft }: { aircraft: Aircraft }) {
  return (
    <dl className="record-details">
      <dt>Aircraft ID</dt>
      <dd>{aircraft.id}</dd>
      <dt>Registration</dt>
      <dd>{aircraft.registration || "Unknown"}</dd>
      <dt>Type</dt>
      <dd>{aircraft.aircraftType || "Unknown"}</dd>
      <dt>Hex</dt>
      <dd>{aircraft.hex}</dd>
    </dl>
  );
}
