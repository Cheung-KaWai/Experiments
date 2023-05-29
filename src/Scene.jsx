import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas>
        <OrbitControls />
        <Box />
      </Canvas>
    </SceneContainer>
  );
};

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
