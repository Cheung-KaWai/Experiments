import React, { useRef } from "react";
import vertexShader from "./shaders/Experiment3/vertex.glsl";
import fragmentShader from "./shaders/Experiment3/fragment.glsl";
import { DoubleSide } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const BosShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ BosShaderMaterial });

export const Curtain = () => {
  const shader = useRef();

  useFrame(({ clock }) => {
    if (shader.current) shader.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh
      ref={shader}
      rotation={[0, Math.PI / 2, 0]}
      position={[1.57, 1.05, 0]}
      scale={1.35}
    >
      <planeGeometry args={[1, 1, 512, 512]} />
      <bosShaderMaterial
        side={DoubleSide}
        transparent={true}
      />
    </mesh>
  );
};
