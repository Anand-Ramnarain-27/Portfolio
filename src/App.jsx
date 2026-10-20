import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import { Navbar, Footer } from "./components";
import Home from "./pages/Home";

// Case studies carry most of the media, so they load on first visit to one.
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

/*
 * The site is served from /Portfolio/ on GitHub Pages (`base` in vite.config.js),
 * so the router is mounted under that prefix. GitHub Pages has no SPA fallback;
 * deep links such as /Portfolio/projects/phoenix-engine are served by
 * dist/404.html, a copy of index.html written by the `build` script.
 */
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      {/* "user" turns off Framer Motion transforms when the OS asks for reduced motion. */}
      <MotionConfig reducedMotion="user">
        <div className="relative z-0 min-h-screen bg-bg">
          <a
            href="#main"
            className="hud-label sr-only z-50 bg-accent px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">
            <Suspense fallback={<div className="min-h-screen" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:slug" element={<ProjectPage />} />
                {/* Unknown paths fall back to the home page rather than a blank screen. */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;
