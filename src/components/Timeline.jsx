import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const TimelineList = ({ items, accent }) => {
  return (
    <div className="relative pl-9 sm:pl-12">
      <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-px bg-line" />

      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${index}`}
          variants={fadeIn("up", "spring", index * 0.15, 0.75)}
          className="relative pb-10 last:pb-0"
        >
          <span
            className="absolute -left-9 sm:-left-12 top-[6px] w-[11px] h-[11px] border-2"
            style={{ borderColor: accent, backgroundColor: "#0a0b0d" }}
          />

          <p className="hud-label mb-3" style={{ color: accent }}>
            {item.date}
          </p>

          <div className="border border-line bg-surface/30 p-5 sm:p-6 hover:border-faint transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 shrink-0 border border-line bg-bg flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.company_name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-ink text-[19px] leading-tight">
                  {item.title}
                </h3>
                <p
                  className="text-[13px] font-medium"
                  style={{ color: accent }}
                >
                  {item.company_name}
                </p>
              </div>
            </div>

            <ul className="space-y-2">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="text-dim text-[13.5px] leading-[21px] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-faint"
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
