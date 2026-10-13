/** The non-technical half of a case study: what, why, role and outcome. */
const OverviewView = ({ summary, sections }) => (
  <div>
    <p className="max-w-4xl text-[19px] leading-[1.55] text-ink sm:text-[22px]">{summary}</p>

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
