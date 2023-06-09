/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 BakedCloud66.glb -T
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { LinearSRGBColorSpace, MeshBasicMaterial, MeshStandardMaterial, SRGBColorSpace } from "three";
import { useFrame } from "@react-three/fiber";

export function BakedCloud66(props) {
  const { nodes, materials } = useGLTF("/Experiment6/BakedCloud66-transformed.glb");
  const [combined, color, ao, metalness] = useTexture([
    "/Experiment6/combined.jpg",
    "/Experiment6/color.jpg",
    "/Experiment6/ao.jpg",
    "/Experiment6/metal.jpg",
  ]);

  color.flipY = false;
  color.colorSpace = SRGBColorSpace;

  ao.flipY = false;
  ao.colorSpace = LinearSRGBColorSpace;

  metalness.flipY = false;
  metalness.colorSpace = LinearSRGBColorSpace;

  combined.flipY = false;
  combined.colorSpace = SRGBColorSpace;

  const materialPBR = new MeshStandardMaterial({
    map: color,
    aoMap: ao,
    metalnessMap: metalness,
    metalness: 1,
    roughness: 0.5,
  });

  const materialCombined = new MeshStandardMaterial({
    map: combined,
  });

  const material = materialPBR;

  const propeler = useRef();

  useFrame((state, delta) => {
    if (propeler.current) propeler.current.rotation.y += delta * 5;
  });

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.powersource.geometry}
        material={materials["Metal.002"]}
        position={[1.14, 0.1, -0.98]}
      />
      <mesh
        ref={propeler}
        geometry={nodes.propeler.geometry}
        material={materials["Metal.001"]}
        position={[1.14, 0.65, -0.98]}
      />
    </group>
  );
}
