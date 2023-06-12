import { Box, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Building } from "./Building";
import { TriangleAnimation } from "./Experiment2/TriangleAnimation";

export const Scene = () => {
  return (
    <SceneContainer>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <OrbitControls />
        <Environment preset="city" />
        <TriangleAnimation />
      </Canvas>
    </SceneContainer>
  );
};

const SceneContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
