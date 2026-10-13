import boundByDeath from "./case-studies/boundByDeath";
import crossEngineSpatialSdk from "./case-studies/crossEngineSpatialSdk";
import geoStreamSdk from "./case-studies/geoStreamSdk";
import phoenixEngine from "./case-studies/phoenixEngine";
import splatWalker from "./case-studies/splatWalker";

/**
 * @typedef {Object} Media
 * @property {"video" | "image"} type
 * @property {string} src
 * @property {string} [poster]  Videos only.
 * @property {string} caption
 *
 * @typedef {Object} CaseStudy
 * @property {string} slug        URL segment: /projects/<slug>.
 * @property {string} title
 * @property {string} tagline     One-sentence pitch shown under the title.
 * @property {string | null} image   Card and fallback hero image.
 * @property {Media} [heroVideo]  Replaces `image` in the hero slot when present.
 * @property {{ role: string, team: string, timeline: string, stack: string[] }} meta
 * @property {{ value: string, label: string }[]} [stats]  Headline numbers.
 * @property {Object<string, string>} links  website | itch | demo | releases |
 *   source | sourceAlt (+ sourceAltLabel) | contributions. Empty values are hidden.
 * @property {{ summary: string, sections: { heading: string, body?: string, list?: string[] }[] }} overview
 *   The non-technical view.
 * @property {Object} technical  The engineering view: `architecture`, `systems`,
 *   `table`, `challenges` and `next`. See TechnicalView for the accepted shape.
 * @property {Media[]} [gallery]
 */

/**
 * Case studies in display order. This order drives both the "Case study 01 / 05"
 * counter and the previous / next links at the bottom of each page.
 *
 * Project cards link here through `caseStudy: "<slug>"` in constants/index.js.
 *
 * @type {CaseStudy[]}
 */
export const caseStudies = [
  phoenixEngine,
  boundByDeath,
  splatWalker,
  crossEngineSpatialSdk,
  geoStreamSdk,
];

/** @returns {CaseStudy | undefined} */
export const getCaseStudy = (slug) => caseStudies.find((study) => study.slug === slug);
