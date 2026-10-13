/**
 * Phoenix Engine: personal C++ / DirectX 12 engine. Media comes from the
 * engine repository's docs/media folder.
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
    "A DirectX 12 game engine built from scratch in modern C++: deferred PBR rendering, GPU-driven VFX, a full post-process stack, animation, physics, AI navigation and a custom editor.",
  image: phxEnvHero,
  heroVideo: clip(phxEnv, phxEnvPoster, "Lighting, materials and post-processing on a full scene"),
  meta: {
    role: "Solo developer",
    team: "Personal project",
    timeline: "2025 – present · v0.1 → v0.4",
    stack: ["C++", "DirectX 12", "HLSL", "ImGui", "PIX"],
  },
  stats: [
    { value: "50", label: "HLSL shaders" },
    { value: "~9", label: "compute shaders on the GPU" },
    { value: "4", label: "public releases (v0.1 – v0.4)" },
    { value: "3", label: "swappable collision broad-phases" },
  ],
  links: {
    source: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine",
    releases: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine/releases",
  },

  overview: {
    summary:
      "Phoenix Engine is my own game engine, written from scratch in C++ against the raw DirectX 12 API. It isn't a game built on an existing engine: the renderer, the GPU effects, animation, physics and the editor are all my own code. I use it as a rendering sandbox and as the base for a small dungeon-crawler prototype.",
    sections: [
      {
        heading: "Why I built it",
        body: "Engines like Unity and Unreal hide a lot of what happens every frame. I wanted to own the whole loop myself: loading assets, managing GPU memory, lighting a scene and getting it on screen. Working at that level makes me a better programmer in any engine, because I understand what the tools are doing for me.",
      },
      {
        heading: "How it grew",
        list: [
          "v0.1: a textured quad on screen.",
          "v0.2: Phong shading, transform gizmos and material editing.",
          "v0.3: GameObject/Component architecture, a prefab system and image-based lighting.",
          "v0.4: deferred rendering with tiled light culling, skeletal animation and state machines, collision and physics, and GPU-driven VFX.",
        ],
      },
      {
        heading: "My role",
        body: "I designed and wrote everything outside the third-party libraries. Each release is published as a prebuilt Windows build anyone can download and run.",
      },
      {
        heading: "What I learned",
        body: "Measure before optimising, and always profile in Release, since Debug builds can be misleading by a wide margin. On the GPU, keeping resources alive for the right amount of time matters as much as the rendering itself. And making everything tweakable live in the editor speeds up every later feature.",
      },
    ],
  },

  technical: {
    architecture: {
      body: "Opaque geometry goes through a deferred PBR path. A forward pass then renders on top of the G-buffer depth for transparency, billboards, trails and GPU particles, and the post-process stack runs last. Every pass is instrumented with PIX events so I can capture and analyse whole frames.",
      pipeline: [
        "Shadow maps (cascaded · spot · point cube)",
        "GBufferPass",
        "DecalPass",
        "LightCullingPass (tiled, compute)",
        "DeferredLightingPass + IBL",
        "Volumetric fog (compute)",
        "Forward: transparency · trails · GPU particles",
        "Post: bloom · exposure/tonemap · LUT · FXAA · CA",
      ],
    },
    systems: [
      {
        title: "Deferred PBR & lighting",
        body: "A G-buffer (albedo, normal/metal/roughness, emissive/AO, depth) feeds a lighting pass that handles any number of directional, point and spot lights. Lights are culled per tile in a compute shader (LightCullingCS) so the lighting pass stays cheap as light counts grow. Image-based lighting comes from an HDR skybox convolved into an irradiance map and an environment BRDF.",
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
        body: "Cascaded directional shadow maps with PCF, VSM or ESM filtering, plus spot-light shadow maps and point-light cube maps. Shadow reduction and blur run on the GPU (ShadowReduceCS, ShadowBlurCS).",
      },
      {
        title: "GPU particles & trails",
        body: "Particles are simulated each frame in a compute shader (ParticleUpdateCS) writing to a StructuredBuffer, then drawn with GPU instancing instead of being updated on the CPU. An 8-octave FBM noise shader drives turbulence. A trail/ribbon renderer has width and colour-over-lifetime curves.",
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
        body: "Kawase-style multi-pass bloom, exposure in stops before tonemapping, colour LUT grading, FXAA, chromatic aberration and fog. Each stage can be toggled at runtime for quick A/B comparisons. Volumetric fog is ray-marched in a compute shader, with steps, extinction, noise and Henyey-Greenstein anisotropy all adjustable live.",
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
        body: "GPU skeletal skinning (SkinningCS) and GPU morph-target blending (MorphSkinningCS). A visual state-machine editor authors animation graphs (states, transitions, triggers), with clip playback and scrubbing from the inspector.",
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
        body: "Three swappable broad-phase strategies (brute force, uniform grid, octree), so collision performance can be profiled and compared per scene. OBB-SAT, sphere and AABB narrow-phase, a swept-AABB path that stops fast objects tunnelling, and impulse-based response through ComponentRigidbody.",
      },
      {
        title: "AI & navigation",
        body: "Waypoint-graph and navmesh pathfinding behind one INavProvider interface, plus steering behaviours (seek, flee, arrive, wander) and a simple perception system. These are exposed through the scripting API, so AI behaviour is written per game rather than baked into the engine.",
        media: [
          clip(
            phxAgents,
            phxAgentsPoster,
            "Goblin and paladin agents moving through a dungeon level",
          ),
        ],
      },
      {
        title: "Engine infrastructure",
        body: "A multithreaded asset pipeline (import worker pool, plus a manifest cache that skips unchanged assets), PSO and shader caching, parallel module start-up, hot-reloadable shaders, and a separate GameScript.dll so gameplay code reloads without restarting the engine.",
      },
      {
        title: "Editor & tools",
        body: "An ImGui editor with docking, hierarchy, inspector, asset browser and console. It adds gizmos, debug drawing for AABBs, broad-phase cells, the frustum and nav data, and a live overlay showing FPS, CPU/GPU frame time, draw calls and GPU memory. Assets can be dragged straight in from File Explorer.",
        media: [
          clip(
            phxExposure,
            phxExposurePoster,
            "Exposure sweep and chromatic aberration, edited live",
          ),
        ],
      },
      {
        title: "Component model & UI",
        body: "Typed, template-based component access (createComponent<T>(), getComponent<T>(), removeComponent<T>()), and an in-engine UI system on DirectXTK12: Canvas/Transform2D layout and Image, Label, Button, ProgressBar, CheckBox, Slider and InputBox widgets.",
      },
    ],
    challenges: [
      {
        title: "GPU crash: resource deleted while still in use",
        problem:
          "The D3D12 debug layer reported OBJECT_DELETED_WHILE_STILL_IN_USE on the light-culling point list, which crashed the engine.",
        solution:
          "The G-buffer and light-culling passes now retire resources instead of destroying them straight away. They are only freed after the GPU has finished the frames that use them.",
      },
      {
        title: "Skybox rotating wrongly in one viewport",
        problem:
          "With Scene and Game views both open, the skybox orientation was wrong in one of them.",
        solution:
          "With several frames in flight, a shared constant buffer was leaking data between viewports. Giving each viewport its own camera data fixed it.",
      },
      {
        title: "Skinned models upside-down or twisted",
        problem: "Some glTF characters loaded upside-down or with twisted limbs.",
        solution:
          "I compared against a reference codebase and found two causes: a rotation the export tool had baked into the armature, which clashed with the engine's Y-up assumption, and the order the bind matrices were applied in.",
      },
      {
        title: "Frame-rate drops on heavy models",
        problem: "Loading high-detail models made the frame rate drop sharply.",
        solution:
          "I cached descriptor tables per material, which cut the SRV churn the renderer was doing on every draw.",
      },
      {
        title: "Crash on window resize",
        problem: "Resizing the window could crash the engine.",
        solution:
          "Render-target descriptors were being used after their heap had been freed. I fixed that use-after-free in the swap-chain resize path.",
      },
    ],
    next: [
      "A frustum-culling debug capture for the docs",
      "Growing the dungeon-crawler prototype built on the engine",
    ],
  },
  gallery: [],
};

export default phoenixEngine;
