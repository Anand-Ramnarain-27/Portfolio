import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";

import CanvasLoader from "../Loader";

const PARTICLE_COUNT = 220;

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

const EngineCore = ({ mode, autoRotate }) => {
  const shellRef = useRef();
  const particlesRef = useRef();

  const particleData = useMemo(() => {
    const radii = new Float32Array(PARTICLE_COUNT);
    const angles = new Float32Array(PARTICLE_COUNT);
    const speeds = new Float32Array(PARTICLE_COUNT);
    const heights = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      radii[i] = 2.1 + Math.random() * 1.6;
      angles[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.08 + Math.random() * 0.15;
      heights[i] = (Math.random() - 0.5) * 2.4;
    }
    return { radii, angles, speeds, heights };
  }, []);

  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  const depthUniforms = useMemo(
    () => ({
      uNear: { value: 3.55 },
      uFar: { value: 6.85 },
    }),
    []
  );

  useFrame((state, delta) => {
    if (shellRef.current) {
      shellRef.current.rotation.y -= 0.07 * delta;
    }
    if (particlesRef.current) {
      const t = state.clock.elapsedTime;
      const posAttr = particlesRef.current.geometry.attributes.position;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const a = particleData.angles[i] + t * particleData.speeds[i];
        const r = particleData.radii[i];
        posAttr.array[i * 3] = Math.cos(a) * r;
        posAttr.array[i * 3 + 1] =
          particleData.heights[i] + Math.sin(t * 0.6 + i) * 0.08;
        posAttr.array[i * 3 + 2] = Math.sin(a) * r * 0.6;
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} color="#30343c" />
      <pointLight
        position={[3, 2.5, 3]}
        intensity={26}
        distance={20}
        decay={2}
        color="#ff7a3d"
      />
      <pointLight
        position={[-3, -1.5, -2.5]}
        intensity={14}
        distance={20}
        decay={2}
        color="#4fd8c4"
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
        {mode === "wire" && (
          <meshBasicMaterial color="#ff7a3d" wireframe />
        )}
      </mesh>

      {mode !== "wire" && (
        <mesh ref={shellRef}>
          <icosahedronGeometry args={[1.62, 0]} />
          <meshBasicMaterial
            color="#4fd8c4"
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>
      )}

      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffb590"
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
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutoRotate(!mq.matches);
    const handler = (e) => setAutoRotate(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
