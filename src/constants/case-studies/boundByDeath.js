/**
 * Bound by Death: 17-person UPC team game. Only Anand's own contributions are
 * described here; the rest of the game is the team's work.
 */
import bbdTitle from "../../assets/bbd/bbd-title.webp";
import bbdCombat from "../../assets/bbd/bbd-combat.mp4";
import bbdCombatPoster from "../../assets/bbd/bbd-combat-poster.webp";
import bbdSlash from "../../assets/bbd/bbd-death-slash.mp4";
import bbdSlashPoster from "../../assets/bbd/bbd-death-slash-poster.webp";
import bbdSlash2 from "../../assets/bbd/bbd-death-slash-2.mp4";
import bbdSlash2Poster from "../../assets/bbd/bbd-death-slash-2-poster.webp";
import bbdBeam from "../../assets/bbd/bbd-ability-beam.mp4";
import bbdBeamPoster from "../../assets/bbd/bbd-ability-beam-poster.webp";
import bbdHeartbeat from "../../assets/bbd/bbd-heartbeat.mp4";
import bbdHeartbeatPoster from "../../assets/bbd/bbd-heartbeat-poster.webp";
import bbdDeathFx from "../../assets/bbd/bbd-death-effect.mp4";
import bbdDeathFxPoster from "../../assets/bbd/bbd-death-effect-poster.webp";
import bbdParticles from "../../assets/bbd/bbd-particle-test.mp4";
import bbdParticlesPoster from "../../assets/bbd/bbd-particle-test-poster.webp";
import bbdOrbs from "../../assets/bbd/bbd-orbs.mp4";
import bbdOrbsPoster from "../../assets/bbd/bbd-orbs-poster.webp";
import bbdBeams from "../../assets/bbd/bbd-beams.mp4";
import bbdBeamsPoster from "../../assets/bbd/bbd-beams-poster.webp";
import bbdStun from "../../assets/bbd/bbd-lyriel-stun.mp4";
import bbdStunPoster from "../../assets/bbd/bbd-lyriel-stun-poster.webp";
import { clip } from "./media";

const boundByDeath = {
  slug: "bound-by-death",
  title: "Bound by Death",
  tagline:
    "A top-down co-op hack-and-slash built by a 17-person team on our own engine. I worked on rendering, VFX, tooling and engine systems.",
  image: bbdTitle,
  heroVideo: clip(bbdSlash, bbdSlashPoster, "Death — melee combat VFX"),
  meta: {
    role: "Engine, graphics & VFX programmer",
    team: "17 developers · UPC Master's",
    timeline: "2025 – 2026",
    stack: ["C++", "Shaders", "JSON", "Team engine"],
  },
  links: {
    website: "https://ravenwhisp.github.io/Ravenwhisp/#home",
    itch: "https://ravenwhisp-studios.itch.io/",
    contributions: "", // e.g. https://github.com/Anand-Ramnarain-27/bound-by-death-contributions
    source: "",
  },

  overview: {
    summary:
      "Two cursed heroes, Lýriel (ranged) and Death (melee), fight together through the collapsing kingdom of Lýndoril. Bound by Death is a top-down co-op hack-and-slash made by a 17-person team as part of our Master's at UPC, on an engine we built ourselves.",
    sections: [
      {
        heading: "The project",
        body: "Seventeen people built a game and the engine under it at the same time, working to milestone deadlines. Every system had to serve the game, so the work was as much about talking to designers and artists as it was about writing code.",
      },
      {
        heading: "My role",
        body: "I worked on rendering, VFX and the tools other people build content with. I built the engine's prefab system and the screen effects that tell players how they're doing, and I designed the visual effects for both playable characters.",
      },
      {
        heading: "Working on a 17-person team",
        list: [
          "Before building anything, I talked to teammates about what they were trying to achieve. Adding bloom to particles, for example, started from a conversation with the people making the effects.",
          "I did code reviews for the team and worked review feedback on my own code back into the engine.",
          "I talked with others about the game's vision and helped wherever I was needed, including on a teammate's pause menu and controller detection.",
        ],
      },
      {
        heading: "What I learned",
        body: "Systems other people use every day have to be easy to work with, not just correct. The haptics and prefab work taught me to design for the designer, so they can do what they need without asking a programmer.",
      },
    ],
  },

  technical: {
    architecture: {
      body: "My work covered three areas of the team engine: content tooling, rendering and post-processing, and gameplay feedback.",
      pipeline: [
        "Prefab system (JSON)",
        "Light culling",
        "Post-processing",
        "Screen effects: heartbeat & death",
        "Particle VFX",
        "Haptics: Definition → Library → Runtime → Script API",
      ],
    },
    systems: [
      {
        title: "Prefab system",
        body: "I built the engine's prefab system. Designers save configured objects as JSON prefabs and reuse them across scenes. Particle effects also go through it.",
      },
      {
        title: "Post-processing & screen effects",
        media: [
          clip(bbdHeartbeat, bbdHeartbeatPoster, "Heartbeat (near-death) effect"),
          clip(bbdDeathFx, bbdDeathFxPoster, "Death screen effect"),
        ],
        body: "The team engine got the same post-processing effects I built for Phoenix Engine. On top of that I built a heartbeat effect that plays when a player is close to death, and a death effect where the screen fades to black and blurs.",
      },
      {
        title: "Light culling",
        body: "I implemented light culling in the team engine so scenes can use many lights at a reasonable cost.",
      },
      {
        title: "Controller haptics",
        body: "A data-driven haptics system built in four layers. An effect is just JSON (duration, attack, envelope curve, priority and peak strength per motor), so anyone on the team can add or tune rumble without touching engine code. Each frame the runtime mixes every active effect per player, then sends the result to both rumble motors and the trigger motors.",
        layers: [
          {
            name: "Definition",
            type: "HapticEffectDefinition",
            body: "Describes what an effect is: duration, curve, intensities, priority.",
          },
          {
            name: "Library",
            type: "HapticEffectLibrary",
            body: "Singleton registry. Loads the JSON and stores effects by ID.",
          },
          {
            name: "Runtime",
            type: "ModuleHaptics",
            body: "Ticks instances each frame, mixes their outputs, pushes to hardware.",
          },
          {
            name: "Script API",
            type: "HapticAPI",
            body: "The public-facing interface: play, stop, submit. Kept deliberately simple.",
          },
        ],
        code: [
          {
            label: "An effect, as authored by a designer",
            lang: "json",
            code: `{
"id": "Footstep",
"duration": 0.06,
"attack": 0.005,
"curve": "Punch",
"priority": "Low",
"peak": {
  "leftMotor": 0.25,
  "rightMotor": 0.1
}
}`,
          },
          {
            label: "Mixing: every live effect adds into each motor channel",
            lang: "cpp",
            code: `float leftMotor = 0.0f, rightMotor = 0.0f;
float leftTrigger = 0.0f, rightTrigger = 0.0f;

for (const HapticInstance& inst : ps.instances) {
  if (!inst.alive || inst.delay > 0.0f)
      continue;

  const float envelope = evaluateEnvelope(inst);
  const float combined = envelope * inst.scale;

  leftMotor    += inst.def->peak.leftMotor    * combined;
  rightMotor   += inst.def->peak.rightMotor   * combined;
  leftTrigger  += inst.def->peak.leftTrigger  * combined;
  rightTrigger += inst.def->peak.rightTrigger * combined;
}
ps.leftMotor    = clamp01(leftMotor);
ps.rightMotor   = clamp01(rightMotor);
ps.leftTrigger  = clamp01(leftTrigger);
ps.rightTrigger = clamp01(rightTrigger);`,
          },
          {
            label: "Pushing the mixed result to the gamepad (SDL)",
            wide: true,
            lang: "cpp",
            code: `void ModuleHaptics::applyToHardware(int playerIndex) const {
  ModuleInput* input = app->getModuleInput();
  if (!input) return;
  SDL_Gamepad* gamepad = input->getSDLGamepad(playerIndex);
  if (!gamepad) return;

  const PlayerState& ps = m_players[playerIndex];
  const auto toU16 = [](float v) -> uint16_t {
      return static_cast<uint16_t>(v * 65535.0f);
  };
  SDL_RumbleGamepad(gamepad, toU16(ps.leftMotor), toU16(ps.rightMotor), 32);
  SDL_RumbleGamepadTriggers(gamepad, toU16(ps.leftTrigger), toU16(ps.rightTrigger), 32);
}`,
          },
        ],
      },
      {
        title: "Character VFX",
        media: [
          clip(bbdSlash2, bbdSlash2Poster, "Death — slash VFX"),
          clip(bbdStun, bbdStunPoster, "Lýriel — ability & stun ring"),
        ],
        body: "I designed the VFX for Death and Lýriel (particle textures and split prefabs) and the stun effects: stars and sparks, soul wisps, and dark void rings.",
      },
      {
        title: "Particle bloom",
        body: "Working with the people making the effects, I added bloom to particles so the effects read better on screen.",
      },
    ],
    challenges: [
      {
        title: "Making effects work within tight engine limits",
        problem:
          "The engine's particle system shares one 300-particle pool across the whole engine. It only supports alpha blending, one texture per emitter, and billboards.",
        solution:
          "I designed the effects around those limits: textures that carry more of the look, effects split across several prefabs, and particle counts kept low so the shared pool doesn't run out.",
      },
      {
        title: "Letting non-programmers own game feel",
        problem: "Every tweak to controller rumble normally needs a programmer.",
        solution:
          "Effects are JSON data (duration, attack, curve, priority, peak per motor), loaded by a library and triggered through a small script API. Designers can add or tune an effect without touching engine code.",
      },
      {
        title: "Many effects at once, one controller",
        problem:
          "Footsteps, hits and abilities can all fire on the same frame, and each wants to drive the same two motors and two triggers.",
        solution:
          "Each frame the runtime adds up every live effect per player (its envelope × scale × peak per channel), skips effects that are delayed or finished, and clamps each channel to 0–1 before sending one combined value to the hardware.",
      },
    ],
    next: [],
  },
  gallery: [
    clip(bbdCombat, bbdCombatPoster, "Co-op combat"),
    clip(bbdBeam, bbdBeamPoster, "Ability VFX in-game"),
    clip(bbdOrbs, bbdOrbsPoster, "VFX iterations — test scene"),
    clip(bbdBeams, bbdBeamsPoster, "Beam & spark effect — test scene"),
    clip(bbdParticles, bbdParticlesPoster, "Particle prefab test"),
  ],
};

export default boundByDeath;
