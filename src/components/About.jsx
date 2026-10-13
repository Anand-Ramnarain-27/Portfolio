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

/** Alternate the two accent colours across the role cards. */
const accentFor = (index) => (index % 2 === 0 ? "#ff7a3d" : "#4fd8c4");

const ServiceCard = ({ index, title, icon }) => {
  const accent = accentFor(index);
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      whileHover={{ y: -4 }}
      style={{ "--hover-accent": accent }}
      className="group relative flex min-h-[190px] flex-col items-center justify-center gap-4 border border-line bg-surface/40 p-6 text-center transition-colors hover:border-[var(--hover-accent)]"
    >
      <span className="hud-label absolute left-3 top-3 text-faint">0{index + 1}</span>
      <img
        src={icon}
        alt={title}
        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-[15px] font-medium leading-snug text-ink">{title}</h3>
    </motion.div>
  );
};

const About = () => {
  return (
    <SectionWrapper id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="text-[16px] leading-[28px] text-dim lg:col-span-3"
        >
          I am a Digital Arts graduate from the University of the Witwatersrand, specialising in
          Game Design, Interactive Media, and web-based technologies. I combine a strong foundation
          in software development, game programming, and full-stack web development with a solid
          grounding in user-centred design. I am currently pursuing a Master&apos;s in Advanced
          Programming for AAA Games at UPC Barcelona, deepening my expertise in C++, game engine
          architecture, AI systems, and graphics programming. My work spans game development,
          interactive systems, and modern web applications, and I thrive in collaborative
          environments that challenge me to bridge creativity and engineering to produce polished,
          impactful experiences.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "", 0.2, 1)}
          className="divide-y divide-line border border-line bg-surface/30 lg:col-span-2"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <p className="hud-label mb-1.5 text-faint">{stat.label}</p>
              <p className="text-[14px] leading-snug text-ink">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
