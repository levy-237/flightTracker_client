import type { Position } from "../../types/position";

export function PositionCard({ position }: { position: Position }) {
  return (
    <article className="position-card">
      <time className="position-time" dateTime={position.recordedAt} title={position.recordedAt}>
        {new Date(position.recordedAt).toLocaleString()}
      </time>
      <dl className="record-details">
        <dt>Latitude</dt><dd>{position.latitude.toLocaleString(undefined, { maximumFractionDigits: 6 })}°</dd>
        <dt>Longitude</dt><dd>{position.longitude.toLocaleString(undefined, { maximumFractionDigits: 6 })}°</dd>
        <dt>Altitude</dt><dd>{position.altitude?.toLocaleString() ?? "Unknown"}</dd>
        <dt>Ground speed</dt><dd>{position.groundSpeed?.toLocaleString() ?? "Unknown"}</dd>
        <dt>Track</dt><dd>{position.track === null ? "Unknown" : `${position.track.toLocaleString()}°`}</dd>
        <dt>Barometric rate</dt><dd>{position.barometricRate?.toLocaleString() ?? "Unknown"}</dd>
        <dt>Flight</dt><dd>{position.flight.callsign || "Unknown"} · #{position.flight.id}</dd>
      </dl>
    </article>
  );
}
