import { Link } from "react-router-dom";

const PagerLink = ({ to, direction, title }) => (
  <Link
    to={to}
    className={`group bg-bg p-6 transition-colors hover:bg-surface ${
      direction === "next" ? "sm:text-right" : ""
    }`}
  >
    <p className="hud-label text-faint">{direction === "next" ? "Next →" : "← Previous"}</p>
    <p className="mt-2 font-display text-[24px] font-bold text-ink transition-colors group-hover:text-accent">
      {title}
    </p>
  </Link>
);

/** Previous / next navigation between case studies (wraps around). */
const CaseStudyPager = ({ previous, next }) => (
  <nav
    aria-label="More case studies"
    className="mt-24 grid gap-px border border-line bg-line sm:grid-cols-2"
  >
    <PagerLink to={`/projects/${previous.slug}`} direction="previous" title={previous.title} />
    <PagerLink to={`/projects/${next.slug}`} direction="next" title={next.title} />
  </nav>
);

export default CaseStudyPager;
