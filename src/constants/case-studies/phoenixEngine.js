/**
 * Phoenix Engine: personal C++ / DirectX 12 engine. Facts follow the engine
 * repository's README and release notes (v0.5); media comes from its
 * docs/media folder.
 */
import phxEnvHero from "../../assets/phoenix/environment-hero.webp";
import phxEnv from "../../assets/phoenix/environment-atmosphere.mp4";
import phxEnvPoster from "../../assets/phoenix/environment-atmosphere-poster.webp";
import phxReflections from "../../assets/phoenix/reflections.mp4";
import phxReflectionsPoster from "../../assets/phoenix/reflections-poster.webp";
import phxDeferred from "../../assets/phoenix/deferred-lighting.mp4";
import phxDeferredPoster from "../../assets/phoenix/deferred-lighting-poster.webp";
import phxParticles from "../../assets/phoenix/particles-vfx.mp4";
import phxParticlesPoster from "../../assets/phoenix/particles-vfx-poster.webp";
import phxTrail from "../../assets/phoenix/trail-vfx.mp4";
import phxTrailPoster from "../../assets/phoenix/trail-vfx-poster.webp";
import phxVolumetric from "../../assets/phoenix/volumetric-lights.mp4";
import phxVolumetricPoster from "../../assets/phoenix/volumetric-lights-poster.webp";
import phxPostStack from "../../assets/phoenix/post-process-stack.mp4";
import phxPostStackPoster from "../../assets/phoenix/post-process-stack-poster.webp";
import phxBloom from "../../assets/phoenix/bloom-vfx.mp4";
import phxBloomPoster from "../../assets/phoenix/bloom-vfx-poster.webp";
import phxFog from "../../assets/phoenix/fog-modes.mp4";
import phxFogPoster from "../../assets/phoenix/fog-modes-poster.webp";
import phxExposure from "../../assets/phoenix/exposure-chromatic.mp4";
import phxExposurePoster from "../../assets/phoenix/exposure-chromatic-poster.webp";
import phxMorph from "../../assets/phoenix/morph-targets.mp4";
import phxMorphPoster from "../../assets/phoenix/morph-targets-poster.webp";
import phxSkeletal from "../../assets/phoenix/skeletal-animation.mp4";
import phxSkeletalPoster from "../../assets/phoenix/skeletal-animation-poster.webp";
import phxAgents from "../../assets/phoenix/gameplay-agents.mp4";
import phxAgentsPoster from "../../assets/phoenix/gameplay-agents-poster.webp";
import { clip } from "./media";

const phoenixEngine = {
  slug: "phoenix-engine",
  title: "Phoenix Engine",
  tagline:
    "A game engine and editor in C++20 and DirectX 12: deferred PBR rendering, GPU skinning and particles, collision and physics, gameplay scripting through a hot-reloaded DLL, and an editor that packages standalone game builds.",
  image: phxEnvHero,
  heroVideo: clip(phxEnv, phxEnvPoster, "Lit interior, HDR sky and post-processing"),
  meta: {
    role: "Solo developer",
    team: "Personal project (began as UPC coursework)",
    timeline: "Dec 2025 – present · v0.1 → v0.5",
    stack: ["C++20", "DirectX 12", "HLSL", "ImGui", "PIX"],
  },
  stats: [
    { value: "53", label: "HLSL shaders" },
    { value: "9", label: "compute shaders on the GPU" },
    { value: "5", label: "public releases (v0.1 – v0.5)" },
    { value: "3", label: "swappable collision broad phases" },
  ],
  links: {
    source: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine",
    releases: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine/releases",
  },

  overview: {
    summary:
      "Phoenix Engine is my own game engine, written in C++ against the raw DirectX 12 API. It started as coursework for my Master's at UPC: the last graded version was v0.2, a textured model viewer. Everything since has been my own choice, applying course topics this engine didn't require and researching beyond them. It now has a deferred renderer, animation, physics, scripting and an editor that builds standalone games, and Ashfall Keep, a game I'm developing, runs on it.",
    sections: [
      {
        heading: "Why I built it",
        body: "Engines like Unity and Unreal hide a lot of what happens every frame. I wanted to own the whole loop myself: loading assets, managing GPU memory, lighting a scene and getting it on screen. Working at that level makes me a better programmer in any engine, because I understand what the tools are doing for me.",
      },
      {
        heading: "How it grew",
        list: [
          "v0.1 (Dec 2025, coursework): a DirectX 12 viewer for a textured quad, with Unity-style camera controls and texture filtering modes.",
          "v0.2 (Jan 2026, final graded submission): a 3D model viewer with Phong shading, ImGuizmo transform controls, and material and light editing.",
          "v0.3 (Mar 2026): GameObject/component architecture, an asset pipeline, prefabs, image-based lighting and a full editor.",
          "v0.4 (Jul 2026): deferred rendering, skeletal animation with a state-machine editor, collision and physics, GPU particles and shadow mapping.",
          "v0.5 (Oct 2026): an HDR post-processing stack, volumetric fog, a scripting API, AI navigation, in-game UI, water, and File > Build for standalone games.",
        ],
      },
      {
        heading: "My role",
        body: "I designed and wrote everything outside the third-party libraries. Every release is published as a prebuilt Windows build anyone can download and run.",
      },
      {
        heading: "What I learned",
        body: "Measure before optimising, and always profile in Release, since Debug builds can be misleading by a wide margin. On the GPU, keeping resources alive for the right amount of time matters as much as the rendering itself. And making everything tweakable live in the editor speeds up every later feature.",
      },
    ],
  },

  technical: {
    architecture: {
      body: "Each view renders the same scene passes, whether it's the editor's Scene view, its Game view or the standalone Player. Opaque geometry goes through a deferred PBR path; forward passes then draw on the G-buffer depth for water, transparents, billboards, trails and GPU particles, each sorted back to front, and the post-process chain runs last. Every pass is wrapped in PIX event markers so whole frames can be captured and analysed.",
      pipeline: [
        "Skybox · SkinningPass (compute)",
        "ShadowMapPass (cascaded · spot · point cube)",
        "GBufferPass → DecalPass",
        "LightCullingPass (tiled, compute) + DeferredLightingPass with IBL",
        "Forward: water · transparents · billboards · trails · GPU particles · x-ray",
        "Fog / volumetric fog (compute)",
        "Bloom → tonemap + colour LUT → FXAA",
      ],
    },
    systems: [
      {
        title: "Deferred PBR & lighting",
        body: "A G-buffer (albedo, normal/metallic/roughness, emissive/AO, depth) feeds a lighting pass for any number of directional, point and spot lights. A compute pass (LightCullingCS) builds per-tile light lists from G-buffer depth, which both the lighting and water passes read. Image-based lighting bakes an HDR panorama into a 32² irradiance map, a 1024² prefiltered specular cubemap and a 512² BRDF lookup table. Decals are projected into the G-buffer before lighting.",
        media: [
          clip(
            phxReflections,
            phxReflectionsPoster,
            "PBR reference grid: rough ↔ smooth, dielectric ↔ metal, under IBL",
          ),
          clip(
            phxDeferred,
            phxDeferredPoster,
            "Five coloured point and spot lights through the deferred path",
          ),
        ],
      },
      {
        title: "Shadows",
        body: "Up to four cascades for directional light, plus spot shadows and point-light cube shadows, filtered with PCF, VSM or ESM. Cascades can be fitted on the GPU by reducing the G-buffer depth (ShadowReduceCS, ShadowLightMatrixCS), and VSM/ESM moments are blurred in a compute shader.",
      },
      {
        title: "GPU particles & trails",
        body: "Emitters simulate on the CPU by default (256 particles each), with sprite-sheet animation and noise turbulence. Switching an emitter to the GPU hands it to ParticlePass: a compute shader (ParticleUpdateCS) updates up to 4,096 particles in a structured buffer and they're drawn instanced. A ribbon renderer draws trails with width and colour over lifetime.",
        media: [
          clip(
            phxParticles,
            phxParticlesPoster,
            "Comet: two GPU emitters (embers + core) and a colour-over-life trail",
          ),
          clip(phxTrail, phxTrailPoster, "The same trail renderer driven by a swinging sword"),
        ],
      },
      {
        title: "Post-processing & atmosphere",
        body: "Kawase bloom over a three-level mip chain, exposure in stops, the PBR Neutral tonemapper and an optional colour LUT. Other effects are data-driven: each is described in a JSON file and runs either before tonemapping (such as chromatic aberration) or after gamma (such as FXAA). Fog is linear or exponential height fog, or ray-marched volumetric fog in a compute shader with light scattering and Henyey-Greenstein anisotropy, all tunable live.",
        media: [
          clip(
            phxVolumetric,
            phxVolumetricPoster,
            "Ray-marched volumetric fog: light shafts from point lights",
          ),
          clip(
            phxPostStack,
            phxPostStackPoster,
            "Bloom, fog, chromatic aberration and FXAA layered one at a time",
          ),
          clip(phxBloom, phxBloomPoster, "Bloom on GPU VFX, tuned live"),
          clip(phxFog, phxFogPoster, "Linear distance fog vs exponential height fog"),
        ],
      },
      {
        title: "Animation",
        body: "glTF skins and animations are imported with tinygltf. One compute kernel (MorphSkinningCS) applies morph-target weights and the joint palette to every animated mesh in a single dispatch each frame, and skinned meshes outside the game camera's frustum skip their skinning job. Animation state machines are edited in a node-graph editor.",
        media: [
          clip(
            phxMorph,
            phxMorphPoster,
            "Morph-target blending with the state-machine graph alongside",
          ),
          clip(phxSkeletal, phxSkeletalPoster, "Skinned character animating in play mode"),
        ],
      },
      {
        title: "Physics & collision",
        body: "Broad, mid and narrow phases, with the broad phase switchable at runtime between brute force, a uniform grid and an octree so they can be profiled against each other. The narrow phase handles OBB vs OBB (separating-axis test), sphere vs sphere and mixed pairs. Rigidbodies are resolved by an impulse solver, and fast bodies can use velocity clamping or a swept AABB to avoid tunnelling.",
      },
      {
        title: "AI & navigation",
        body: "Pathfinding sits behind an INavProvider interface; the current provider runs A* over a waypoint graph loaded from JSON, with per-node costs and runtime blocking (a gate closing, for example). Steering behaviours (seek, arrive, flee, pursue, evade, obstacle avoidance) and a perception API are exposed to scripts, so each enemy's behaviour lives in game code rather than in the engine.",
        media: [
          clip(
            phxAgents,
            phxAgentsPoster,
            "Goblin and paladin agents moving through a dungeon level",
          ),
        ],
      },
      {
        title: "Scripting & hot reload",
        body: "Gameplay code lives in GameScript.dll and includes a single header, the Phoenix:: API: input (keyboard, mouse and gamepads for four players), time, scene, UI, VFX, navigation, perception, steering and debug. The editor watches the DLL and reloads it while running, so gameplay changes don't need a restart.",
      },
      {
        title: "Editor & standalone builds",
        body: "An ImGui editor with separate Scene and Game views, hierarchy, inspector, asset browser, gizmos and click-to-select by ray casting against mesh triangles. Debug panels cover collision, navigation, frustum culling, and performance: FPS, CPU and GPU frame time from timestamp queries, draw calls and GPU memory. File > Build packages the scene into a standalone Player.exe.",
        media: [
          clip(
            phxExposure,
            phxExposurePoster,
            "Exposure sweep and chromatic aberration, edited live",
          ),
        ],
      },
      {
        title: "Scene, resources & culling",
        body: "Typed component access on GameObject (createComponent<T>(), getComponent<T>(), removeComponent<T>()), a reference-counted resource cache keyed by UID with .meta files, and JSON scenes and prefabs. Meshes are culled against the game camera's frustum linearly or through an octree, and support LOD levels selected per viewport.",
      },
      {
        title: "In-game UI",
        body: "Sprite-batched UI on DirectXTK12: canvas and 2D-transform layout with image, label, button, progress bar, checkbox, slider, input box and radio-group widgets, all navigable with a gamepad.",
      },
    ],
    challenges: [
      {
        title: "GPU crash: resource deleted while still in use",
        problem:
          "The D3D12 debug layer reported OBJECT_DELETED_WHILE_STILL_IN_USE on the light-culling point list. Resizing a viewport recreated the G-buffer targets and tile buffers immediately, while command lists already submitted still referenced the old ones.",
        solution:
          "The G-buffer and light-culling passes now move replaced resources to a retire list and flush the GPU before releasing them.",
      },
      {
        title: "Frame-rate drops on heavy models",
        problem:
          "Loading high-detail models made the frame rate drop sharply: every draw rewrote its material's texture descriptors, per viewport, every frame.",
        solution:
          "The G-buffer pass now caches one descriptor table per material, detects texture changes by comparing bound resources, shares a 1×1 fallback table for missing textures and caps the cache size.",
      },
      {
        title: "Skinned models upside-down or twisted",
        problem:
          "Imported glTF characters had inverted rotations and translations, and their normals were transformed wrongly.",
        solution:
          "I compared against a reference codebase and found an extra transpose when reading glTF matrices and a parent/child multiplication order that didn't match the engine's row-vector convention. I removed the transpose, fixed the order and rebuilt the joint palette to match the HLSL layout.",
      },
      {
        title: "Decals blanking the lit scene",
        problem: "With any decal in the scene, only the skybox appeared.",
        solution:
          "The decal pass left the G-buffer render targets bound, so the lighting pass drew the lit result into the G-buffer. The view target is now rebound after the decal pass.",
      },
      {
        title: "Skybox rotating wrongly in one viewport",
        problem:
          "With Scene and Game views both open, the skybox orientation was wrong in one of them.",
        solution:
          "With several frames in flight, a shared constant buffer was leaking camera data between viewports. Giving each viewport its own camera data fixed it.",
      },
      {
        title: "Crash on window resize",
        problem: "Resizing the window could crash the engine.",
        solution:
          "Render-target descriptors were being used after their heap had been freed. I fixed that use-after-free in the swap-chain resize path.",
      },
    ],
    next: [
      "Navigation mesh generation alongside the waypoint graphs",
      "Shader hot-reload (shaders are compiled at build time today)",
      "Growing Ashfall Keep, the game built on the engine",
    ],
  },
  gallery: [],
};

export default phoenixEngine;
