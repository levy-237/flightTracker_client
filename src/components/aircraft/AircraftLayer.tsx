import { useEffect, useMemo, useState } from "react";
import { Layer, Source } from "react-map-gl/maplibre";
import { toAircraftGeoJson } from "../../utils/toAircraftGeoJson";
import { useAircraftWebSocket } from "../../hooks/useAircraftWebSocket";
import { AircraftPopup } from "./AircraftPopup";

type AircraftLayerProps = {
  selectedAircraftId: number | null;
  onClosePopup: () => void;
};

export function AircraftLayer({
  selectedAircraftId,
  onClosePopup,
}: AircraftLayerProps) {
  // Keep live data and animation updates inside the aircraft overlay.
  const aircraft = useAircraftWebSocket();
  const aircraftGeoJson = useMemo(
    () => toAircraftGeoJson(aircraft),
    [aircraft],
  );
  const selectedAircraft = aircraft.find(
    (item) => item.aircraftId === selectedAircraftId,
  );
  const [forwardOffset, setForwardOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const timer = window.setInterval(() => {
      // Gently nudge 12 pixels toward the nose and ease back every 19.2 seconds.
      const phase = ((performance.now() - start) / 19200) * Math.PI * 2;
      setForwardOffset(-6 * (1 - Math.cos(phase)));
    }, 40);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Source id="aircraft" type="geojson" data={aircraftGeoJson}>
        <Layer
          id="aircraft-icons"
          type="symbol"
          layout={{
            "icon-image": "aircraft",
            "icon-rotate": ["coalesce", ["get", "track"], 0],
            "icon-rotation-alignment": "map",
            "icon-offset": [0, forwardOffset],
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
          }}
        />
      </Source>
      {selectedAircraft && (
        <AircraftPopup aircraft={selectedAircraft} onClose={onClosePopup} />
      )}
    </>
  );
}
