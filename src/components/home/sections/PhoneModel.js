import React from "react";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import Model from "./Scene.js";
import { Suspense } from "react";



const PhoneModel = () => {
  return (
    <div className="fixed top-0 z-[60] w-screen h-screen transition-all duration-300 bg-transparent">
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default PhoneModel;
