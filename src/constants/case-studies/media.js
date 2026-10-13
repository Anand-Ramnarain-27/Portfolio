/**
 * Describes a looping video for `MediaFigure` / `VideoClip`.
 *
 * @param {string} src     Imported .mp4 URL.
 * @param {string} poster  Imported still frame shown before the clip plays.
 * @param {string} caption Visible caption, also used as the video's aria-label.
 */
export const clip = (src, poster, caption) => ({ type: "video", src, poster, caption });

/** Describes a still image for `MediaFigure`. */
export const still = (src, caption) => ({ type: "image", src, caption });
