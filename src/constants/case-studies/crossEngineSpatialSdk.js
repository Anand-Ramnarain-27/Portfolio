/**
 * Cross-Engine Spatial Data Streaming SDK. Figures in `technical.table` come
 * from the repository's docs/case_study.md stress test.
 */
import sdkViewer from "../../assets/sdk/standalone_viewer.webp";
import sdkMegacity from "../../assets/sdk/megacity_stress_test.webp";
import { still } from "./media";

const crossEngineSpatialSdk = {
  slug: "cross-engine-spatial-sdk",
  title: "Cross-Engine Spatial Data Streaming SDK",
  tagline:
    "One engine-independent C++20 core for streaming city-scale tiled worlds, with thin adapters for Unity, Unreal and my own DirectX 12 engine. Measured, not just claimed.",
  image: sdkViewer,
  meta: {
    role: "Solo developer",
    team: "Personal project",
    timeline: "2026",
    stack: ["C++20", "CMake", "D3D11", "Unity", "Unreal", "DirectX 12"],
  },
  stats: [
    { value: "187", label: "automated tests, all green" },
    { value: "16×", label: "bigger world, flat memory" },
    { value: "1.2 MB", label: "vs 268 MB at 16,384 tiles" },
    { value: "3", label: "engine integrations, one core" },
  ],
  links: {
    source: "https://github.com/Anand-Ramnarain-27/cross-engine-spatial-sdk",
  },

  overview: {
    summary:
      "City- and world-scale 3D data is far too big to load all at once. This SDK works out which tiles matter to the camera, how much detail each one needs, and loads and unloads them in the background without stalling a frame. The same core runs in Unity, Unreal and my own engine.",
    sections: [
      {
        heading: "Why I built it",
        body: "Companies that ship mapping or 3D-data tools usually have to support several engines. Instead of re-implementing streaming for each one, I wanted to show that one well-designed core can serve all of them, with only a thin adapter per engine.",
      },
      {
        heading: "The result in one sentence",
        body: "Growing the world 16 times (1,024 → 16,384 tiles) leaves streaming memory essentially flat at about 1–3 MB, while loading everything grows to 268 MB and still hasn't finished after 90 seconds.",
      },
      {
        heading: "What I'm proud of",
        list: [
          "It's been run, not just compiled: a standalone viewer, a Unity plugin, an Unreal plugin and a custom-engine integration all work end to end.",
          "Every design choice has a written reason, and every bug has a written root cause.",
          "A built-in profiler breaks down each frame by streaming, GPU upload, LOD and debug-draw cost.",
        ],
      },
    ],
  },

  technical: {
    architecture: {
      body: "Engines own a single façade, spatial::SpatialWorld, with a four-method API, and implement one interface, IRenderer. The core depends on no engine and compiles and tests on its own.",
      pipeline: [
        "Quadtree index (frustum / radius / AABB)",
        "LOD: distance + screen-space error, hysteresis",
        "Priority queue → async workers (cancellable)",
        "Tile cache (CPU/GPU budgets)",
        "IRenderer → D3D11 · Unity · Unreal · Phoenix",
      ],
    },
    systems: [
      {
        title: "LOD without popping",
        body: "Distance-only LOD flickers when the camera hovers near a boundary. LODManager keeps state per tile and only switches once a choice has been stable long enough, so a fast camera and a still one both behave correctly without special cases.",
      },
      {
        title: "Cancellable, prioritised streaming",
        body: "The request queue dedupes when requests are added and cancels lazily, because the camera can leave a tile's radius before its load even starts. Loads that finish after they're no longer wanted are dropped, which is a separate failure mode from cancellation.",
      },
      {
        title: "One eviction formula",
        body: "keepScore = lastPriority − recencyWeight × framesSinceLastTouched replaces separate LRU and distance policies. Tiles that leave the radius stay cached until memory pressure evicts them, so moving back and forth across a boundary is a cache hit, not a reload.",
      },
      {
        title: "Integration boundaries",
        body: "Unity needs a C ABI (P/Invoke only crosses free functions and fixed-layout structs). Unreal uses one defensively, because its pinned toolchain could silently corrupt the heap across a C++ boundary. Phoenix links the C++ directly, after I checked its compiler and runtime settings match, and needs no coordinate conversion because both share a right-handed, Y-up convention.",
      },
    ],
    table: {
      title: "Measured: streaming vs loading everything",
      note: "Same hardware, generator and per-tile complexity. Streaming uses a 400 m radius, 256 max tiles and a 512 MB CPU budget, measured with the camera stationary after streaming settles.",
      columns: [
        "Dataset",
        "Tiles",
        "Streaming: resident / memory",
        "Full residency: resident / memory / load time",
      ],
      highlightColumn: 2,
      rows: [
        ["BigCity", "1,024", "68 / 2.97 MB", "1,024 / 44.7 MB / ~12 s"],
        ["MidCity", "4,096", "66 / 1.16 MB", "4,096 / 72.1 MB / ~16 s"],
        ["MegaCity", "16,384", "68 / 1.20 MB", "15,224 / 268 MB / not done after 90 s"],
      ],
    },
    challenges: [
      {
        title: "Upload callback use-after-free",
        problem:
          "A GPU-upload callback writes into its tile's record, but the tile could be evicted, erasing that record, while the upload was still in flight.",
        solution:
          "Deferred erasure: a record marked non-resident is only erased once every upload holding a reference to it has completed.",
      },
      {
        title: "Destruction-order crash",
        problem:
          "Declaring SpatialWorld before the renderer meant the renderer was destroyed first, and SpatialWorld's destructor then called into it (SIGSEGV).",
        solution:
          "The rule 'the renderer must outlive the world' is now documented at every call site that holds both.",
      },
      {
        title: "Unreal: row-vector vs column-vector matrices",
        problem:
          "Unreal stores translation in a matrix's last row; the SDK's Mat4 stores it in the last column. That was harmless with identity transforms, but a bug waiting for the first real one.",
        solution:
          "Fixed in BuildTransform(), and verified with a unit test and with correctly lit geometry on screen.",
      },
      {
        title: "Phoenix: precompiled-header include order",
        problem: "'std::span is not a member of std' and other errors that seemed unrelated.",
        solution:
          "MSVC silently drops anything included before the engine's precompiled header. I found it by comparing include order against every other file in that codebase.",
      },
      {
        title: "Unreal: everything renders black",
        problem: "Geometry was correct but completely black against a black background.",
        solution:
          "The demo scene had no light, so I spawned a directional light. 'Nothing renders' and 'nothing is lit' produce the same screenshot.",
      },
    ],
    next: ["glTF/OBJ dataset import (procedural datasets only today)"],
  },
  gallery: [
    still(sdkMegacity, "MegaCity stress test: 16,384 tiles, 88 resident, ~1.5 MB CPU memory"),
  ],
};

export default crossEngineSpatialSdk;
