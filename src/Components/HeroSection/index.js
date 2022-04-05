import React from "react";
import Video from "../../Videos/shortvideo.mp4";
import {
  MainContainer,
  MainBackground,
  TextSection,
  HeroH1,
  HeroP,
  HeroSubP
} from "./HeroElements";
export const HeroSection = () => {
  return (
    <MainContainer id='Welcome'>
      <MainBackground>
          <video autoPlay loop muted id='video'>
              <source src={Video} type='video/mp4'/>
          </video>
      </MainBackground>
      <TextSection>
        <HeroH1>Alex Gonzalez</HeroH1>
        <HeroP>React Software Developer</HeroP>
        <HeroSubP>With a touch of Business Analytics, Data Modeling, Supply Chain, and Finance</HeroSubP>
      </TextSection>
    </MainContainer>
  );
};
