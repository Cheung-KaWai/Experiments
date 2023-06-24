/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 BakedCloud66Emission.glb -T
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCloudStore } from "../stores/CloudStore";
import { MeshStandardMaterial } from "three";

export function BakeCloud66Emission(props) {
  const { nodes, materials } = useGLTF("/Experiment6/BakedCloud66Emission-transformed.glb");
  const emissionRef = useRef();

  const update = useCloudStore((state) => state.update);

  const emissionMaterial = new MeshStandardMaterial({
    emissive: "#00BDFF",
    color: "#00BDFF",
    toneMapped: false,
    emissiveIntensity: 5,
  });

  useEffect(() => {
    if (emissionRef.current) update("emission", emissionRef.current);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={emissionRef}
    >
      <mesh
        geometry={nodes.powersource001.geometry}
        material={emissionMaterial}
        position={[1.14, 0.1, -0.98]}
      />
      <mesh
        geometry={nodes.powersource002.geometry}
        material={emissionMaterial}
        position={[1.14, 0.1, -0.98]}
      />
    </group>
  );
}
