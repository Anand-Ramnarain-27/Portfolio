import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
    <>
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
          className={`hud-label px-3.5 py-2 border transition-colors duration-300 ${
            filter === "All"
              ? ""
              : "bg-bg/70 border-line text-dim hover:text-ink hover:border-faint"
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
              className={`hud-label px-3.5 py-2 border transition-colors duration-300 ${
                active
                  ? ""
                  : "bg-bg/70 border-line text-dim hover:text-ink hover:border-faint"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {visibleCategories.map((category, catIndex) => {
          const items = technologies.filter((t) =>
            category.names.includes(t.name)
          );
          if (items.length === 0) return null;

          return (
            <motion.div
              key={category.label}
              variants={fadeIn("up", "spring", catIndex * 0.1, 0.6)}
              initial="hidden"
              animate="show"
            >
              <p
                className="hud-label mb-4"
                style={{ color: category.accent }}
              >
                {category.label}
              </p>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                {items.map((technology) => (
                  <div
                    key={technology.name}
                    style={{ "--hover-accent": category.accent }}
                    className="flex flex-col items-center gap-3 border border-line bg-surface/40 py-6 px-2 hover:border-[var(--hover-accent)] transition-colors group"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="hud-label text-faint text-center leading-tight">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
