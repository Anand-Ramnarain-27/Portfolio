import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { heroModes } from "../constants/heroModes";
import { profile } from "../constants";

// three.js is the bulk of the site's JavaScript, so the 3D scene loads in its
// own chunk after the text and buttons are already on screen.
const EngineCanvas = lazy(() => import("./canvas/Engine"));

const ctaBase = "hud-label inline-flex items-center gap-2 border px-4 py-2.5 transition-colors";

/**
 * Full-screen landing section. The text answers "who is this?" in a few
 * seconds; the buttons beneath the canvas switch it between G-buffer-style
 * debug views and re-theme the HUD accent colours.
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
      className="viewport-grid relative mx-auto min-h-screen w-full overflow-hidden bg-bg"
      style={{ "--grid-rgb": theme.gridRgb }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={null}>
          <EngineCanvas mode={mode} />
        </Suspense>
      </div>

      {/* Keeps the text readable where it overlaps the 3D scene. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent md:via-bg/40"
        aria-hidden="true"
      />

      <div className="pointer-events-none relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between gap-10 px-6 pb-10 pt-[104px] sm:px-16">
        <div className="hud-label flex justify-between text-faint" aria-hidden="true">
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
            Software Engineer · C++ · Systems · Real-time 3D
          </p>
          <h1 className={styles.heroHeadText}>
            Anand
            {/* One line on wide screens saves vertical space; two on phones. */}
            <br className="md:hidden" /> Ramnarain
          </h1>
          <p className={`${styles.heroSubText} mt-5 max-w-[54ch] text-ink/90`}>
            Early-career software engineer completing a Master&apos;s in Advanced Programming for
            AAA Games at UPC Barcelona. I build C++ engines, cross-engine SDKs and developer tools,
            alongside full-stack applications with TypeScript and React.
          </p>
          <p className="hud-label mt-4 text-dim">
            Barcelona · open to graduate, internship and junior roles
          </p>

          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={`${ctaBase} border-accent bg-accent text-bg hover:bg-accent/90`}
            >
              View projects
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className={`${ctaBase} border-line bg-bg/70 text-ink hover:border-accent hover:text-accent`}
            >
              Download CV ↓
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={`${ctaBase} border-line bg-bg/70 text-ink hover:border-accent hover:text-accent`}
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${ctaBase} border-line bg-bg/70 text-ink hover:border-accent hover:text-accent`}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="pointer-events-auto flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="3D scene render view">
            {heroModes.map((m) => {
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={active}
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
          <span className="hud-label hidden text-faint sm:block" aria-hidden="true">
            drag to orbit
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 hidden w-full items-center justify-center md:flex">
        <a href="#about" className="pointer-events-auto" aria-label="Scroll to About">
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
