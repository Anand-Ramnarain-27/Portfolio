import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

import { heroModes } from "../../constants/heroModes";
import { useOrbitingParticles } from "../../hooks/useOrbitingParticles";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import CanvasLoader from "../Loader";

const PARTICLE_COUNT = 220;

/**
 * Visualises linear view-space depth (near = white, far = black) for the
 * "Depth" debug view. The near/far uniforms are tuned to the core mesh so the
 * gradient spans its full silhouette.
 */

const depthVertexShader = `
  varying float vViewDist;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewDist = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const depthFragmentShader = `
  varying float vViewDist;
  uniform float uNear;
  uniform float uFar;
  void main() {
    float d = clamp((vViewDist - uNear) / (uFar - uNear), 0.0, 1.0);
    float g = 1.0 - d;
    gl_FragColor = vec4(vec3(g), 1.0);
  }
`;

/**
 * The hero scene: a faceted core mesh whose material swaps with the selected
 * G-buffer-style view (albedo / normal / depth / wireframe), an outer wire
 * shell and orbiting particles. Light and particle colours ease towards the
 * active theme rather than snapping.
 */
const EngineCore = ({ mode, autoRotate }) => {
  const shellRef = useRef();
  const particlesRef = useRef();
  const keyLightRef = useRef();
  const rimLightRef = useRef();

  const theme = useMemo(() => heroModes.find((m) => m.id === mode) || heroModes[0], [mode]);
  const targetAccent = useMemo(() => new THREE.Color(theme.accent), [theme]);
  const targetAccent2 = useMemo(() => new THREE.Color(theme.accent2), [theme]);
  const targetParticle = useMemo(() => new THREE.Color(theme.particle), [theme]);

  const particles = useOrbitingParticles(PARTICLE_COUNT, {
    radius: [2.1, 3.7],
    speed: [0.08, 0.23],
    height: 2.4,
    bobAmount: 0.08,
    bobSpeed: 0.6,
  });

  const depthUniforms = useMemo(
    () => ({
      uNear: { value: 3.55 },
      uFar: { value: 6.85 },
    }),
    [],
  );

  useFrame((state, delta) => {
    // Frame-rate independent easing: reaches ~99.9% of the target colour in
    // one second regardless of FPS.
    const lerpSpeed = 1 - Math.pow(0.001, delta);

    if (keyLightRef.current) {
      keyLightRef.current.color.lerp(targetAccent, lerpSpeed);
    }
    if (rimLightRef.current) {
      rimLightRef.current.color.lerp(targetAccent2, lerpSpeed);
    }
    if (shellRef.current) {
      shellRef.current.rotation.y -= 0.07 * delta;
      shellRef.current.material.color.lerp(targetAccent2, lerpSpeed);
    }
    if (particlesRef.current) {
      particlesRef.current.material.color.lerp(targetParticle, lerpSpeed);
      particles.update(particlesRef.current, state.clock.elapsedTime);
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} color="#30343c" />
      <pointLight
        ref={keyLightRef}
        position={[3, 2.5, 3]}
        intensity={26}
        distance={20}
        decay={2}
        color={heroModes[0].accent}
      />
      <pointLight
        ref={rimLightRef}
        position={[-3, -1.5, -2.5]}
        intensity={14}
        distance={20}
        decay={2}
        color={heroModes[0].accent2}
      />

      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        {mode === "albedo" && (
          <meshStandardMaterial
            color="#2b3038"
            roughness={0.35}
            metalness={0.75}
            emissive="#341a0c"
            emissiveIntensity={0.6}
          />
        )}
        {mode === "normal" && <meshNormalMaterial flatShading />}
        {mode === "depth" && (
          <shaderMaterial
            uniforms={depthUniforms}
            vertexShader={depthVertexShader}
            fragmentShader={depthFragmentShader}
          />
        )}
        {mode === "wire" && <meshBasicMaterial color={theme.accent} wireframe />}
      </mesh>

      {mode !== "wire" && (
        <mesh ref={shellRef}>
          <icosahedronGeometry args={[1.62, 0]} />
          <meshBasicMaterial color={heroModes[0].accent2} wireframe transparent opacity={0.28} />
        </mesh>
      )}

      <Points ref={particlesRef} positions={particles.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={heroModes[0].particle}
          size={0.028}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>

      <gridHelper args={[14, 28, 0x2a2e35, 0x1a1d22]} position={[0, -1.9, 0]} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={autoRotate}
        autoRotateSpeed={0.7}
        minPolarAngle={Math.PI / 2 - 0.7}
        maxPolarAngle={Math.PI / 2 + 0.7}
      />
    </>
  );
};

const EngineCanvas = ({ mode }) => {
  // With "reduce motion" on, the scene stops spinning but can still be orbited.
  const autoRotate = !usePrefersReducedMotion();

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 5.2], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <EngineCore mode={mode} autoRotate={autoRotate} />
      </Suspense>
    </Canvas>
  );
};

export default EngineCanvas;
