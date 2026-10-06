type SidebarExpandButtonProps = {
  isExpanded: boolean;
  onToggle: () => void;
};

export function SidebarExpandButton({
  isExpanded,
  onToggle,
}: SidebarExpandButtonProps) {
  return (
    <button
      type="button"
      className="sidebar-resize"
      aria-label={isExpanded ? "Reduce sidebar width" : "Expand sidebar width"}
      title={isExpanded ? "Reduce sidebar width" : "Expand sidebar width"}
      aria-pressed={isExpanded}
      aria-controls="sidebar"
      onClick={onToggle}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d={
            isExpanded
              ? "M9 3v6H3m18 0h-6V3M3 15h6v6m6 0v-6h6"
              : "M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"
          }
        />
      </svg>
    </button>
  );
}
