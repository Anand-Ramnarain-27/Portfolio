import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center px-6 sm:px-16 py-4 fixed top-0 z-20 border-b transition-colors ${
        scrolled
          ? "bg-bg/85 backdrop-blur border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="w-9 h-9 flex items-center justify-center border border-accent text-accent font-display font-bold text-lg">
            A
          </span>
          <span className="hud-label text-ink hidden xs:block">
            Anand Ramnarain
          </span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`hud-label transition-colors ${
                  active === nav.title
                    ? "text-accent"
                    : "text-dim hover:text-ink"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            onClick={() => setToggle(!toggle)}
            className="w-8 h-6 flex flex-col justify-between"
          >
            <span
              className={`h-[1.5px] w-full bg-ink transition-transform ${
                toggle ? "translate-y-[10.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-ink transition-opacity ${
                toggle ? "opacity-0" : ""
              }`}
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
            } flex-col gap-4 p-6 bg-surface border border-line absolute top-[64px] right-6 min-w-[160px] z-10`}
          >
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
                className={`hud-label ${
                  active === nav.title ? "text-accent" : "text-dim"
                }`}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
