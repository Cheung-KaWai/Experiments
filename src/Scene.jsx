import { Box, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Building } from "./Building";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas camera={{ position: [0, 15, 40] }}>
        <OrbitControls autoRotate />
        <Environment preset="city" />
        <Building />
      </Canvas>
    </SceneContainer>
  );
};

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
