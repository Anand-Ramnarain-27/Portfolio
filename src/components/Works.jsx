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
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="border border-line bg-surface/30 hover:border-accent/50 transition-colors group"
    >
      <div className="relative w-full h-[200px] border-b border-line overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => window.open(source_code_link, "_blank")}
          aria-label={`View source for ${name}`}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-bg/80 border border-line opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <img src={github} alt="" className="w-4 h-4 object-contain" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-ink text-[19px] leading-tight">
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
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
