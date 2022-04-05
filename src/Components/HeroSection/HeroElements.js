import styled from "styled-components";

export const MainContainer = styled.div`
  // top: 80px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 100%;
  position: relative;
  z-index: 1;

  /* Tablets and below*/
  @media screen and (max-width: 992px) {
    height: 600px;
  }
`;

export const MainBackground = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
`;

export const VideoBackground = styled.div`
  object-fit: cover;
  -o-object-fit: center;
  width: 100%;
  height: 100%;
`;

export const TextSection = styled.div`
  position: absolute;
  display: flex;
  max-width: 1300px;
  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  font-size: 48px;
  align-items: center;
  color: white;
  letter-spacing: .1px;
  line-height: 1.4;
  text-transform: uppercase;


  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroP = styled.p`
  font-size: 24px;
  align-items: center;
  color: white;
  margin-bottom: 7px;
  letter-spacing: .1px;
  line-height: 1.4;


  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HeroSubP = styled.p`
  font-size: 15px;
  align-items: center;
  color: white;
  margin-left: 5px;
  max-width: 70%;
  letter-spacing: .1px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`