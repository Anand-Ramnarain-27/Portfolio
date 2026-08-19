import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

import CanvasLoader from "../Loader";

const PARTICLE_COUNT = 90;

const Node = () => {
  const coreRef = useRef();
  const shellRef = useRef();
  const particlesRef = useRef();

  const particleData = useMemo(() => {
    const radii = new Float32Array(PARTICLE_COUNT);
    const angles = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);
    const heights = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      radii[i] = 1.9 + Math.random() * 1.1;
      angles[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.06 + Math.random() * 0.1;
      heights[i] = (Math.random() - 0.5) * 2;
    }
    return { radii, angles, speeds, heights };
  }, []);

  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFrame((state, delta) => {
    if (coreRef.current) coreRef.current.rotation.y += 0.05 * delta;
    if (shellRef.current) shellRef.current.rotation.y -= 0.08 * delta;
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
  });

  return (
    <>
      <ambientLight intensity={1.2} color="#30343c" />
      <pointLight position={[3, 2, 3]} intensity={20} distance={20} decay={2} color="#4fd8c4" />
      <pointLight position={[-3, -1.5, -2]} intensity={10} distance={20} decay={2} color="#ff7a3d" />

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#12151a"
          roughness={0.4}
          metalness={0.7}
          emissive="#0d2b26"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.3, 0]} />
        <meshBasicMaterial color="#4fd8c4" wireframe transparent opacity={0.35} />
      </mesh>

      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8effc0"
          size={0.024}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </>
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
        <Node />
      </Suspense>
    </Canvas>
  );
};

export default ContactVisual;
