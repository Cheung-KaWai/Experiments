import { Box, Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Building } from "./Building";
import { CurtainRoom } from "./CurtainRoom";
import { Curtain } from "./Curtain";
import { Umbroso } from "./Experiment4/Umbroso";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas camera={{ position: [0, 4, 4] }}>
        <OrbitControls />
        <Environment preset="sunset" background />
        {/* <ambientLight intensity={0.3} /> */}
        <Center>
          <Umbroso />
        </Center>
      </Canvas>
    </SceneContainer>
  );
};

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
