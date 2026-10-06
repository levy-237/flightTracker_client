type SidebarToggleButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function SidebarToggleButton({ isOpen, onToggle }: SidebarToggleButtonProps) {
  return (
    <button
      type="button"
      className="sidebar-toggle"
      aria-label={isOpen ? "Collapse sidebar" : "Open sidebar"}
      aria-expanded={isOpen}
      aria-controls="sidebar"
      onClick={onToggle}
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
  );
}
