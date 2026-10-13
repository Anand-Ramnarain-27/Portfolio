import { formatIndex } from "../../utils/format";

/** Numbered stages joined by arrows; wraps onto multiple lines on narrow screens. */
const PipelineDiagram = ({ stages }) => (
  <ol className="mt-6 flex flex-wrap items-stretch gap-y-3">
    {stages.map((stage, i) => (
      <li key={stage} className="flex items-center">
        <span className="border border-line bg-surface/60 px-3.5 py-2.5 font-mono text-[12.5px] text-ink">
          <span className="mr-2 text-faint">{formatIndex(i)}</span>
          {stage}
        </span>
        {i < stages.length - 1 && (
          <span aria-hidden className="px-2 font-mono text-accent">
            →
          </span>
        )}
      </li>
    ))}
  </ol>
);

export default PipelineDiagram;
