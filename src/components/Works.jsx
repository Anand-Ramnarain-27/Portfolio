import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { formatIndex } from "../utils/format";
import { fadeIn, textVariant } from "../utils/motion";
import TitleCard from "./TitleCard";

const OverlayLink = ({ href, children }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hud-label flex items-center gap-2 text-ink transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceUrl,
  demoUrl,
  websiteUrl,
  itchUrl,
  caseStudy,
  featured = false,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="group relative flex flex-col border border-line bg-surface/30 transition-colors hover:border-accent/50"
  >
    <span className="hud-label absolute left-3 top-3 z-10 bg-bg/70 px-1.5 py-0.5 text-ink/80">
      {formatIndex(index)}
    </span>

    <div
      className={`relative w-full overflow-hidden border-b border-line ${
        featured ? "h-[260px]" : "h-[200px]"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <TitleCard name={name} />
      )}

      {/* Revealed on hover, and on keyboard focus so the links stay reachable. */}
      <div className="absolute inset-0 flex flex-wrap items-end gap-4 bg-gradient-to-t from-bg via-bg/10 to-transparent p-4 opacity-0 transition-opacity duration-300 focus-within:opacity-100 group-hover:opacity-100">
        <OverlayLink href={sourceUrl}>
          <img src={github} alt="" className="h-4 w-4 object-contain" />
          Source
        </OverlayLink>
        <OverlayLink href={demoUrl}>Live Demo ↗</OverlayLink>
        <OverlayLink href={websiteUrl}>Website ↗</OverlayLink>
        <OverlayLink href={itchUrl}>itch.io ↗</OverlayLink>
      </div>
    </div>

    <div className="flex flex-1 flex-col p-5">
      <h3
        className={`font-display font-bold leading-tight text-ink ${
          featured ? "text-[24px]" : "text-[19px]"
        }`}
      >
        {name}
      </h3>
      <p className="mt-2 text-[13.5px] leading-[22px] text-dim">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="tag-pill border-accent-2/40 text-accent-2">
            {tag}
          </li>
        ))}
      </ul>

      {caseStudy && (
        <Link
          to={`/projects/${caseStudy}`}
          className="hud-label mt-auto w-fit pt-5 text-accent transition-colors hover:text-ink"
        >
          Read case study →
        </Link>
      )}
    </div>
  </motion.div>
);

const Works = () => {
  const featured = projects.filter((project) => project.caseStudy);
  const others = projects.filter((project) => !project.caseStudy);

  return (
    <SectionWrapper id="projects">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[28px] text-dim"
      >
        A selection of my work across engine programming, game development and software engineering.
        Featured projects have a full case study covering what the project is and why it exists,
        plus a technical deep dive into how it works.
      </motion.p>

      <p className="hud-label mt-14 text-accent">Featured · case studies</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard key={project.name} index={index} featured {...project} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <p className="hud-label mt-16 text-accent-2">More projects</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, index) => (
              <ProjectCard key={project.name} index={featured.length + index} {...project} />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default Works;
