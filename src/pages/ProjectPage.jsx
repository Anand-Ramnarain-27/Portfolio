import { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import HudCorners from "../components/HudCorners";
import TitleCard from "../components/TitleCard";
import {
  CaseStudyHeader,
  CaseStudyPager,
  MediaFigure,
  OverviewView,
  SectionLabel,
  TechnicalView,
  VideoClip,
  ViewToggle,
} from "../components/case-study";
import { caseStudies, getCaseStudy } from "../constants/caseStudies";
import { formatIndex } from "../utils/format";

const VIEWS = [
  { id: "overview", label: "Overview", hint: "For everyone" },
  { id: "technical", label: "Technical", hint: "For engineers" },
];
const DEFAULT_VIEW = VIEWS[0].id;

const viewTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const NotFound = () => (
  <section className="mx-auto min-h-[70vh] max-w-7xl px-6 pb-24 pt-[140px] sm:px-16">
    <p className="hud-label text-accent">404 · Case study not found</p>
    <h1 className="mt-3 font-display text-[48px] font-bold text-ink">Nothing rendered here.</h1>
    <Link to="/#projects" className="hud-label mt-8 inline-block text-accent">
      ← Back to projects
    </Link>
  </section>
);

/** Hero slot: a looping clip if the study has one, then a still, then a title card. */
const HeroMedia = ({ study }) => (
  <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-line bg-surface">
    <HudCorners />
    {study.heroVideo ? (
      <VideoClip {...study.heroVideo} className="h-full w-full object-cover" />
    ) : study.image ? (
      <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
    ) : (
      <TitleCard name={study.title} large />
    )}
  </div>
);

/**
 * Case study at /projects/:slug.
 *
 * The active view lives in the `?view=` query parameter rather than component
 * state, so "send me the technical write-up" is just a link.
 */
const ProjectPage = () => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const study = getCaseStudy(slug);

  const requestedView = searchParams.get("view");
  const view = VIEWS.some((v) => v.id === requestedView) ? requestedView : DEFAULT_VIEW;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${study ? study.title : "Project not found"} | Anand Ramnarain`;
  }, [study]);

  if (!study) return <NotFound />;

  const index = caseStudies.indexOf(study);
  const previous = caseStudies.at(index - 1);
  const next = caseStudies[(index + 1) % caseStudies.length];

  // The hero already shows `image`, so don't repeat it in the gallery.
  const gallery = (study.gallery ?? []).filter((item) => item.src !== study.image);

  const handleViewChange = (nextView) => {
    const params = new URLSearchParams(searchParams);
    if (nextView === DEFAULT_VIEW) params.delete("view");
    else params.set("view", nextView);
    setSearchParams(params, { replace: true });
  };

  return (
    <article className="mx-auto max-w-7xl px-6 pb-24 pt-[110px] sm:px-16">
      <div className="hud-label flex items-center justify-between text-faint">
        <Link to="/#projects" className="transition-colors hover:text-accent">
          ← All projects
        </Link>
        <span>
          Case study · {formatIndex(index)} / {formatIndex(caseStudies.length - 1)}
        </span>
      </div>

      <CaseStudyHeader study={study} />
      <HeroMedia study={study} />

      <ViewToggle options={VIEWS} value={view} onChange={handleViewChange} />

      <div className="mt-12 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div key={view} {...viewTransition}>
            {view === "technical" ? (
              <TechnicalView {...study.technical} />
            ) : (
              <OverviewView {...study.overview} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {gallery.length > 0 && (
        <section className="mt-20">
          <SectionLabel>Gallery</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2">
            {gallery.map((item) => (
              <MediaFigure key={item.caption} item={item} />
            ))}
          </div>
        </section>
      )}

      <CaseStudyPager previous={previous} next={next} />
    </article>
  );
};

export default ProjectPage;
