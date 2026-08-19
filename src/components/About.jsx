import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="border border-line bg-surface/40 hover:border-accent/60 transition-colors p-6 flex flex-col items-center gap-4 text-center min-h-[190px] justify-center"
  >
    <img src={icon} alt={title} className="w-10 h-10 object-contain" />
    <h3 className="text-ink font-medium text-[15px] leading-snug">{title}</h3>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-dim text-[16px] max-w-3xl leading-[28px]"
      >
        I am a Digital Arts graduate from the University of the Witwatersrand,
        specialising in Game Design, Interactive Media, and web-based
        technologies. I combine a strong foundation in software development,
        game programming, and full-stack web development with a solid grounding
        in user-centred design. I am currently pursuing a Master's in Advanced
        Programming for AAA Games at UPC Barcelona, deepening my expertise in
        C++, game engine architecture, AI systems, and graphics programming. My
        work spans game development, interactive systems, and modern web
        applications, and I thrive in collaborative environments that challenge
        me to bridge creativity and engineering to produce polished, impactful
        experiences.
      </motion.p>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
