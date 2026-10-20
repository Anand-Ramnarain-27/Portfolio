import { github } from "../../assets";
import ExternalButton from "./ExternalButton";

const GitHubIcon = () => <img src={github} alt="" className="h-4 w-4 object-contain" />;

const MetaItem = ({ label, children }) => (
  <div className="bg-bg p-4">
    <dt className="hud-label mb-1.5 text-faint">{label}</dt>
    <dd className="text-[14px] leading-snug text-ink">{children}</dd>
  </div>
);

/** Title, one-line pitch, project facts, headline numbers and outbound links. */
const CaseStudyHeader = ({ study }) => {
  const { meta, links = {}, stats = [] } = study;

  return (
    <header className="mt-10">
      <h1 className="font-display text-[40px] font-bold leading-[0.95] text-ink sm:text-[58px] lg:text-[76px]">
        {study.title}
      </h1>
      <p className="mt-5 max-w-3xl text-[17px] leading-[1.6] text-dim sm:text-[19px]">
        {study.tagline}
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
        <MetaItem label="Role">{meta.role}</MetaItem>
        <MetaItem label="Team">{meta.team}</MetaItem>
        <MetaItem label="Timeline">{meta.timeline}</MetaItem>
        <MetaItem label="Stack">
          <span className="flex flex-wrap gap-1.5">
            {meta.stack.map((tech) => (
              <span key={tech} className="tag-pill border-accent-2/40 text-accent-2">
                {tech}
              </span>
            ))}
          </span>
        </MetaItem>
      </dl>

      {stats.length > 0 && (
        <ul className="mt-6 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="bg-surface/40 p-4">
              <p className="font-display text-[30px] font-bold leading-none text-accent sm:text-[36px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-dim">{stat.label}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <ExternalButton href={links.website} primary>
          Game website ↗
        </ExternalButton>
        <ExternalButton href={links.itch} primary={!links.website}>
          itch.io page ↗
        </ExternalButton>
        <ExternalButton href={links.demo} primary>
          Live demo ↗
        </ExternalButton>
        <ExternalButton href={links.releases} primary>
          Download build ↗
        </ExternalButton>
        <ExternalButton href={links.source}>
          <GitHubIcon />
          Source code
        </ExternalButton>
        <ExternalButton href={links.sourceAlt}>
          <GitHubIcon />
          {links.sourceAltLabel ?? "More source"}
        </ExternalButton>
        <ExternalButton href={links.contributions}>
          <GitHubIcon />
          My contributions
        </ExternalButton>
      </div>
    </header>
  );
};

export default CaseStudyHeader;
