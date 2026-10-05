import type { Page } from "../types/page";

export function Pagination({
  page,
  onPageChange,
}: {
  page: Page;
  onPageChange: (page: number) => void;
}) {
  // API metadata is zero-based; request parameters and displayed pages are one-based.
  const currentPage = page.number + 1;

  return (
    <nav className="pagination" aria-label="Pagination">
      <p className="pagination-summary" aria-live="polite">
        {page.totalElements === 0
          ? "No results"
          : `${((currentPage - 1) * page.size + 1).toLocaleString()}–${Math.min(currentPage * page.size, page.totalElements).toLocaleString()} of ${page.totalElements.toLocaleString()} results`}
      </p>
      <div className="pagination-controls">
        <button
          type="button"
          disabled={currentPage <= 1 || page.totalPages === 0}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          ← Prev
        </button>
        <span>
          {page.totalPages === 0 ? "0 pages" : `${currentPage} / ${page.totalPages}`}
        </span>
        <button
          type="button"
          disabled={currentPage >= page.totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </nav>
  );
}
