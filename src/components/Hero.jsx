import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EngineCanvas } from "./canvas";
import { heroModes } from "../constants/heroModes";

/**
 * Full-screen landing section. The buttons switch the canvas between
 * G-buffer-style debug views; each view also re-themes the HUD accent colours.
 */
const Hero = () => {
  const [mode, setMode] = useState("albedo");
  const [resolution, setResolution] = useState("");

  const theme = heroModes.find((m) => m.id === mode) || heroModes[0];

  useEffect(() => {
    const updateRes = () => setResolution(`${window.innerWidth}×${window.innerHeight}`);
    updateRes();
    window.addEventListener("resize", updateRes);
    return () => window.removeEventListener("resize", updateRes);
  }, []);

  return (
    <section
      className="viewport-grid relative mx-auto h-screen w-full overflow-hidden bg-bg"
      style={{ "--grid-rgb": theme.gridRgb }}
    >
      <div className="absolute inset-0">
        <EngineCanvas mode={mode} />
      </div>

      <div className="pointer-events-none absolute inset-0 mx-auto flex w-full max-w-7xl flex-col justify-between px-6 pb-10 pt-[104px] sm:px-16">
        <div className="hud-label flex justify-between text-faint">
          <span>
            VIEWPORT · <span className="text-dim">{resolution}</span>
          </span>
          <span className="transition-colors duration-500" style={{ color: theme.accent2 }}>
            ● LIVE
          </span>
        </div>

        <div>
          <p
            className="hud-label mb-3 transition-colors duration-500"
            style={{ color: theme.accent }}
          >
            Full-Stack &amp; Game Systems Engineer
          </p>
          <h1 className={styles.heroHeadText}>
            Anand
            <br />
            Ramnarain
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-[46ch]`}>
            I build real-time engines, games, and full-stack web applications — C++, TypeScript,
            React, Unity, and Unreal.
          </p>
        </div>

        <div className="pointer-events-auto flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-wrap gap-1.5">
            {heroModes.map((m) => {
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  style={
                    active
                      ? { backgroundColor: m.accent, borderColor: m.accent, color: "#0a0b0d" }
                      : undefined
                  }
                  className={`hud-label border px-3.5 py-2 transition-colors duration-300 ${
                    active ? "" : "border-line bg-bg/70 text-dim hover:border-faint hover:text-ink"
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
          <span className="hud-label hidden text-faint sm:block">drag to orbit</span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-24 flex w-full items-center justify-center xs:bottom-8">
        <a href="#about" className="pointer-events-auto">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border border-line p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              style={{ backgroundColor: theme.accent }}
              className="mb-1 h-3 w-3 rounded-full transition-colors duration-500"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
