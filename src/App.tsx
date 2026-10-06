import { Analytics } from "@vercel/analytics/react";
import { AircraftMap } from "./components/aircraft/AircraftMap";
import { Sidebar } from "./components/Sidebar";
import { DevelopmentNotice } from "./components/DevelopmentNotice";

function App() {
  return (
    <>
      <AircraftMap />
      <Sidebar />
      <DevelopmentNotice />
      <Analytics />
    </>
  );
}

export default App;
