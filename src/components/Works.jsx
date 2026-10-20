import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { github } from "../assets";
import { projectCategories, projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import TitleCard from "./TitleCard";

const ALL = "all";

/** Source links get the GitHub mark; everything else is an outbound arrow. */
const ProjectLink = ({ label, url }) => {
  const isSource = /source|files|build/i.test(label) && url.includes("github.com");
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="hud-label inline-flex items-center gap-1.5 text-dim transition-colors hover:text-accent"
    >
      {isSource && <img src={github} alt="" className="h-3.5 w-3.5 object-contain" />}
      {label}
      {!isSource && " ↗"}
    </a>
  );
};

const ProjectCard = ({
  index,
  name,
  subtitle,
  role,
  description,
  tags,
  image,
  links = [],
  caseStudy,
  featured = false,
}) => (
  <motion.article
    variants={fadeIn("up", "spring", Math.min(index, 6) * 0.06, 0.6)}
    className="group relative flex flex-col border border-line bg-surface/30 transition-colors hover:border-accent/50"
  >
    <div
      className={`relative w-full overflow-hidden border-b border-line ${
        featured ? "aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <TitleCard name={name} />
      )}
      {role && (
        <span className="hud-label absolute left-3 top-3 border border-line bg-bg/85 px-2 py-1 !text-[10.5px] text-ink">
          {role}
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-5">
      <h3
        className={`font-display font-bold leading-tight text-ink ${
          featured ? "text-[26px]" : "text-[21px]"
        }`}
      >
        {caseStudy ? (
          <Link to={`/projects/${caseStudy}`} className="hover:text-accent">
            {name}
          </Link>
        ) : (
          name
        )}
      </h3>
      {subtitle && <p className="mt-1 text-[13.5px] text-accent-2">{subtitle}</p>}
      <p className="mt-3 text-[14px] leading-[23px] text-dim">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {tags.map((tag) => (
          <li key={tag} className="tag-pill border-line text-dim">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
        {caseStudy && (
          <Link
            to={`/projects/${caseStudy}`}
            className="hud-label text-accent transition-colors hover:text-ink"
          >
            Read case study →
          </Link>
        )}
        {links.map((link) => (
          <ProjectLink key={link.url} {...link} />
        ))}
      </div>
    </div>
  </motion.article>
);

const FilterButton = ({ active, onClick, children, count }) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={`hud-label border px-3.5 py-2 transition-colors duration-300 ${
      active
        ? "border-ink bg-ink text-bg"
        : "border-line bg-bg/70 text-dim hover:border-faint hover:text-ink"
    }`}
  >
    {children} <span className={active ? "text-bg/70" : "text-faint"}>{count}</span>
  </button>
);

/**
 * Projects, with the case-study projects featured first and everything else
 * in a compact grid below. The category filter applies to both lists.
 */
const Works = () => {
  const [filter, setFilter] = useState(ALL);

  const matches = (project) => filter === ALL || project.categories?.includes(filter);
  const visible = projects.filter(matches);
  const featured = visible.filter((project) => project.caseStudy);
  const others = visible.filter((project) => !project.caseStudy);

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
        Engines, SDKs, tools, games and web applications. Each card says what I did and with whom.
        Featured projects have a full case study with an overview for everyone and a technical deep
        dive for engineers.
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
        <FilterButton
          active={filter === ALL}
          onClick={() => setFilter(ALL)}
          count={projects.length}
        >
          All
        </FilterButton>
        {projectCategories.map((category) => (
          <FilterButton
            key={category.id}
            active={filter === category.id}
            onClick={() => setFilter(category.id)}
            count={projects.filter((p) => p.categories?.includes(category.id)).length}
          >
            {category.label}
          </FilterButton>
        ))}
      </div>

      {featured.length > 0 && (
        <>
          <h3 className="hud-label mt-10 text-accent">Featured · case studies</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={project.name} index={index} featured {...project} />
            ))}
          </div>
        </>
      )}

      {others.length > 0 && (
        <>
          <h3 className="hud-label mt-14 text-accent-2">More projects</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, index) => (
              <ProjectCard key={project.name} index={index} {...project} />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default Works;
