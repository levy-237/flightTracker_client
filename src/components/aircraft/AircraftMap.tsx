import { useRef, useState } from "react";
import Map from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import mapWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "maplibre-gl/dist/maplibre-gl.css";
import { createAircraftIcon } from "../../styles/aircraft-icon";
import { AircraftLayer } from "./AircraftLayer";
import { ResetMapViewButton } from "../ResetMapViewButton";
import { satelliteMapStyle } from "../../styles/map-style";
import { DEFAULT_VIEW } from "../../configs/map-config";

export function AircraftMap() {
  const mapRef = useRef<MapRef>(null);
  const [mapReady, setMapReady] = useState(false);
  const [hoveringAircraft, setHoveringAircraft] = useState(false);
  const [selectedAircraftId, setSelectedAircraftId] = useState<number | null>(
    null,
  );

  return (
    <Map
      ref={mapRef}
      workerUrl={mapWorkerUrl}
      initialViewState={DEFAULT_VIEW}
      style={{ width: "100%", height: "100vh" }}
      interactiveLayerIds={mapReady ? ["aircraft-icons"] : []}
      cursor={hoveringAircraft ? "pointer" : "grab"}
      onMouseMove={(event) =>
        setHoveringAircraft(Boolean(event.features?.length))
      }
      onMouseLeave={() => setHoveringAircraft(false)}
      onClick={(event) => {
        const id = event.features?.[0]?.properties?.aircraftId;
        setSelectedAircraftId(typeof id === "number" ? id : null);
      }}
      mapStyle={satelliteMapStyle}
      onLoad={({ target: map }) => {
        if (!map.hasImage("aircraft")) {
          map.addImage("aircraft", createAircraftIcon(), { pixelRatio: 2 });
        }
        setMapReady(true);
      }}
    >
      <ResetMapViewButton
        disabled={!mapReady}
        onReset={() => {
          mapRef.current?.flyTo({
            center: [DEFAULT_VIEW.longitude, DEFAULT_VIEW.latitude],
            zoom: DEFAULT_VIEW.zoom,
            bearing: DEFAULT_VIEW.bearing,
            pitch: DEFAULT_VIEW.pitch,
            duration: 1200,
          });
        }}
      />
      {mapReady && (
        <AircraftLayer
          selectedAircraftId={selectedAircraftId}
          onClosePopup={() => setSelectedAircraftId(null)}
        />
      )}
    </Map>
  );
}
