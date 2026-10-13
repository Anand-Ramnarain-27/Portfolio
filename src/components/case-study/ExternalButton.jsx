/**
 * Outbound link styled as a button. Renders nothing when `href` is empty, so
 * case-study data can leave optional links blank instead of branching in JSX.
 */
const ExternalButton = ({ href, primary = false, children }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`hud-label inline-flex items-center gap-2 border px-4 py-2.5 transition-colors ${
        primary
          ? "border-accent bg-accent text-bg hover:opacity-90"
          : "border-line text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </a>
  );
};

export default ExternalButton;
