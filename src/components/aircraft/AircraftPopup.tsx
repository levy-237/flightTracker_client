import { Popup } from "react-map-gl/maplibre";
import type { ApiResponse } from "../../types/apiresponse";
import "../../styles/AircraftPopup.css";

type AircraftPopupProps = {
  aircraft: ApiResponse;
  onClose: () => void;
};

export function AircraftPopup({ aircraft, onClose }: AircraftPopupProps) {
  const details = [
    ["Registration", aircraft.registration],
    ["Type", aircraft.aircraftType],
    ["Altitude", aircraft.altitude],
    ["Ground speed", aircraft.groundSpeed],
    ["Track", aircraft.track === null ? null : `${aircraft.track}°`],
    ["Vertical rate", aircraft.verticalRate],
  ];

  return (
    <Popup
      longitude={aircraft.longitude}
      latitude={aircraft.latitude}
      anchor="bottom"
      offset={20}
      closeOnClick={false}
      onClose={onClose}
      maxWidth="260px"
      className="aircraft-popup"
    >
      <section aria-label="Aircraft details">
        <h2>{aircraft.callsign || aircraft.hex}</h2>
        <dl>
          {details.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value ?? "Unknown"}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Popup>
  );
}
