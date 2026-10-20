import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
  build: {
    // three.js and its React bindings are only needed by the lazily loaded 3D
    // scenes. Keeping them in one named chunk makes that split easy to see in
    // the build output, and the chunk is cached across visits.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vite's lazy-import helper is needed by the main bundle; keep it in a
          // chunk that loads up front anyway.
          if (id.includes("vite/preload-helper") || id.includes("commonjsHelpers")) return "react";
          if (!id.includes("node_modules")) return undefined;
          // React itself must stay out of the three chunk, or the main bundle
          // would have to import that chunk just to get React.
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "react";
          if (/node_modules\/(three|three-stdlib|@react-three|maath)\//.test(id)) return "three";
          return undefined;
        },
      },
    },
  },
});
