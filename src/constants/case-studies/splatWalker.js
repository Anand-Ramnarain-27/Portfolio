/**
 * Splat Walker: Gaussian splat path viewer (Three.js web build + Unity port).
 */
import { splatWalker, splatWalkerUnity } from "../../assets";
import { still } from "./media";

const splatWalkerStudy = {
  slug: "splat-walker",
  title: "Splat Walker",
  tagline:
    "A Gaussian splat viewer built around the captured path: retrace the exact route a scanner walked, step off to explore freely, and compare captures side by side. Built for the web, then rebuilt in Unity.",
  image: splatWalker,
  meta: {
    role: "Solo developer",
    team: "Personal project",
    timeline: "2026",
    stack: ["Three.js", "Spark", "TypeScript", "Unity 6", "C#"],
  },
  stats: [
    { value: "38M → 4.8M", label: "Gaussians, picked from 7 LOD levels" },
    { value: "~70 MB", label: "web scene, down from ~410 MB" },
    { value: "0", label: "hand-placed camera waypoints" },
    { value: "3", label: "bugs, one symptom (Unity port)" },
  ],
  links: {
    demo: "https://anand-ramnarain-27.github.io/splat-walker/",
    source: "https://github.com/Anand-Ramnarain-27/splat-walker",
    sourceAlt: "https://github.com/Anand-Ramnarain-27/splat-walker-unity",
    sourceAltLabel: "Unity port",
  },

  overview: {
    summary:
      "Splat capture is more and more often used to record a real place at one point in time, like a construction site, a trail or a storefront, usually by walking through it with a scanner. The useful product isn't just a 3D scene you can orbit. It's walking the same route the surveyor walked, and eventually comparing that route on two different days. Splat Walker makes the captured path the main way to explore.",
    sections: [
      {
        heading: "What you can do",
        list: [
          "Follow Path: play, pause and scrub through an overview sweep followed by a ground-level walkthrough.",
          "Free Explore: WASD or arrow keys plus mouse-look to step off the path and back.",
          "Compare: two scenes side by side, each orbitable on its own.",
        ],
      },
      {
        heading: "The scene",
        body: "The web demo uses a real trail hike: Calico Tanks Trail at Red Rock Canyon, captured with an XGRIDS PortalCam by Paolo Tosolini (CC BY 4.0). It runs in the browser with no install.",
      },
      {
        heading: "Two versions",
        body: "The Unity version isn't a code port. Unity's splat rendering (C#/HLSL with GPU sorting in compute) shares nothing with the browser stack, so I rebuilt the same design on different foundations. That's closer to the SDK work real-time engine teams actually ship.",
      },
    ],
    shows: [
      "Shipping a web app with a public live demo",
      "Turning raw capture data into a usable camera path (PCA, percentiles)",
      "Porting between platforms: Three.js to Unity",
      "Separating three bugs that looked like one",
    ],
  },

  technical: {
    architecture: {
      body: "Web: plain TypeScript and Vite with Three.js for the scene and render loop, and Spark for splat rendering (chosen over GaussianSplats3D, which is no longer developed). Unity: Unity 6 forced to Direct3D 12, with aras-p's UnityGaussianSplatting for rendering.",
      pipeline: [
        "Source capture (SOG, 7 LODs)",
        "splat-transform → .spz (LOD 2, NaN/floater filter)",
        "Percentile-radius overview",
        "PCA trail axis + terrain sampling",
        "Spline playback · free-fly · compare",
      ],
    },
    systems: [
      {
        title: "Path built from the data",
        body: "The camera path isn't hand-authored. framing.ts estimates a bounding radius from percentiles (so stray splats don't throw it off) for the overview sweep. A PCA pass over the cloud's horizontal spread then finds the trail's real direction, and the ground-level walkthrough samples terrain height near each waypoint instead of assuming flat ground.",
      },
      {
        title: "Picking the right level of detail",
        body: "The source had 7 LOD levels, from 19M down to 297K splats. Level 2 (~4.8M) is the balance point: finer levels pushed well past 100 MB for little visible gain at walkthrough distances, and levels 4 and up left gaps in the ground. I tried forcing full detail with lod: false and reverted it. At 4.8M splats, Spark's adaptive LOD (about 2.5M rendered on desktop, 1–1.5M on mobile) is the right call.",
      },
      {
        title: "Unity port",
        body: "Catmull-Rom path playback, a camera rig switching between path and free-fly, and editor menu commands that rebuild the scene from scratch. Unity's splat renderer doesn't expose raw splat positions at runtime, so the same percentile and PCA framing runs offline in a small Node script that reads the PLY directly, and the results are baked into the scene.",
        media: [
          still(splatWalkerUnity, "Unity port: camera-path walkthrough of the snow-street scene"),
        ],
      },
    ],
    challenges: [
      {
        title: "Unity: SPZ version mismatch",
        problem: "The Unity package refused to read the scene files.",
        solution:
          "Its SPZ reader only accepts format version 2, and current export tools write version 3 or later. I converted to PLY instead.",
      },
      {
        title: "Unity: the whole scene renders as colour noise",
        problem:
          "The scene looked like chaotic colour noise from any camera position, which at a glance looks exactly like the camera being stuck inside geometry.",
        solution:
          "The component's SH Order defaults to 3, but this data had fewer spherical-harmonics bands, so the shader was sampling coefficients that didn't exist. I found it by comparing splat-transform --info against the Inspector, and set SH Order to match exactly (2 for snow-street, 0 for Calico).",
      },
      {
        title: "Unity: overview camera ends up under the scene",
        problem:
          "The ground-level walkthrough looked fine, but the overview camera sat below the scene looking up at inverted geometry.",
        solution:
          "The 180° X flip from COLMAP's Y-down data to Unity's Y-up had been applied to the finished waypoints, which reversed every relative-height offset in the framing maths. The fix is to flip each point as soon as it's read, before any centroid, PCA or percentile maths runs.",
      },
      {
        title: "Corrupted splats in real captures",
        problem:
          "Both scenes contained garbage splats: 1000×-outlier scales in one, and ~21% deleted-marker positions in the other.",
        solution:
          "I filter both before import: scale outliers with splat-transform's -V threshold, and position outliers with a bounding box (-B).",
      },
    ],
    next: [
      "Finish the Calico Tanks Trail scene in Unity, re-baking its waypoints with the flip applied",
    ],
  },
  gallery: [
    still(splatWalker, "Web viewer. Scene: Calico Tanks Trail by Paolo Tosolini, CC BY 4.0"),
  ],
};

export default splatWalkerStudy;
