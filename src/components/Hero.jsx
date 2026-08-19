import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EngineCanvas } from "./canvas";

const MODES = [
  { id: "albedo", label: "Albedo" },
  { id: "normal", label: "Normal" },
  { id: "depth", label: "Depth" },
  { id: "wire", label: "Wireframe" },
];

const Hero = () => {
  const [mode, setMode] = useState("albedo");
  const [resolution, setResolution] = useState("");

  useEffect(() => {
    const updateRes = () =>
      setResolution(`${window.innerWidth}×${window.innerHeight}`);
    updateRes();
    window.addEventListener("resize", updateRes);
    return () => window.removeEventListener("resize", updateRes);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto viewport-grid bg-bg overflow-hidden">
      <div className="absolute inset-0">
        <EngineCanvas mode={mode} />
      </div>

      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between max-w-7xl mx-auto w-full pt-[104px] pb-10 px-6 sm:px-16">
        <div className="hud-label flex justify-between text-faint">
          <span>
            VIEWPORT · <span className="text-dim">{resolution}</span>
          </span>
          <span className="text-accent-2">● LIVE</span>
        </div>

        <div>
          <p className="hud-label text-accent mb-3">
            Graphics &amp; Gameplay Programmer
          </p>
          <h1 className={styles.heroHeadText}>
            Anand
            <br />
            Ramnarain
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-[46ch]`}>
            I build real-time renderers and game systems — C++, DirectX 12,
            Unity, and Unreal.
          </p>
        </div>

        <div className="flex justify-between items-end gap-5 flex-wrap pointer-events-auto">
          <div className="flex gap-1.5 flex-wrap">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`hud-label px-3.5 py-2 border transition-colors ${
                  mode === m.id
                    ? "bg-accent border-accent text-bg"
                    : "bg-bg/70 border-line text-dim hover:text-ink hover:border-faint"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <span className="hud-label text-faint hidden sm:block">
            drag to orbit
          </span>
        </div>
      </div>

      <div className="absolute xs:bottom-8 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border border-line flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
