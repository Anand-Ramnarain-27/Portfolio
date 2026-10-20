import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { About, Contact, Experience, Hero, Tech, Works, University } from "../components";

// Decorative background behind Contact; loaded separately with three.js.
const StarsCanvas = lazy(() => import("../components/canvas/Stars"));

/** Delay before scrolling to a hash, giving the sections a moment to lay out. */
const HASH_SCROLL_DELAY_MS = 50;

/**
 * The single-page home route. Also handles `/#section` links coming from other
 * routes, since the browser's native anchor jump runs before React has
 * rendered the target.
 */
const Home = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    document.title = "Anand Ramnarain | Software Engineer: C++, systems and real-time 3D";
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, HASH_SCROLL_DELAY_MS);
    return () => clearTimeout(timer);
    // `key` changes on every navigation, so clicking the same nav link twice
    // still scrolls.
  }, [hash, key]);

  return (
    <>
      <Hero />
      <About />
      <Works />
      <Experience />
      <Tech />
      <University />
      <div className="relative z-0">
        <Contact />
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
