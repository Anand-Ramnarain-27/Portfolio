import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { university } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TimelineList from "./Timeline";

const University = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My studies so far</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-14 max-w-3xl">
        <TimelineList items={university} accent="#4fd8c4" />
      </div>
    </>
  );
};

export default SectionWrapper(University, "university");
