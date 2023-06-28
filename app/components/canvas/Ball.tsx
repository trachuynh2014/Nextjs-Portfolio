"use client";
import { StaticImageData } from "next/image";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

interface BallProps {
  url: string;
}

const Ball: React.FC<BallProps> = ({ url }) => {
  const [decal] = useTexture([url]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: StaticImageData;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball url={icon.src} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
