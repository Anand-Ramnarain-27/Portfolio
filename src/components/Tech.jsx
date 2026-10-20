import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { practices, skillLevels, skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/** Visual weight per proficiency level, strongest first. */
const LEVELS = [
  { id: "strong", label: "Strong", pill: "border-accent/60 text-ink bg-accent/10" },
  { id: "working", label: "Working", pill: "border-accent-2/40 text-accent-2" },
  { id: "familiar", label: "Familiar", pill: "border-line text-dim" },
];

const SkillArea = ({ index, area, ...levels }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.6)}
    className="border border-line bg-surface/30 p-5"
  >
    <h3 className="text-[16px] font-semibold text-ink">{area}</h3>
    <dl className="mt-4 space-y-3">
      {LEVELS.filter((level) => levels[level.id]?.length).map((level) => (
        <div key={level.id} className="grid grid-cols-[72px_1fr] items-start gap-3">
          <dt className="hud-label pt-1 !text-[10.5px] text-faint">{level.label}</dt>
          <dd>
            <ul className="flex flex-wrap gap-1.5">
              {levels[level.id].map((skill) => (
                <li key={skill} className={`tag-pill ${level.pill}`}>
                  {skill}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </motion.div>
);

/**
 * Skills grouped by area and level. Levels are shown as text, not bars or
 * percentages, so they say something an interviewer can check.
 */
const Tech = () => (
  <SectionWrapper id="skills">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I use, and how much</p>
      <h2 className={styles.sectionHeadText}>Skills.</h2>
    </motion.div>

    <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-dim">
      {LEVELS.map((level) => (
        <div key={level.id} className="flex items-center gap-2">
          <dt className={`tag-pill ${level.pill}`}>{level.label}</dt>
          <dd>{skillLevels[level.id]}</dd>
        </div>
      ))}
    </dl>

    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((group, index) => (
        <SkillArea key={group.area} index={index} {...group} />
      ))}
    </div>

    <div className="mt-8 border border-line bg-surface/30 p-5">
      <h3 className="hud-label text-accent">How I work</h3>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {practices.map((practice) => (
          <li
            key={practice}
            className="relative pl-4 text-[14px] text-dim before:absolute before:left-0 before:text-faint before:content-['—']"
          >
            {practice}
          </li>
        ))}
      </ul>
    </div>
  </SectionWrapper>
);

export default Tech;
