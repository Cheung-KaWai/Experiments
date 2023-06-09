/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Cloud66Scene.glb -T
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Cloud66Scene(props) {
  const { nodes, materials } = useGLTF("/Experiment6/Cloud66Scene-transformed.glb");
  const propelerRef = useRef();

  useFrame((state, delta) => {
    if (propelerRef.current) propelerRef.current.rotation.y += delta * 3;
  });

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Tank2.geometry}
        material={materials["Metal.001"]}
        position={[-0.66, -0.05, 2.27]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.Box.geometry}
        material={materials.Metal}
        position={[-3.14, 0, -1.31]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Box001.geometry}
        material={materials.Metal}
        position={[-2.27, 0, -1.33]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Box003.geometry}
        material={materials.Metal}
        position={[-1.03, 0, -1.86]}
        rotation={[0, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Box004.geometry}
        material={nodes.Box004.material}
        position={[-1.45, 0, -0.63]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Box006.geometry}
        material={materials.Metal}
        position={[-2.22, 0, 2.68]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Box007.geometry}
        material={materials.Metal}
        position={[-1.4, 0, 2.69]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Tank2001.geometry}
        material={materials["Metal.001"]}
        position={[-0.66, -0.07, 3.17]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes.Tank2003.geometry}
        material={materials.Metal}
        position={[-1.02, -0.81, 3.17]}
        rotation={[-2.62, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Tank2004.geometry}
        material={materials.Metal}
        position={[-1.03, -0.78, 2.41]}
        rotation={[-2.62, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Tank2002.geometry}
        material={materials["Metal.001"]}
        position={[-1.02, -0.81, 3.17]}
        rotation={[-2.62, 0, Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Barrel.geometry}
        material={materials.Metal}
        position={[-0.47, 0.1, 3.23]}
      />
      <mesh
        geometry={nodes.Barrel001.geometry}
        material={materials.Metal}
        position={[-0.45, 0.1, 2.66]}
      />
      <group position={[-0.7, 0.1, 0.13]}>
        <mesh
          geometry={nodes.Cube047.geometry}
          material={materials.Red}
        />
        <mesh
          geometry={nodes.Cube047_1.geometry}
          material={materials.Metalblue}
        />
      </group>
      <mesh
        geometry={nodes.Platform.geometry}
        material={materials.Concrete}
      />
      <mesh
        geometry={nodes.Pump.geometry}
        material={nodes.Pump.material}
        position={[-1.77, 1.5, 1.57]}
      />
      <mesh
        geometry={nodes.Sign.geometry}
        material={materials.Concrete}
        position={[-2, 1.5, 2.25]}
      />
      <mesh
        geometry={nodes.Building1001.geometry}
        material={materials.Concrete}
        position={[-1.8, 0.1, -1.03]}
      />
      <mesh
        geometry={nodes.Tank.geometry}
        material={materials.Metal}
        position={[-1.92, -1.11, -0.34]}
        rotation={[0, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Tank001.geometry}
        material={materials.Metal}
        position={[-1.92, -1.11, -1.83]}
        rotation={[1.89, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Building1.geometry}
        material={materials.Wall}
        position={[-1.8, 0.1, -1.03]}
      />
      <group position={[-2.02, 1.77, -1.76]}>
        <mesh
          geometry={nodes.Plane004_1.geometry}
          material={materials.Wall}
        />
        <mesh
          geometry={nodes.Plane004_2.geometry}
          material={materials.wood}
        />
      </group>
      <group position={[3.31, 0, -0.77]}>
        <mesh
          geometry={nodes.Vert.geometry}
          material={materials.ground}
        />
        <mesh
          geometry={nodes.Vert_1.geometry}
          material={materials.Concrete}
        />
      </group>
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials.Metalblue}
        position={[-2.02, 3.35, -1.75]}
        rotation={[0.18, 0, 0]}
      />
      <mesh
        geometry={nodes.powersource.geometry}
        material={materials["Metal.002"]}
        position={[1.14, 0.1, -0.98]}
      />
      <mesh
        geometry={nodes.Vert004.geometry}
        material={materials["Metal.001"]}
        position={[1.16, 0.4, -0.46]}
      />
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials["Metal.001"]}
        position={[-2.01, 4.13, -1.31]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Streetpole.geometry}
        material={materials.wood}
        position={[-3.42, 1.77, -1.96]}
      />
      <mesh
        geometry={nodes.Building1006.geometry}
        material={materials["Metal.002"]}
        position={[0.14, 1.69, -2.32]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.Metalblue}
        position={[-1.71, 3.43, -1.79]}
        rotation={[0.16, -0.16, -0.06]}
      />
      <mesh
        geometry={nodes.railing.geometry}
        material={materials["Metal.002"]}
        position={[0.14, 1.69, -2.32]}
      />
      <mesh
        geometry={nodes.Vert001.geometry}
        material={materials["Metal.002"]}
        position={[-1.38, 0, 1.77]}
      />
      <mesh
        geometry={nodes.Vert002.geometry}
        material={materials["Metal.002"]}
        position={[-1.38, -0.16, 1.84]}
      />
      <mesh
        geometry={nodes.Vert005.geometry}
        material={nodes.Vert005.material}
        position={[-1.38, 0, 1.65]}
      />
      <mesh
        geometry={nodes.Wireframe.geometry}
        material={materials["Metal.001"]}
        position={[-1.38, -0.06, 1.71]}
      />
      <group
        position={[-0.38, 0.1, 1.93]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Cylinder082.geometry}
          material={materials["Metal.002"]}
        />
        <mesh
          geometry={nodes.Cylinder082_1.geometry}
          material={materials.LAMP}
        />
        <mesh
          geometry={nodes.Cylinder082_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cylinder082_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        geometry={nodes.wireframe.geometry}
        material={materials["Metal.002"]}
        position={[-1.84, -0.1, -1.04]}
      />
      <mesh
        geometry={nodes.wireframe001.geometry}
        material={materials["Metal.002"]}
        position={[-1.51, -0.1, 2.71]}
      />
      <mesh
        geometry={nodes.Platform001.geometry}
        material={materials["Metal.002"]}
        position={[-0.83, 0.28, 3.21]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials.Concrete}
        position={[-1.23, 0.1, 2.93]}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials.Concrete}
        position={[-2.33, 0.1, 2.93]}
      />
      <mesh
        geometry={nodes.Building1002.geometry}
        material={materials.Metal}
        position={[-1.8, 0.1, -1.03]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-1.38, 1.5, 1.21]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Concrete}
        position={[-1.8, 0.1, 2.26]}
      />
      <mesh
        geometry={nodes.Building2002.geometry}
        material={materials.wood}
        position={[-2.02, 1.77, -1.76]}
      />
      <mesh
        geometry={nodes.Building2001.geometry}
        material={materials.wood}
        position={[-2.02, 1.77, -1.76]}
      />
      <group position={[-2.02, 1.77, -1.76]}>
        <mesh
          geometry={nodes.Plane017.geometry}
          material={materials.white}
        />
        <mesh
          geometry={nodes.Plane017_1.geometry}
          material={materials.Red}
        />
      </group>
      <mesh
        ref={propelerRef}
        geometry={nodes.propeler.geometry}
        material={materials["Metal.001"]}
        position={[1.14, 0.65, -0.98]}
      />
      <group position={[3.32, 0.09, -0.77]}>
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials.Concrete}
        />
        <mesh
          geometry={nodes.Circle002_2.geometry}
          material={materials["Metal.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials.Rubber}
        position={[3.32, 0.84, -0.8]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.Metal}
        position={[-1.25, 0.55, 2.2]}
      />
      <group position={[-1.19, 0.94, 2.27]}>
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials.Red}
        />
        <mesh
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.Metalblue}
        />
      </group>
      <mesh
        geometry={nodes.Vert003.geometry}
        material={materials.chrome}
        position={[1.86, 0.1, -0.8]}
      />
      <mesh
        geometry={nodes.Plane010.geometry}
        material={materials.Red}
        position={[-1.19, 0.14, 2.27]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials.Metal}
        position={[-1.75, 0.55, 2.2]}
      />
      <group position={[-1.68, 0.94, 2.27]}>
        <mesh
          geometry={nodes.Cylinder016.geometry}
          material={materials.Red}
        />
        <mesh
          geometry={nodes.Cylinder016_1.geometry}
          material={materials.Metalblue}
        />
      </group>
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials.Red}
        position={[-1.68, 0.14, 2.27]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials.Metal}
        position={[-2.28, 0.55, 2.2]}
      />
      <group position={[-2.22, 0.94, 2.27]}>
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.Red}
        />
        <mesh
          geometry={nodes.Cylinder002_2.geometry}
          material={materials.Metalblue}
        />
      </group>
      <mesh
        geometry={nodes.Plane011.geometry}
        material={materials.Red}
        position={[-2.22, 0.14, 2.27]}
      />
      <mesh
        geometry={nodes.Building1003.geometry}
        material={nodes.Building1003.material}
        position={[-1.8, 0.1, -1.03]}
      />
      <mesh
        geometry={nodes.Plane009.geometry}
        material={nodes.Plane009.material}
        position={[-1.25, 3.9, -1.32]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tires.geometry}
        material={materials.Rubber}
        position={[-0.88, 0.1, 3.15]}
      />
      <group
        position={[-3.51, 1.77, -0.55]}
        rotation={[-Math.PI, 1.44, -Math.PI]}
      >
        <mesh
          geometry={nodes.Cylinder008.geometry}
          material={materials.Metal}
        />
        <mesh
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.white}
        />
      </group>
      <group
        position={[0.73, 0.1, -2.2]}
        rotation={[-Math.PI, 1.44, -Math.PI]}
      >
        <mesh
          geometry={nodes.Cylinder032.geometry}
          material={materials.Metal}
        />
        <mesh
          geometry={nodes.Cylinder032_1.geometry}
          material={materials.white}
        />
      </group>
      <mesh
        geometry={nodes.Building1004.geometry}
        material={materials.Metal}
        position={[-1.8, 0.1, -1.03]}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials.Metalblue}
        position={[-1.19, 0.74, 2.27]}
      />
      <mesh
        geometry={nodes.Circle003.geometry}
        material={materials.Metalblue}
        position={[-1.68, 0.74, 2.27]}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials.Metalblue}
        position={[-2.22, 0.74, 2.27]}
      />
      <mesh
        geometry={nodes.Simple_GP_Layer.geometry}
        material={materials.Rubber}
      />
    </group>
  );
}

useGLTF.preload("/Cloud66Scene-transformed.glb");
