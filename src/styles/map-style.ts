import type { StyleSpecification } from "maplibre-gl";

export const satelliteMapStyle: StyleSpecification = {
  version: 8,
  sources: {
    labels: {
      type: "raster",
      tiles: [
        "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
      maxzoom: 23,
      attribution:
        'Labels &copy; Esri, HERE, Garmin, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, and the GIS user community',
    },
    satellite: {
      type: "raster",
      tiles: [
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution:
        'Imagery &copy; <a href="https://www.esri.com/">Esri</a>, Maxar, Earthstar Geographics, and the GIS User Community',
    },
  },
  layers: [
    { id: "background", type: "background", paint: { "background-color": "#101820" } },
    {
      id: "satellite",
      type: "raster",
      source: "satellite",
      paint: { "raster-fade-duration": 0 },
    },
    {
      id: "labels",
      type: "raster",
      source: "labels",
      paint: { "raster-fade-duration": 0 },
    },
  ],
};
