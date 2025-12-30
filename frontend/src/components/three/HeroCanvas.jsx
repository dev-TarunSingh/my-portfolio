import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import AbstractModel from "./AbstractModel";

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    // normalize pointer to small range to control subtle rotation
    const x = (e.clientX / window.innerWidth - 0.5) * Math.PI * 0.25;
    const y = (e.clientY / window.innerHeight - 0.5) * Math.PI * 0.15;
    mouse.current = { x, y };
  };

  return (
    <div onPointerMove={handlePointerMove} className="w-full h-80 md:h-[460px] lg:h-[520px]">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.8} />
        <AbstractModel mouse={mouse} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
