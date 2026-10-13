/**
 * Two-option tab control. Controlled: the parent owns `value` (and keeps it in
 * the URL so a specific view can be linked to).
 */
const ViewToggle = ({ options, value, onChange }) => (
  <div
    role="tablist"
    aria-label="Case study view"
    className="mt-16 grid max-w-xl grid-cols-2 border border-line"
  >
    {options.map((option) => {
      const active = option.id === value;

      return (
        <button
          key={option.id}
          type="button"
          role="tab"
          aria-selected={active}
          onClick={() => onChange(option.id)}
          className={`px-5 py-4 text-left transition-colors ${
            active ? "bg-accent text-bg" : "bg-bg text-dim hover:bg-surface hover:text-ink"
          }`}
        >
          <span className="block font-display text-[22px] font-bold leading-none">
            {option.label}
          </span>
          <span
            className={`hud-label mt-1.5 block !text-[10.5px] ${
              active ? "text-bg/70" : "text-faint"
            }`}
          >
            {option.hint}
          </span>
        </button>
      );
    })}
  </div>
);

export default ViewToggle;
