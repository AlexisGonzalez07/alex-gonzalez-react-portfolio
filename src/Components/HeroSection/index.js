import React from "react";
import Video from "../../Videos/shortvideo.mp4";
import {
  MainContainer,
  MainBackground,
  TextSection,
  HeroH1,
  HeroP,
  HeroSubP,
  ButtonWrapper
} from "./HeroElements";
import {Button} from '../ButtonElement'
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
        <HeroP>Software Engineer</HeroP>
        <HeroSubP>Python, JavaScript, & MySQL Developer</HeroSubP>
        <ButtonWrapper>
        <Button as='a' href='https://github.com/AlexisGonzalez07/alex-gonzalez-react-portfolio' target='_blank'>Portfolio Source Code</Button>
        </ButtonWrapper>
      </TextSection>
    </MainContainer>
  );
};
