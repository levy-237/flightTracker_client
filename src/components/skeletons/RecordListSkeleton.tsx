import "../../styles/RecordList.css";

export function RecordListSkeleton({ kind }: { kind: "aircraft" | "flights" }) {
  return (
    <div
      className="record-list"
      role="status"
      aria-label={`Loading ${kind}`}
    >
      <div className="pagination" aria-hidden="true">
        <div className="skeleton skeleton-summary" />
        <div className="pagination-controls">
          <span className="skeleton skeleton-button" />
          <span className="skeleton skeleton-page" />
          <span className="skeleton skeleton-button" />
        </div>
      </div>
      {[0, 1, 2].map((card) => (
        <div className="record-card" key={card} aria-hidden="true">
          <div className="record-image skeleton" />
          <div className="skeleton skeleton-title" />
          {kind === "flights" && (
            <>
              <SkeletonDetails rows={3} />
              <h4><span className="skeleton skeleton-section" /></h4>
            </>
          )}
          <SkeletonDetails rows={4} />
        </div>
      ))}
    </div>
  );
}

function SkeletonDetails({ rows }: { rows: number }) {
  return (
    <div className="skeleton-details">
      {Array.from({ length: rows * 2 }, (_, index) => (
        <span className="skeleton skeleton-line" key={index} />
      ))}
    </div>
  );
}
