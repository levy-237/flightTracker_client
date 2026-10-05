import { useState } from "react";
import { AircraftList } from "./aircraft/AircraftList";
import { Flights } from "./flight/FlightList";

const tabs = [
  { id: "aircraft", label: "Aircrafts" },
  { id: "flight", label: "Flights" },
] as const;

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"aircraft" | "flight" | null>(
    null,
  );

  return (
    <>
      <aside
        id="sidebar"
        className="sidebar"
        aria-label="Sidebar"
        hidden={!isOpen}
      >
        <div
          className="sidebar-tabs"
          role="tablist"
          aria-label="Aircraft and flights"
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`sidebar-tab-${id}`}
              aria-controls={`sidebar-panel-${id}`}
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="sidebar-disclaimer">In last 12 hours</p>
        {activeTab === null && (
          <div className="sidebar-overview">
            <h2>Recent activity</h2>
            <button
              className="sidebar-view-option"
              type="button"
              onClick={() => setActiveTab("aircraft")}
            >
              <span>
                <strong>Aircrafts</strong>
                <span>Aircraft seen in the last 12 hours.</span>
              </span>
              <span className="sidebar-option-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
            <button
              className="sidebar-view-option"
              type="button"
              onClick={() => setActiveTab("flight")}
            >
              <span>
                <strong>Flights</strong>
                <span>Flight activity from the same period.</span>
              </span>
              <span className="sidebar-option-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
            <p className="sidebar-map-hint">
              You can also click any plane on the map to see its details.
            </p>
          </div>
        )}
        {tabs.map(({ id }) => (
          <div
            key={id}
            role="tabpanel"
            id={`sidebar-panel-${id}`}
            aria-labelledby={`sidebar-tab-${id}`}
            hidden={activeTab !== id}
            className="sidebar-panel"
          >
            {activeTab === id &&
              (id === "aircraft" ? <AircraftList /> : <Flights />)}
          </div>
        ))}
      </aside>
      <button
        type="button"
        className="sidebar-toggle"
        aria-label={isOpen ? "Collapse sidebar" : "Open sidebar"}
        aria-expanded={isOpen}
        aria-controls="sidebar"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path
            d={isOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </>
  );
}
