# Flight Tracker

**This website is under active development.** Features and the interface are still evolving.

Flight Tracker lets you explore live aircraft activity on an interactive satellite map and browse recorded flight data. The frontend is built with React, TypeScript, Vite, and MapLibre, and connects to our Spring Boot API.

Aircraft locations on the map update every 30 seconds via WebSocket messages from the API. Aircraft, flights, and flight positions are stored in our database and served by the Spring Boot API. On initial load, live aircraft data on the map may take up to 20 seconds to appear while the server resumes from inactivity.

## What you can do now

- View aircraft locations updated every 30 seconds through a WebSocket connection, with icons indicating their direction of travel.
- Click an aircraft on the map to see its callsign, registration, type, altitude, ground speed, track, and vertical rate when available.
- Browse paginated aircraft and flight lists in the sidebar.
- Expand an aircraft's Flights dropdown to see its recorded flights.
- Expand a flight's Positions dropdown to browse recorded coordinates, timestamps, and flight measurements.
- Pan and zoom the map, collapse the sidebar, and reset the map to the configured starting view.

The lists include loading indicators and empty states, and the dropdowns offer retry controls when a request fails. Available aircraft, flights, and history depend on the connected backend.

## Coming next

Planned features include:

- **Authentication and user accounts** for a personalized experience.
- **Tracking specific flights** with a dedicated view that follows a selected flight on the map.
- **Saved flights and aircraft** for quick access to favorites.
- **Search and filters** to make finding aircraft and flights easier.
- **Flight paths and history on the map** to explore where a flight has traveled.

These features are not available yet. The roadmap may change as development continues.

## Run locally

Install dependencies:

```sh
npm install
```

Create a `.env` file in the project root. The following values are an example for a local backend and a map centered near Vienna:

```dotenv
VITE_API_URL=http://localhost:8080/api
VITE_BROKER_URL=ws://localhost:8080/ws
VITE_MAP_DEFAULT_LONGITUDE=16.3738
VITE_MAP_DEFAULT_LATITUDE=48.2082
VITE_MAP_DEFAULT_ZOOM=8
VITE_MAP_DEFAULT_BEARING=0
VITE_MAP_DEFAULT_PITCH=0
```

Start the backend, then start the frontend:

```sh
npm run dev
```

Restart the development server after changing `.env`, or rebuild for production changes. The `.env` file is ignored by Git. Variables prefixed with `VITE_` are exposed to the browser, so they must not contain secrets.

## Development commands

| Command           | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the development server.             |
| `npm run build`   | Type-check and create a production build. |
| `npm run preview` | Preview the production build locally.     |
| `npm run lint`    | Run ESLint.                               |
