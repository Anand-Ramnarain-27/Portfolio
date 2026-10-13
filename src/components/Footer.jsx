import { socials } from "../constants";

/** Site-wide footer with profile links. */
const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center sm:px-16">
      <p className="hud-label text-faint">
        © {new Date().getFullYear()} Anand Ramnarain · Barcelona
      </p>
      <ul className="flex flex-wrap gap-5">
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target={s.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="hud-label text-dim transition-colors hover:text-accent"
            >
              {s.name} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
