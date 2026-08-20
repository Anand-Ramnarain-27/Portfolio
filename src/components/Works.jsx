import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  featured,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className={`relative border border-line bg-surface/30 hover:border-accent/50 transition-colors group ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <span className="absolute top-3 left-3 z-10 hud-label text-ink/80 bg-bg/70 px-1.5 py-0.5">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`relative w-full border-b border-line overflow-hidden ${
          featured ? "h-[260px]" : "h-[200px]"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end gap-4 p-4">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="hud-label flex items-center gap-2 text-ink hover:text-accent transition-colors"
          >
            <img src={github} alt="" className="w-4 h-4 object-contain" />
            View Source
          </button>
          {live_demo_link && (
            <button
              onClick={() => window.open(live_demo_link, "_blank")}
              className="hud-label flex items-center gap-2 text-ink hover:text-accent transition-colors"
            >
              Live Demo ↗
            </button>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3
          className={`font-display font-bold text-ink leading-tight ${
            featured ? "text-[24px]" : "text-[19px]"
          }`}
        >
          {name}
        </h3>
        <p className="mt-2 text-dim text-[13.5px] leading-[22px]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className="tag-pill border-accent-2/40 text-accent-2">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-dim text-[16px] max-w-3xl leading-[28px]"
        >
          The following projects highlight my skills and experience across game
          development, engine programming, and software engineering. Each entry
          includes a brief description and a link to the source code, reflecting
          my technical range and how I approach building real systems.
        </motion.p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            featured={index === 0}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
