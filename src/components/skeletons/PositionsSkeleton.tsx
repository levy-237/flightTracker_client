export function PositionsSkeleton() {
  return (
    <div className="record-list" role="status" aria-label="Loading positions">
      <div className="pagination" aria-hidden="true">
        <div className="skeleton skeleton-summary" />
        <div className="pagination-controls">
          <span className="skeleton skeleton-button" />
          <span className="skeleton skeleton-page" />
          <span className="skeleton skeleton-button" />
        </div>
      </div>
      {[0, 1, 2].map((card) => (
        <div className="position-card" key={card} aria-hidden="true">
          <div className="skeleton skeleton-title" />
          <div className="skeleton-details">
            {Array.from({ length: 14 }, (_, index) => (
              <span className="skeleton skeleton-line" key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
