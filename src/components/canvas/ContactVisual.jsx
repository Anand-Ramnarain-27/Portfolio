import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

import { useOrbitingParticles } from "../../hooks/useOrbitingParticles";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import CanvasLoader from "../Loader";

const PARTICLE_COUNT = 70;
/** Rings are pooled: a new ping reuses the oldest ring slot. */
const MAX_PINGS = 5;
const PING_DURATION = 2.2; // seconds
const AUTO_PING_INTERVAL_MS = 2800;

/**
 * Contact-section visual: a rotating "transmitter" that emits an expanding
 * ring on a timer and on click, and leans gently towards the pointer.
 */
const SignalNode = () => {
  const groupRef = useRef();
  const coreRef = useRef();
  const particlesRef = useRef();
  const ringRefs = useRef([]);
  const pingStarts = useRef(new Array(MAX_PINGS).fill(-Infinity));
  const nextPingIndex = useRef(0);

  const triggerPing = () => {
    const i = nextPingIndex.current;
    pingStarts.current[i] = performance.now() / 1000;
    nextPingIndex.current = (i + 1) % MAX_PINGS;
  };

  useEffect(() => {
    triggerPing();
    const id = setInterval(triggerPing, AUTO_PING_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const particles = useOrbitingParticles(PARTICLE_COUNT, {
    radius: [1.5, 2.7],
    speed: [0.05, 0.14],
    height: 1.8,
    bobAmount: 0.06,
    bobSpeed: 0.5,
  });

  // Reset the cursor if the canvas unmounts while hovered.
  useEffect(
    () => () => {
      document.body.style.cursor = "auto";
    },
    [],
  );

  useFrame((state, delta) => {
    // Ease the whole group towards the pointer for a subtle parallax tilt.
    if (groupRef.current) {
      const targetY = -state.pointer.x * 0.6;
      const targetX = state.pointer.y * 0.3;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.25;
      coreRef.current.rotation.y += delta * 0.35;
    }
    if (particlesRef.current) {
      particles.update(particlesRef.current, state.clock.elapsedTime);
    }

    const now = performance.now() / 1000;
    ringRefs.current.forEach((ring, i) => {
      if (!ring) return;
      const t = now - pingStarts.current[i];
      if (t >= 0 && t < PING_DURATION) {
        const p = t / PING_DURATION;
        const scale = 0.5 + p * 2.6;
        ring.scale.setScalar(scale);
        ring.material.opacity = (1 - p) * 0.55;
        ring.visible = true;
      } else {
        ring.visible = false;
      }
    });
  });

  return (
    <group
      ref={groupRef}
      onClick={triggerPing}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <ambientLight intensity={1.2} color="#30343c" />
      <pointLight position={[3, 2, 3]} intensity={20} distance={20} decay={2} color="#4fd8c4" />
      <pointLight
        position={[-3, -1.5, -2]}
        intensity={10}
        distance={20}
        decay={2}
        color="#ff7a3d"
      />

      {Array.from({ length: MAX_PINGS }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (ringRefs.current[i] = el)}
          rotation={[Math.PI / 2, 0, 0]}
          visible={false}
        >
          <ringGeometry args={[0.85, 0.95, 64]} />
          <meshBasicMaterial
            color="#4fd8c4"
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}

      <mesh ref={coreRef}>
        <torusGeometry args={[0.68, 0.2, 20, 56]} />
        <meshStandardMaterial
          color="#12151a"
          roughness={0.35}
          metalness={0.8}
          emissive="#0d2b26"
          emissiveIntensity={0.75}
        />
      </mesh>

      <Points ref={particlesRef} positions={particles.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8effc0"
          size={0.022}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const ContactVisual = () => {
  // With "reduce motion" on, draw only when something changes (a click ping).
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      frameloop={reducedMotion ? "demand" : "always"}
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <SignalNode />
      </Suspense>
    </Canvas>
  );
};

export default ContactVisual;
