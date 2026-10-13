const SectionLabel = ({ children, color = "text-accent" }) => (
  <p className={`hud-label mb-4 ${color}`}>{children}</p>
);

export default SectionLabel;
