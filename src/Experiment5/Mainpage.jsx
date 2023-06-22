import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Mainpage = () => {
  // create timeline
  const tl = gsap.timeline({ paused: true, onComplete: navigateToOtherPage });
  const navigate = useNavigate();

  useEffect(() => {
    tl.to("#slider1", { yPercent: 100, duration: 1 }, 0);
    tl.to("#slider2", { yPercent: -100, duration: 1 }, 0);
  }, []);

  function navigateToOtherPage() {
    navigate("/detail");
  }

  return (
    <>
      <Center>
        <TopSlider id="slider1" />
        <BottomSlider id="slider2" />
        <CardContainer>
          <Button onClick={() => tl.play()}>View</Button>
          <ImageContainer>
            <CardImage src="/gsap.jpg" />
          </ImageContainer>
        </CardContainer>
      </Center>
    </>
  );
};

//Sliders
const TopSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 51vh;
  background-color: black;
  transform: translateY(-100%);
  z-index: 10;
`;

const BottomSlider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 51vh;
  background-color: black;
  transform: translateY(100%);
  z-index: 10;
`;

//Card
const CardContainer = styled.div`
  width: 30rem;
  height: 50rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  object-fit: cover;
  height: 100%;
  transition: 0.3s ease;
`;

const Button = styled.button`
  all: unset;
  padding: 1.5rem;
  order: 2;
  cursor: pointer;
  border: 1px solid;
  border-radius: 3rem;
  text-align: center;
  margin-top: auto;

  &:hover + div > img {
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
