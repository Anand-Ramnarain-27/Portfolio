/**
 * Typographic placeholder used wherever a project has no screenshot yet.
 * Renders the project name over the viewport grid so the slot never looks empty.
 */
const TitleCard = ({ name, large = false }) => (
  <div
    className={`viewport-grid flex h-full w-full items-end bg-surface ${
      large ? "p-8 sm:p-12" : "p-5"
    }`}
    style={{ "--grid-rgb": "255,122,61" }}
  >
    <span
      className={`font-display font-bold uppercase leading-[0.95] text-ink/90 ${
        large ? "text-[44px] sm:text-[88px]" : "text-[34px]"
      }`}
    >
      {name}
    </span>
  </div>
);

export default TitleCard;
