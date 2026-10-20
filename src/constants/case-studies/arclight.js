/**
 * Arclight: cross-platform C++20 engine with Direct3D 12 and Metal backends.
 * Facts come from the engine repository's README, CHANGELOG and
 * docs/ROADMAP.md, and from Anand's lecture-by-lecture roadmap tracker
 * (80 items in phases 0–9 plus extras). Item counts reflect the repository
 * as of v0.3 plus the Phase 3 scene work.
 */
import arcWindows from "../../assets/arclight/editor-windows.webp";
import arcMacos from "../../assets/arclight/editor-macos.webp";
import arcTriangle from "../../assets/arclight/first-triangle-metal.webp";
import arcTextureDemo from "../../assets/arclight/texture-demo-macos.webp";
import arcXcodeCapture from "../../assets/arclight/xcode-gpu-capture.webp";
import { still } from "./media";

const arclight = {
  slug: "arclight",
  title: "Arclight",
  tagline:
    "A cross-platform C++20 game engine and editor: one rendering interface with Direct3D 12 on Windows and Metal on macOS, shaders written once in HLSL, and CI building and testing both platforms on every push.",
  image: arcWindows,
  meta: {
    role: "Solo developer",
    team: "Personal project",
    timeline: "Oct 2026 – present · v0.1 → v0.3",
    stack: ["C++20", "Direct3D 12", "Metal", "HLSL", "CMake", "SDL3", "ImGui"],
  },
  stats: [
    { value: "2", label: "graphics APIs behind one RHI (plus a Null backend for tests)" },
    { value: "78", label: "unit test cases, run without a GPU" },
    { value: "3", label: "milestones shipped (v0.1 – v0.3)" },
    { value: "27\u00a0/\u00a080", label: "roadmap items done, each tied to a lecture" },
  ],
  links: {
    source: "https://github.com/Anand-Ramnarain-27/arclight-engine",
  },

  overview: {
    summary:
      "Arclight is my second engine, written from scratch so that it runs natively on both Windows and Mac. Phoenix Engine taught me Direct3D 12; Arclight is where I learn to design an engine properly: an abstraction over two very different graphics APIs, a build anyone can reproduce with one command, and tests that run on every push.",
    sections: [
      {
        heading: "Why a second engine",
        body: "Phoenix Engine is Windows-only and grew feature by feature. I wanted to start again with portability and structure as requirements from day one, and to work through my Master's lectures in order, implementing each topic cleanly rather than bolting it on. Nothing is carried over from Phoenix: every system is rewritten for two platforms.",
      },
      {
        heading: "How I work on it",
        list: [
          "The roadmap is 80 items across ten phases, each tied to the Master's lecture it comes from. Items where Arclight has to differ from the Windows-only course are tagged cross-platform; the stylized-rendering items go beyond the course.",
          "An item only counts as done once it builds and runs on both machines, Windows and an Apple M1 Mac, and its notebook entry is written.",
          "Each phase ships as a versioned release that works on both platforms before the next one starts.",
          "I keep an engineering notebook of what I built and why, so every decision has its reasoning written down.",
          "Every change is recorded in a Keep a Changelog CHANGELOG, and versions follow semantic versioning.",
          "The course's Windows-only starter code sat in the repository as a reference only, outside the build, and was removed once nothing needed it.",
        ],
      },
      {
        heading: "How it grew",
        list: [
          "v0.1 Foundations: CMake build, SDL3 window and input, frame timing, a math library and a dockable ImGui editor shell.",
          "v0.2 Rendering hardware interface: Direct3D 12 and Metal backends, build-time shader compilation, pipelines and in-app GPU capture.",
          "v0.3 Meshes and viewport: mipmapped textures, safe resource lifetimes, a render-to-texture scene viewport, an editor camera and glTF 2.0 import.",
          "Now, Phase 3 engine architecture: the scene, Hierarchy and Inspector are done; mouse picking and gizmos, a virtual file system, the asset pipeline, serialization, culling and a skybox come next.",
        ],
      },
      {
        heading: "Where it's going",
        body: "After the engine architecture come lighting and PBR, compute and a job system, advanced rendering (deferred shading, tiled light culling, cascaded shadows, SSAO, reflections, post-processing, TAA), VFX, animation and gameplay systems. My lectures only cover physically based rendering, so alongside them I'm adding stylized rendering as a second material model in the same scene: toon/cel shading with inverted-hull outlines in the PBR phase, then screen-space ink lines, comic hatching and halftone, and a pixel-art mode with palettes, dithering and a pixel-snapped camera.",
      },
    ],
    shows: [
      "Designing one abstraction over two very different graphics APIs",
      "Cross-platform C++20 with CMake and pinned dependencies",
      "78 automated tests and CI on Windows and macOS",
      "Safe resource lifetimes with generational handles and deferred release",
      "Treating input files as untrusted: bounds-checked glTF import",
      "Planning and documenting the work: roadmap, changelog, versioned releases",
    ],
  },

  technical: {
    architecture: {
      body: "The editor and engine systems are modules that the application initialises in order and shuts down in reverse. Everything that touches the GPU goes through the RHI, so no engine header includes a graphics API. Shaders are written once in HLSL and compiled at build time for each platform, so a shader error is a build error.",
      pipeline: [
        "Editor: panels, camera, selection",
        "Engine modules: Application, Scene, ImGui",
        "Renderer: frames, scene target, meshes",
        "RHI: device, command lists, resources",
        "Direct3D 12 · Metal · Null",
      ],
    },
    systems: [
      {
        title: "A thin RHI shaped like Metal",
        body: "Render passes are explicit, with load and store actions, because Metal is the stricter of the two APIs: Direct3D 12 can emulate a pass cheaply, but Metal cannot work without one. Resource states and barriers follow Direct3D 12; Metal tracks hazards itself and only records them, so the same rules are checked on both platforms. A Null backend runs the unit tests with no GPU.",
        media: [
          still(arcWindows, "The editor on Windows, rendering through Direct3D 12"),
          still(arcMacos, "The same scene on macOS through Metal (Apple M1)"),
        ],
      },
      {
        title: "Write shaders once",
        body: "Each HLSL shader is compiled at build time: to DXIL with DXC for Direct3D 12, and to SPIR-V, then Metal Shading Language through SPIRV-Cross, then a .metallib on macOS. HLSL register numbers become Metal binding indices, so both backends bind resources to the same slots.",
        media: [
          still(arcTriangle, "Phase 1: the first triangle on Metal, from a shader written in HLSL"),
        ],
      },
      {
        title: "Textures & samplers",
        body: "PNG, JPEG, TGA and BMP loading with full mip chains generated on the CPU, averaging sRGB images in linear space so mips don't darken. Samplers cover point to anisotropic filtering, every address mode, border colours, LOD clamps and mip bias, all switchable live in a Texture Demo panel to see what each setting does.",
        media: [
          still(
            arcTextureDemo,
            "Texture Demo on macOS: a 1024² UV grid with 11 mips under live sampler settings",
          ),
        ],
      },
      {
        title: "Safe GPU resource lifetimes",
        body: "Two frames in flight, a per-frame upload ring for shader constants, and generational handles with fence-based deferred release. A resource can be destroyed while the GPU is still using it: the device keeps it alive until the last frame that could touch it has finished, and a stale handle is detected instead of reaching whatever reused its slot.",
      },
      {
        title: "Editor viewport & camera",
        body: "The scene renders to a texture shown in a dockable panel at full Retina resolution, with a fly/orbit/pan camera. Depth is reversed-Z with an infinite far plane, which spreads floating-point precision almost evenly with distance; a z-fighting test in the editor shows the difference against standard depth. An anti-aliased infinite grid is drawn as one full-screen triangle with a ray-plane intersection per pixel.",
      },
      {
        title: "glTF 2.0 import",
        body: "Sparse accessors, triangle strips and fans, normalized integer attributes, alpha modes, double-sided and mirrored meshes. Model files are treated as untrusted input, so every accessor offset and index is bounds-checked and broken parts are skipped with a warning.",
      },
      {
        title: "Scene & editor tooling",
        body: "GameObjects with 64-bit UUIDs and components in a transform hierarchy, with cached world matrices invalidated down the tree. Objects are referenced across frames by generational handles, destruction is deferred until the hierarchy isn't being walked, and components are typed without RTTI. The Hierarchy panel supports drag-and-drop reparenting; the Inspector edits transforms and components.",
      },
      {
        title: "Reproducible builds & CI",
        body: "CMake presets with every dependency pinned to an exact version, one command that configures, builds, tests and packages a release zip, and GitHub Actions building, testing and packaging Windows and macOS on every push. Tagging a version produces a draft release with both builds attached.",
      },
      {
        title: "GPU debugging on both platforms",
        body: "In-app frame capture with RenderDoc and PIX on Windows and Xcode on macOS (F11), plus the D3D12 debug layer and Metal API validation, with validation messages routed into the editor's Console.",
        media: [
          still(arcXcodeCapture, "A frame captured from inside the editor and opened in Xcode"),
        ],
      },
    ],
    table: {
      title: "Roadmap",
      note: "Ten phases from my Master's lectures, rebuilt cross-platform. An item is done once it works on both Windows (Direct3D 12) and macOS (Metal). Terrain, water and lightmapping are optional extras after Phase 9.",
      columns: ["Phase", "Covers", "Cross-platform or beyond the course", "Done"],
      highlightColumn: 3,
      rows: [
        [
          "0 · Foundations (v0.1)",
          "CMake, SDL3 window and input, timing, math, editor shell",
          "VS 2022 + Xcode presets, SDL3 instead of Win32",
          "8\u00a0/\u00a08",
        ],
        [
          "1 · RHI and first triangle (v0.2)",
          "Device, swapchain, resources, pipelines, shaders",
          "Metal backend, HLSL → SPIR-V → MSL, Xcode capture",
          "10\u00a0/\u00a010",
        ],
        [
          "2 · Meshes, textures, camera (v0.3)",
          "Textures, glTF, editor camera, viewport, handles, ring buffer",
          "Shared binding slots for both backends",
          "7\u00a0/\u00a07",
        ],
        [
          "3 · Engine architecture",
          "Scene, panels, VFS, assets, serialization, culling, picking",
          "",
          "2\u00a0/\u00a09",
        ],
        [
          "4 · Lighting and PBR",
          "Lights, tone mapping, GGX, normal maps, IBL, BC textures",
          "Toon/cel material and outlines",
          "0\u00a0/\u00a010",
        ],
        [
          "5 · Compute, threads, profiling",
          "Compute shaders, job system",
          "Tracy and GPU timestamps",
          "0\u00a0/\u00a03",
        ],
        [
          "6 · Advanced rendering",
          "Deferred, light culling, shadows, SSAO, reflections, post, fog, decals",
          "Ink lines, comic shading, pixel-art mode",
          "0\u00a0/\u00a014",
        ],
        ["7 · VFX", "CPU and GPU particles, noise, trails", "", "0\u00a0/\u00a04"],
        [
          "8 · Animation",
          "Keyframes, GPU skinning, morph targets, state machines",
          "",
          "0\u00a0/\u00a04",
        ],
        [
          "9 · Gameplay systems",
          "Collision, spatial partitioning, AI, FSMs, scripting, UI, audio",
          "Jolt physics, miniaudio",
          "0\u00a0/\u00a08",
        ],
      ],
    },
    challenges: [],
    next: [
      "Mouse picking and transform gizmos, then frustum culling, an asset pipeline and scene serialization",
      "Lighting and PBR: Cook-Torrance GGX, image-based lighting and tone mapping",
      "Toon/cel shading with inverted-hull outlines, then screen-space ink lines, hatching and a pixel-art mode",
      "Compute, a job system and Tracy profiling; then shadows, deferred and Forward+ shading",
    ],
  },
  gallery: [],
};

export default arclight;
