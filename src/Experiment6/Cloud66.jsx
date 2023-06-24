import { Effects, Environment, OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import React, { useRef } from "react";
import styled from "styled-components";
import { BakedCloud66 } from "./BakedCloud66";
import { Canvas } from "@react-three/fiber";
import { BakeCloud66Emission } from "./BakedCloud66Emission";
import { useCloudStore } from "../stores/CloudStore";
import { Bloom, EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { Color } from "three";
import { Cloud66Scene } from "./Cloud66Scene";
import { OrangeNeon } from "./OrangeNeon";
import { BlueNeon } from "./BlueNeon";

export const Cloud66 = () => {
  const emissionRef = useCloudStore((state) => state.emission);
  const orbitRef = useRef();

  return (
    <Container>
      <Canvas flat>
        <color
          attach="background"
          args={["#112253"]}
        />
        <OrbitControls
          object-position={[4.68, 3.51, 5.63]}
          object-rotation={[-0.37, 0.76, 0.26]}
          target={[-1.03, 1.32, 0.03]}
          ref={orbitRef}
          onChange={() => console.log(orbitRef.current)}
        />
        {/* <BakedCloud66 />
          <BakeCloud66Emission /> */}
        <spotLight
          position={[0, 10, 0]}
          color={new Color("#7ED7FF")}
        />
        <Cloud66Scene />
        <OrangeNeon />
        <BlueNeon />

        <EffectComposer multisampling={4}>
          <Bloom mipmapBlur />
        </EffectComposer>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
