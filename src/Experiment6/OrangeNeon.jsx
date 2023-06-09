/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 OrangeNeon.glb -T
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function OrangeNeon(props) {
  const { nodes, materials } = useGLTF("/Experiment6/OrangeNeon-transformed.glb");

  const emissionMaterial = new MeshStandardMaterial({
    emissive: "#FF5B00",
    color: "#FF5B00",
    toneMapped: false,
    emissiveIntensity: 5,
  });

  materials["Neon.001"] = emissionMaterial;

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials["Neon.001"]}
        position={[3.14, 0.84, -0.74]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials["Neon.001"]}
        position={[3.32, 0.84, -0.8]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Arrowbase001.geometry}
        material={materials.light}
        position={[3.32, 0.09, -0.77]}
      />
      <mesh
        geometry={nodes.Building1005.geometry}
        material={materials["Neon.001"]}
        position={[-1.8, 0.1, -1.03]}
      />
      <mesh
        geometry={nodes.Text004.geometry}
        material={materials["Neon.001"]}
        position={[-1.85, 1.65, 0.13]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Platform002.geometry}
        material={materials["Neon.001"]}
      />
      <mesh
        geometry={nodes.Text002.geometry}
        material={materials["Neon.001"]}
        position={[-1.02, 2.73, -1.32]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        material={materials["Neon.001"]}
        position={[-2.01, 4.13, -1.31]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={materials["Neon.001"]}
        position={[-1.84, 3.04, 2.2]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Pump001.geometry}
        material={materials["Neon.001"]}
        position={[-1.77, 1.5, 1.57]}
      />
      <mesh
        geometry={nodes.Sign001.geometry}
        material={materials["Neon.001"]}
        position={[-2, 1.5, 2.25]}
      />
    </group>
  );
}
