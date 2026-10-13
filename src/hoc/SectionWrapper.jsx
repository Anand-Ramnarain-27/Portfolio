import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * Home-page section shell: shared padding, max width and a reveal-on-scroll
 * animation that staggers its motion children.
 *
 * `id` becomes the anchor the navbar links to. It sits on an offset span rather
 * than the section itself so the fixed navbar doesn't cover the heading after
 * jumping to it (see `.hash-span` in index.css).
 */
const SectionWrapper = ({ id, children }) => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
  >
    {id && (
      <span className="hash-span" id={id}>
        &nbsp;
      </span>
    )}
    {children}
  </motion.section>
);

export default SectionWrapper;
