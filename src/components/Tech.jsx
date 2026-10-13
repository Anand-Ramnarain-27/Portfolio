import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/** Display groups for the Tech section. Names must match `technologies` entries. */
const categories = [
  {
    label: "Languages",
    accent: "#ff7a3d",
    names: ["C++", "C#", "JavaScript", "SQL", "Delphi"],
  },
  {
    label: "Engines & Graphics",
    accent: "#4fd8c4",
    names: ["Unity", "Unreal Engine", "DirectX 12", "Three JS"],
  },
  {
    label: "Web & Tools",
    accent: "#8f7cff",
    names: ["React JS", "Node JS", "Git", "Tailwind CSS", "HTML 5", "CSS 3"],
  },
];

const Tech = () => {
  const [filter, setFilter] = useState("All");

  const visibleCategories =
    filter === "All" ? categories : categories.filter((c) => c.label === filter);

  return (
    <SectionWrapper id="tech">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Stack</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-1.5">
        <button
          onClick={() => setFilter("All")}
          style={
            filter === "All"
              ? { backgroundColor: "#e7eaee", borderColor: "#e7eaee", color: "#0a0b0d" }
              : undefined
          }
          className={`hud-label border px-3.5 py-2 transition-colors duration-300 ${
            filter === "All"
              ? ""
              : "border-line bg-bg/70 text-dim hover:border-faint hover:text-ink"
          }`}
        >
          All
        </button>
        {categories.map((category) => {
          const active = filter === category.label;
          return (
            <button
              key={category.label}
              onClick={() => setFilter(category.label)}
              style={
                active
                  ? {
                      backgroundColor: category.accent,
                      borderColor: category.accent,
                      color: "#0a0b0d",
                    }
                  : undefined
              }
              className={`hud-label border px-3.5 py-2 transition-colors duration-300 ${
                active ? "" : "border-line bg-bg/70 text-dim hover:border-faint hover:text-ink"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {visibleCategories.map((category, catIndex) => {
          const items = technologies.filter((t) => category.names.includes(t.name));
          if (items.length === 0) return null;

          return (
            <motion.div
              key={category.label}
              variants={fadeIn("up", "spring", catIndex * 0.1, 0.6)}
              initial="hidden"
              animate="show"
            >
              <p className="hud-label mb-4" style={{ color: category.accent }}>
                {category.label}
              </p>
              <div className="grid grid-cols-3 gap-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
                {items.map((technology) => (
                  <div
                    key={technology.name}
                    style={{ "--hover-accent": category.accent }}
                    className="group flex flex-col items-center gap-3 border border-line bg-surface/40 px-2 py-6 transition-colors hover:border-[var(--hover-accent)]"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="hud-label text-center leading-tight text-faint">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
