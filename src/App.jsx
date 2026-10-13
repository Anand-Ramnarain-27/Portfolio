import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

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
      <div className="relative z-0 min-h-screen bg-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          {/* Unknown paths fall back to the home page rather than a blank screen. */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
