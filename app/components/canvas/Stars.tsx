"use client";

import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useRef } from "react";
import { Mesh, Points as PointsType } from "three";

const Stars = () => {
  const meshRef = useRef<Mesh>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta / 10;
      meshRef.current.rotation.x -= delta / 10;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* @ts-ignore */}
      <Points ref={meshRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
