import { AircraftMap } from "./components/aircraft/AircraftMap";
import { Sidebar } from "./components/Sidebar";
import { DevelopmentNotice } from "./components/DevelopmentNotice";

function App() {
  return (
    <>
      <AircraftMap />
      <Sidebar />
      <DevelopmentNotice />
    </>
  );
}

export default App;
