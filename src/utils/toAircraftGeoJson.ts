import type { FeatureCollection, Point } from "geojson";
import type { ApiResponse, ApiResponseBroadcast } from "../types/apiresponse";

export function toAircraftGeoJson(
  aircraft: ApiResponseBroadcast,
): FeatureCollection<Point, ApiResponse> {
  return {
    type: "FeatureCollection",
    features: aircraft.map((item) => ({
      type: "Feature",
      id: item.aircraftId,
      geometry: {
        type: "Point",
        coordinates: [item.longitude, item.latitude],
      },
      properties: item,
    })),
  };
}
