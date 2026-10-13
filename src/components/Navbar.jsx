import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../constants";

/**
 * Fixed top navigation with scroll-spy highlighting.
 *
 * Links are router links to `/#<id>`, so they work from case-study pages too:
 * Home scrolls to the hash once it mounts. On case-study pages "Projects"
 * stays highlighted.
 */
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onProjectPage = pathname.startsWith("/projects/");

  // Re-collect sections whenever the route changes, since case-study pages
  // don't render them.
  useEffect(() => {
    const sections = navLinks
      .map((nav) => {
        const marker = document.getElementById(nav.id);
        const section = marker ? marker.closest("section") : null;
        return section ? { title: nav.title, el: section } : null;
      })
      .filter(Boolean);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // The active section is the last one whose top has scrolled past the
      // navbar (plus a little lead-in).
      let current = "";
      for (const { title, el } of sections) {
        if (el.getBoundingClientRect().top <= 160) {
          current = title;
        }
      }
      setActive(onProjectPage ? "Projects" : current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname, onProjectPage]);

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center border-b px-6 py-4 transition-colors sm:px-16 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-accent font-display text-lg font-bold text-accent">
            A
          </span>
          <span className="hud-label hidden text-ink xs:block">Anand Ramnarain</span>
        </Link>

        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={`/#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`hud-label transition-colors ${
                  active === nav.title ? "text-accent" : "text-dim hover:text-ink"
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center sm:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setToggle(!toggle)}
            className="flex h-6 w-8 flex-col justify-between"
          >
            <span
              className={`h-[1.5px] w-full bg-ink transition-transform ${
                toggle ? "translate-y-[10.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-ink transition-opacity ${toggle ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[1.5px] w-full bg-ink transition-transform ${
                toggle ? "-translate-y-[10.5px] -rotate-45" : ""
              }`}
            />
          </button>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute right-6 top-[64px] z-10 min-w-[160px] flex-col gap-4 border border-line bg-surface p-6`}
          >
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                to={`/#${nav.id}`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
                className={`hud-label ${active === nav.title ? "text-accent" : "text-dim"}`}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
