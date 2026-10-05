# Flight Tracker

Run `npm install` and `npm run dev` to start the app.

Configure the initial map view and reset destination in `.env` using `VITE_MAP_DEFAULT_LONGITUDE`, `VITE_MAP_DEFAULT_LATITUDE`, `VITE_MAP_DEFAULT_ZOOM`, `VITE_MAP_DEFAULT_BEARING`, and `VITE_MAP_DEFAULT_PITCH`. All five values must be finite numbers. Restart the development server after editing them; rebuild for production changes.

The page displays a MapLibre map centered near Vienna using Esri World Imagery satellite tiles. On load, it connects to `ws://localhost:8080/ws`, subscribes to `/topic/flights`, and validates incoming aircraft arrays with Zod. Each broadcast updates a GeoJSON source and logs the parsed data in the browser console. Aircraft icons rotate by `track`, defaulting to north when the value is null. Start the backend on port 8080 to receive messages. The map style requires internet access.

Run `npm run build` to build and `npm run lint` to check the code.
# flightTracker_client
