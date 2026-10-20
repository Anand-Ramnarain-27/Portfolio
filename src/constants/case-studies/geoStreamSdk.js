/**
 * Geo Stream SDK: Unity package for streaming LiDAR point clouds.
 */
import { geoStreamSdk } from "../../assets";
import geoDemo from "../../assets/sdk/geo-demo.mp4";
import geoDemoPoster from "../../assets/sdk/geo-demo-poster.webp";
import { clip } from "./media";

const geoStreamSdkStudy = {
  slug: "geo-stream-sdk",
  title: "Geo Stream SDK",
  tagline:
    "An installable Unity package that streams LiDAR point clouds at runtime. Tiles load and unload around the camera, so tens of millions of points never need to be in memory at once.",
  image: geoStreamSdk,
  heroVideo: clip(
    geoDemo,
    geoDemoPoster,
    "Basic Streaming Demo: watch the Resident Points and Loaded Tiles counters",
  ),
  meta: {
    role: "Solo developer",
    team: "Personal project",
    timeline: "2026",
    stack: ["Unity 2021.3+", "C#", "HLSL", "UPM", "NUnit"],
  },
  stats: [
    { value: "1", label: "draw call per resident tile" },
    { value: "0", label: "dependencies (MIT-clean core)" },
    { value: "Off-thread", label: "tile reads (Task.Run)" },
  ],
  links: {
    source: "https://github.com/Anand-Ramnarain-27/geo-stream-sdk",
  },

  overview: {
    summary:
      "City-scale digital twins, GIS platforms and survey tools run on two kinds of streamed 3D data: tiled meshes and LiDAR point clouds. Unity already has an official loader for the first (Cesium for Unity) but no settled answer for the second. Geo Stream SDK is that missing piece: an installable package, not a demo scene.",
    sections: [
      {
        heading: "How you use it",
        list: [
          "Install it from the Unity Package Manager with a git URL.",
          "GeoStreamSDK > Import Point Cloud: pick a .las file and a tile size in metres.",
          "Add a Point Cloud Streamer component, assign the dataset and press Play.",
          "No data handy? The bundled sample can generate a synthetic dataset in one click.",
        ],
      },
      {
        heading: "Honest scope",
        body: "Version 1 reads uncompressed LAS (formats 0–3) only. I left out LAZ on purpose, because the only mature C# codec is LGPL and I wanted the core to stay a zero-dependency MIT install. Tiles are single-resolution, and it targets desktop and console.",
      },
    ],
    shows: [
      "Packaging a reusable, installable Unity SDK",
      "Spatial partitioning and memory-budgeted streaming",
      "Plain C# classes kept testable, with an NUnit suite",
      "GPU-instanced rendering for millions of points",
    ],
  },

  technical: {
    architecture: {
      body: "The editor importer splits the file into a spatial grid once. At runtime, a plain C# manager streams tiles by camera distance and a renderer draws them with instanced indirect calls.",
      pipeline: [
        "LasReader (streams point by point)",
        "Spatial grid → .gspidx + .gspc",
        "TileStreamManager (load/unload radii)",
        "ComputeBuffer per tile",
        "DrawMeshInstancedIndirect",
      ],
    },
    systems: [
      {
        title: "Import without loading the file",
        body: "The importer streams the LAS file point by point, sorts each point into a grid cell, and writes each cell as one contiguous byte range in a .gspc chunk file. A small .gspidx index stays fully in memory.",
      },
      {
        title: "Float-safe coordinates",
        body: "Real-world coordinates (UTM eastings and northings in the millions) quickly exceed float precision. Import stores every point relative to the dataset's centre, and the streamer's transform places that origin in the scene.",
      },
      {
        title: "Streaming with hysteresis",
        body: "Tiles inside the load radius are requested nearest first, throttled to N per frame. Tiles beyond the unload radius are released, and the gap between the two radii stops tiles thrashing at the edge. Reads happen off the main thread, and if the point budget is exceeded the farthest tiles are evicted first.",
      },
      {
        title: "Rendering at scale",
        body: "One Graphics.DrawMeshInstancedIndirect call per resident tile, against a shared quad, with a shader that reads positions and colours from the tile's ComputeBuffer and billboards them. I didn't use one GameObject per point (the garbage-collection and transform costs would be enormous), or DrawMeshInstanced, which is capped at 1023 instances.",
      },
      {
        title: "Tested and documented",
        body: "TileStreamManager and the renderer are plain C# classes that can be tested without MonoBehaviours. An NUnit suite checks the LAS parser against a hand-built fixture file, and every public member has XML docs.",
      },
    ],
    challenges: [],
    next: [
      "Optional LAZ module, isolated so the LGPL dependency stays out of the MIT core",
      "Octree-based multi-resolution streaming",
      "An Unreal Engine port of the same streaming model",
    ],
  },
  gallery: [],
};

export default geoStreamSdkStudy;
