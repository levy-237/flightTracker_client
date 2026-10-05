type ResetMapViewButtonProps = {
  disabled: boolean;
  onReset: () => void;
};

export function ResetMapViewButton({ disabled, onReset }: ResetMapViewButtonProps) {
  return (
    <button
      type="button"
      className="reset-map-view"
      aria-label="Return to default map view"
      title="Return to default map view"
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation();
        onReset();
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
      </svg>
    </button>
  );
}
