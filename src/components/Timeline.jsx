import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

/** Vertical timeline shared by the Experience and Education sections. */
const TimelineList = ({ items, accent }) => {
  return (
    <div className="relative pl-9 sm:pl-12">
      <div className="absolute bottom-2 left-[5px] top-2 w-px bg-line sm:left-[7px]" />

      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${index}`}
          variants={fadeIn("up", "spring", index * 0.15, 0.75)}
          className="relative pb-10 last:pb-0"
        >
          <span
            className="absolute -left-9 top-[6px] h-[11px] w-[11px] border-2 sm:-left-12"
            style={{ borderColor: accent, backgroundColor: "#0a0b0d" }}
          />

          <p className="hud-label mb-3" style={{ color: accent }}>
            {item.date}
          </p>

          <div className="border border-line bg-surface/30 p-5 transition-colors hover:border-faint sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-bg">
                <img src={item.icon} alt={item.company} className="h-6 w-6 object-contain" />
              </div>
              <div>
                <h3 className="font-display text-[19px] font-bold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium" style={{ color: accent }}>
                  {item.company}
                </p>
              </div>
            </div>

            <ul className="space-y-2">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="relative pl-4 text-[13.5px] leading-[21px] text-dim before:absolute before:left-0 before:text-faint before:content-['—']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineList;
