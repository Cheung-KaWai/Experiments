import { gsap } from "gsap";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const DetailPage = () => {
  const tl = gsap.timeline({ onReverseComplete: goBack });
  const navigate = useNavigate();

  useEffect(() => {
    tl.to("#cardCover", { yPercent: 100, duration: 0.7 }, 0);
    tl.to("#imageText", { yPercent: -100, duration: 1 }, 0);
    tl.to(".staggerItem", { yPercent: -200, duration: 1, stagger: 0.1 }, 0);
  }, []);

  const reverseAnimation = () => {
    tl.reverse();
  };

  function goBack() {
    navigate("/");
  }

  return (
    <Container>
      <ImageContainer>
        <CardCover id="cardCover" />
        <CardImage src="/gsap.jpg" />
        <TextContainer>
          <ImageText id="imageText">Moulder</ImageText>
        </TextContainer>
      </ImageContainer>
      <DescriptionContainer>
        <StaggerContainer>
          <StaggerChild className="staggerItem">Alex Moulder</StaggerChild>
        </StaggerContainer>
        <StaggerContainer>
          <StaggerChild className="staggerItem">2020</StaggerChild>
        </StaggerContainer>
        <StaggerContainer>
          <StaggerChild className="staggerItem">Stagger</StaggerChild>{" "}
        </StaggerContainer>
        <StaggerContainer>
          <StaggerChild className="staggerItem">Test</StaggerChild>
        </StaggerContainer>
        <StaggerContainer>
          <StaggerChild className="staggerItem">:))))</StaggerChild>
        </StaggerContainer>
      </DescriptionContainer>
      <BackButton onClick={reverseAnimation}>Go back</BackButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: black;
  padding: 10rem;
`;

const ImageContainer = styled.div`
  height: 50%;
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;
`;

const CardImage = styled.img`
  object-fit: cover;
`;

//Text container animation
const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 5;
`;
const ImageText = styled.p`
  font-size: 8rem;
  transform: translateY(100%);
  z-index: 5;
  color: white;
`;

// image cover animation
const CardCover = styled.span`
  position: absolute;
  width: 100%;
  height: 120%;
  background-color: black;
  z-index: 2;
`;

//stagger animation
const DescriptionContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const StaggerContainer = styled.div`
  display: block;
  padding: 0.5rem;
  overflow: hidden;
`;

const StaggerChild = styled.span`
  display: block;
  transform: translateY(200%);
`;

const BackButton = styled.button`
  all: unset;
  color: white;

  margin-top: 2rem;
  border: 1px solid;
  padding: 1rem;
  cursor: pointer;
`;
