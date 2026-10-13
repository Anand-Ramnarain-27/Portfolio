/*
 * Framer Motion variant factories shared by the home-page sections. Each one
 * returns `hidden` / `show` variants, driven by SectionWrapper's whileInView.
 */

/** Section headings: drop in from above with a spring. */
export const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

/**
 * Fade in while sliding from `direction` ("left" | "right" | "up" | "down").
 * Any other value fades in place.
 */
export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

/** Slide a full element's width/height in from off-screen. */
export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" || direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

/** Parent variant that staggers its children's `show` transitions. */
export const staggerContainer = (staggerChildren, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
