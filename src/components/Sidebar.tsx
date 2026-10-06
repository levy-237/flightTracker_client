import { useState } from "react";
import { SidebarExpandButton } from "./SidebarExpandButton";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { AircraftList } from "./aircraft/AircraftList";
import { Flights } from "./flight/FlightList";
import { DEFAULT_VIEW } from "../configs/map-config";
import "../styles/Sidebar.css";

const tabs = [
  { id: "aircraft", label: "Aircrafts" },
  { id: "flight", label: "Flights" },
] as const;

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"aircraft" | "flight" | null>(
    null,
  );

  return (
    <div className={`sidebar-layout${isExpanded ? " sidebar-layout--expanded" : ""}`}>
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
        <p className="sidebar-disclaimer">
          Aircraft and flights recorded in our database during current day, near
          latitude {DEFAULT_VIEW.latitude.toFixed(4)}°, longitude{" "}
          {DEFAULT_VIEW.longitude.toFixed(4)}°.
        </p>
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
      {isOpen && (
        <SidebarExpandButton
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded((expanded) => !expanded)}
        />
      )}
      <SidebarToggleButton
        isOpen={isOpen}
        onToggle={() => setIsOpen((open) => !open)}
      />
    </div>
  );
}
