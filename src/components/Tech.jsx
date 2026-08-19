import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Stack</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center gap-3 border border-line bg-surface/40 py-6 px-2 hover:border-accent/60 transition-colors"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-9 h-9 object-contain"
            />
            <span className="hud-label text-faint text-center leading-tight">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
