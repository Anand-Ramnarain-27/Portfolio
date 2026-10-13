/**
 * Formats a zero-based index as a two-digit, one-based label ("01", "02", …),
 * matching the HUD-style numbering used on cards and case studies.
 */
export const formatIndex = (index) => String(index + 1).padStart(2, "0");
