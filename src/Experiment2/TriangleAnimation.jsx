import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import vertex from "../Shaders/Experiment2/vertex.glsl";
import fragment from "../Shaders/Experiment2/fragment.glsl";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { BufferAttribute, Vector3 } from "three";
import { useControls } from "leva";

const TriangleAnimationMaterial = shaderMaterial(
  {
    uTime: 0,
    uProgress: 0,
  },
  vertex,
  fragment
);

extend({ TriangleAnimationMaterial });

export const TriangleAnimation = () => {
  const meshRef = useRef();

  const { progress } = useControls({
    progress: {
      value: 0,
      step: 0.01,
      min: 0.0,
      max: 1.0,
    },
  });

  useEffect(() => {
    const geometry = meshRef.current.geometry;
    const length = geometry.attributes.position.count;
    const random = new Float32Array(length);
    const centers = new Float32Array(length * 3);

    for (let i = 0; i < length; i += 3) {
      const randomValue = Math.random();
      random[i] = randomValue;
      random[i + 1] = randomValue;
      random[i + 2] = randomValue;

      const index = i * 3;
      const x = geometry.attributes.position.array[index];
      const y = geometry.attributes.position.array[index + 1];
      const z = geometry.attributes.position.array[index + 2];

      const x2 = geometry.attributes.position.array[index + 3];
      const y2 = geometry.attributes.position.array[index + 4];
      const z2 = geometry.attributes.position.array[index + 5];

      const x3 = geometry.attributes.position.array[index + 6];
      const y3 = geometry.attributes.position.array[index + 7];
      const z3 = geometry.attributes.position.array[index + 8];

      const center = new Vector3(x, y, z).add(new Vector3(x2, y2, z2)).add(new Vector3(x3, y3, z3)).divideScalar(3);
      centers.set([center.x, center.y, center.z], i * 3);
      centers.set([center.x, center.y, center.z], (i + 1) * 3);
      centers.set([center.x, center.y, center.z], (i + 2) * 3);
    }

    geometry.setAttribute("aRandom", new BufferAttribute(random, 1));
    geometry.setAttribute("aCenter", new BufferAttribute(centers, 3));
    console.log(meshRef.current.material.uniforms);
  }, []);

  // useEffect(() => {
  //   console.log(meshRef.current.material.uniforms);
  // }, [progress]);

  // update uTime
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.elapsedTime;
      meshRef.current.material.uniforms.uProgress.value = progress;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 5]} />
      <triangleAnimationMaterial wireframe />
    </mesh>
  );
};
