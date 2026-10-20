import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { aboutFacts, focusAreas } from "../constants";
import { getCaseStudy } from "../constants/caseStudies";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/** Alternate the two accent colours across the focus cards. */
const accentFor = (index) => (index % 2 === 0 ? "#ff7a3d" : "#4fd8c4");

/** One area of work, with links to the case studies that back it up. */
const FocusCard = ({ index, title, icon, body, projects }) => {
  const accent = accentFor(index);
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.12, 0.75)}
      style={{ "--hover-accent": accent }}
      className="flex flex-col border border-line bg-surface/40 p-5 transition-colors hover:border-[var(--hover-accent)]"
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="h-8 w-8 object-contain" />
        <h3 className="text-[16px] font-semibold leading-snug text-ink">{title}</h3>
      </div>
      <p className="mt-3 text-[14px] leading-[22px] text-dim">{body}</p>
      <p className="hud-label mt-auto pt-4 text-faint">Shown in</p>
      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
        {projects.map((slug) => {
          const study = getCaseStudy(slug);
          if (!study) return null;
          return (
            <li key={slug}>
              <Link
                to={`/projects/${slug}`}
                className="text-[13px] underline decoration-line underline-offset-4 transition-colors hover:text-ink"
                style={{ color: accent }}
              >
                {study.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

const About = () => {
  return (
    <SectionWrapper id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
          className="space-y-4 text-[16px] leading-[28px] text-dim lg:col-span-3"
        >
          <p>
            I&apos;m a software engineer at the start of my career, working mostly in C++ on systems
            that other code depends on: engines, libraries and tools. I grew a DirectX 12 engine
            from Master&apos;s coursework into a deferred renderer with physics, scripting and
            standalone builds. I designed a second engine around one interface over DirectX 12 and
            Metal, with 78 unit tests and CI on both platforms. I also built a C++20 streaming SDK
            with 187 automated tests that Unity, Unreal and my own engine all use through one API.
          </p>
          <p>
            Before games I built web software: a React, TypeScript and PostgreSQL application at BBD
            Software, and a website for a small business. The two sides help each other. Web work
            taught me to build for the people using the software; engine work taught me to care
            about memory, performance and tests.
          </p>
          <p>
            The problems I enjoy most are the ones where something looks right but isn&apos;t: a
            crash that only happens while the GPU is still using a resource, or a model that imports
            upside-down. I like finding the real cause, fixing it in the design rather than around
            it, and leaving a test or a note so it stays fixed. I also like building tools that let
            designers work without waiting for a programmer.
          </p>
        </motion.div>

        <motion.dl
          variants={fadeIn("left", "", 0.2, 1)}
          className="divide-y divide-line self-start border border-line bg-surface/30 lg:col-span-2"
        >
          {aboutFacts.map((fact) => (
            <div key={fact.label} className="p-4">
              <dt className="hud-label mb-1.5 text-faint">{fact.label}</dt>
              <dd className="text-[14px] leading-snug text-ink">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <h3 className="hud-label mt-12 text-accent">What I work on</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area, index) => (
          <FocusCard key={area.title} index={index} {...area} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
