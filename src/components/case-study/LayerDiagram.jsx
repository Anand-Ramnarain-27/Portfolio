/** Left-to-right stack of named layers, e.g. Definition → Library → Runtime. */
const LayerDiagram = ({ layers }) => (
  <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
    {layers.map((layer, i) => (
      <li key={layer.name} className="relative border border-line bg-bg p-4">
        <p className="hud-label !text-[10.5px] text-accent">Layer {i + 1}</p>
        <p className="mt-1.5 font-display text-[22px] font-bold leading-none text-ink">
          {layer.name}
        </p>
        <p className="mt-2 break-all font-mono text-[12px] text-accent-2">{layer.type}</p>
        <p className="mt-3 text-[13.5px] leading-[21px] text-dim">{layer.body}</p>

        {i < layers.length - 1 && (
          <span
            aria-hidden
            className="absolute -right-[11px] top-1/2 z-10 hidden -translate-y-1/2 font-mono text-accent lg:block"
          >
            →
          </span>
        )}
      </li>
    ))}
  </ol>
);

export default LayerDiagram;
