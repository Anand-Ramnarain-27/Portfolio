/**
 * Four accent-coloured corner brackets, drawn over the edges of the nearest
 * positioned ancestor. Purely decorative.
 */
const HudCorners = () => (
  <>
    <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-accent" />
    <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-accent" />
    <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-accent" />
    <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-accent" />
  </>
);

export default HudCorners;
