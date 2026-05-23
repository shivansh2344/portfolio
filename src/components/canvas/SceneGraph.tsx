"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import LatentNetwork from './LatentNetwork';

const SceneGraph: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#080809');
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <LatentNetwork />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneGraph;
