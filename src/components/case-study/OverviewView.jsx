import SectionLabel from "./SectionLabel";

/**
 * The non-technical half of a case study: what, why, role and outcome.
 *
 * `shows` translates the project into general engineering skills, so a reader
 * who isn't a graphics or engine specialist can still see what it proves.
 */
const OverviewView = ({ summary, sections, shows = [] }) => (
  <div>
    <p className="max-w-4xl text-[19px] leading-[1.55] text-ink sm:text-[22px]">{summary}</p>

    {shows.length > 0 && (
      <section className="mt-12 border border-line bg-surface/30 p-6">
        <SectionLabel color="text-accent-2">What this project shows</SectionLabel>
        <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
          {shows.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-[15px] leading-[25px] text-ink before:absolute before:left-0 before:text-accent-2 before:content-['✓']"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    )}

    <div className="mt-14 divide-y divide-line border-y border-line">
      {sections.map((section) => (
        <div key={section.heading} className="grid gap-3 py-8 md:grid-cols-[240px_1fr] md:gap-10">
          <h3 className="font-display text-[24px] font-bold leading-tight text-ink">
            {section.heading}
          </h3>
          <div className="max-w-3xl">
            {section.body && <p className="text-[16px] leading-[28px] text-dim">{section.body}</p>}
            {section.list && (
              <ul className="space-y-3">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[16px] leading-[27px] text-dim before:absolute before:left-0 before:text-accent before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OverviewView;
