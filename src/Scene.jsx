import { Box, Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Building } from "./Building";
import { CurtainRoom } from "./CurtainRoom";
import { Curtain } from "./Curtain";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas camera={{ position: [0, 4, 4] }}>
        <OrbitControls />
        {/* <Environment preset="city" /> */}
        <ambientLight intensity={0.3} />
        <Center>
          <CurtainRoom />
          <Curtain />
        </Center>
      </Canvas>
    </SceneContainer>
  );
};

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
