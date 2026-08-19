import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  { label: "Currently", value: "MSc Advanced Programming for AAA Games — UPC Barcelona" },
  { label: "Focus", value: "Game systems, interactive media, and full-stack web development" },
  { label: "Core Stack", value: "C++ · C# · TypeScript · React · Unity · Unreal" },
];

const accentFor = (index) => (index % 2 === 0 ? "#ff7a3d" : "#4fd8c4");

const ServiceCard = ({ index, title, icon }) => {
  const accent = accentFor(index);
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      whileHover={{ y: -4 }}
      style={{ "--hover-accent": accent }}
      className="relative border border-line bg-surface/40 hover:border-[var(--hover-accent)] transition-colors p-6 flex flex-col items-center gap-4 text-center min-h-[190px] justify-center group"
    >
      <span className="absolute top-3 left-3 hud-label text-faint">
        0{index + 1}
      </span>
      <img
        src={icon}
        alt={title}
        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-ink font-medium text-[15px] leading-snug">{title}</h3>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="lg:col-span-3 text-dim text-[16px] leading-[28px]"
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

        <motion.div
          variants={fadeIn("left", "", 0.2, 1)}
          className="lg:col-span-2 border border-line bg-surface/30 divide-y divide-line"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <p className="hud-label text-faint mb-1.5">{stat.label}</p>
              <p className="text-ink text-[14px] leading-snug">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
