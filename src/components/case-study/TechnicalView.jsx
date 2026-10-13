import { formatIndex } from "../../utils/format";
import CodeBlock from "./CodeBlock";
import LayerDiagram from "./LayerDiagram";
import MediaFigure from "./MediaFigure";
import PipelineDiagram from "./PipelineDiagram";
import ResultsTable from "./ResultsTable";
import SectionLabel from "./SectionLabel";

/**
 * Systems with diagrams, code or media need the full row; plain text cards
 * share the three-column grid.
 */
const isWideSystem = (system) =>
  Boolean(system.layers || system.code?.length || system.media?.length);

const SystemCard = ({ system }) => (
  <div
    className={`border border-line bg-surface/30 p-5 transition-colors hover:border-accent-2/60 ${
      isWideSystem(system) ? "sm:col-span-2 lg:col-span-3" : ""
    }`}
  >
    <h4 className="font-display text-[20px] font-bold leading-tight text-ink">{system.title}</h4>
    <p className="mt-2 max-w-3xl text-[14px] leading-[23px] text-dim">{system.body}</p>

    {system.layers && (
      <div className="mt-5">
        <LayerDiagram layers={system.layers} />
      </div>
    )}

    {system.code?.length > 0 && (
      <div className="mt-4 grid items-start gap-4 lg:grid-cols-2">
        {system.code.map((snippet) => (
          <div key={snippet.label} className={snippet.wide ? "lg:col-span-2" : ""}>
            <CodeBlock {...snippet} />
          </div>
        ))}
      </div>
    )}

    {system.media?.length > 0 && (
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {system.media.map((item) => (
          <MediaFigure key={item.caption} item={item} />
        ))}
      </div>
    )}
  </div>
);

const ChallengeCard = ({ index, challenge }) => (
  <div className="border border-line bg-surface/30">
    <div className="flex items-baseline gap-3 px-5 pt-5">
      <span className="hud-label text-faint">{formatIndex(index)}</span>
      <h4 className="font-display text-[21px] font-bold leading-tight text-ink">
        {challenge.title}
      </h4>
    </div>
    <div className="mt-5 grid gap-px border-t border-line bg-line md:grid-cols-2">
      <div className="bg-bg p-5">
        <p className="hud-label mb-2 text-faint">Problem</p>
        <p className="text-[14.5px] leading-[24px] text-dim">{challenge.problem}</p>
      </div>
      <div className="bg-bg p-5">
        <p className="hud-label mb-2 text-accent-2">Root cause &amp; fix</p>
        <p className="text-[14.5px] leading-[24px] text-dim">{challenge.solution}</p>
      </div>
    </div>
  </div>
);

/** The engineering half of a case study. Every block is optional. */
const TechnicalView = ({ architecture, systems = [], table, challenges = [], next = [] }) => (
  <div className="flex flex-col gap-16">
    {architecture && (
      <section>
        <SectionLabel>Architecture</SectionLabel>
        <p className="max-w-3xl text-[16px] leading-[28px] text-dim">{architecture.body}</p>
        {architecture.pipeline?.length > 0 && <PipelineDiagram stages={architecture.pipeline} />}
      </section>
    )}

    {systems.length > 0 && (
      <section>
        <SectionLabel>Key systems</SectionLabel>
        <div className="grid grid-flow-dense gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </div>
      </section>
    )}

    {table && (
      <section>
        <SectionLabel>{table.title}</SectionLabel>
        <ResultsTable {...table} />
      </section>
    )}

    {challenges.length > 0 && (
      <section>
        <SectionLabel>Problems I solved</SectionLabel>
        <div className="flex flex-col gap-4">
          {challenges.map((challenge, i) => (
            <ChallengeCard key={challenge.title} index={i} challenge={challenge} />
          ))}
        </div>
      </section>
    )}

    {next.length > 0 && (
      <section>
        <SectionLabel color="text-accent-2">What&apos;s next</SectionLabel>
        <ul className="space-y-2">
          {next.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-[15px] leading-[26px] text-dim before:absolute before:left-0 before:text-accent-2 before:content-['→']"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    )}
  </div>
);

export default TechnicalView;
