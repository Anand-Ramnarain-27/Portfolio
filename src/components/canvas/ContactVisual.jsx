import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const PARTICLE_COUNT = 70;
const MAX_PINGS = 5;
const PING_DURATION = 2.2;

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
    const id = setInterval(triggerPing, 2800);
    return () => clearInterval(id);
  }, []);

  const particleData = useMemo(() => {
    const radii = new Float32Array(PARTICLE_COUNT);
    const angles = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);
    const heights = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      radii[i] = 1.5 + Math.random() * 1.2;
      angles[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.05 + Math.random() * 0.09;
      heights[i] = (Math.random() - 0.5) * 1.8;
    }
    return { radii, angles, speeds, heights };
  }, []);

  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFrame((state, delta) => {
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
      const t = state.clock.elapsedTime;
      const posAttr = particlesRef.current.geometry.attributes.position;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const a = particleData.angles[i] + t * particleData.speeds[i];
        const r = particleData.radii[i];
        posAttr.array[i * 3] = Math.cos(a) * r;
        posAttr.array[i * 3 + 1] =
          particleData.heights[i] + Math.sin(t * 0.5 + i) * 0.06;
        posAttr.array[i * 3 + 2] = Math.sin(a) * r * 0.6;
      }
      posAttr.needsUpdate = true;
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
      <pointLight position={[-3, -1.5, -2]} intensity={10} distance={20} decay={2} color="#ff7a3d" />

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

      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
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
  return (
    <Canvas
      frameloop="always"
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
