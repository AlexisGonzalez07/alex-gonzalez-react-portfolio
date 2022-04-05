import React from "react";
import { LocalGrid, ImageSection, HeaderSection, ContentSection, ImageDiv, Img, MainTitle, SubTitle, ContentWrapper, Content } from "./BlockElements";

export const SingleSection = ({
  src,
  alt,
  header,
  subtitle,
  content,
  svgfirst,
}) => {
  return (
    <LocalGrid svgfirst={svgfirst}>
      <ImageSection>
        <ImageDiv>
          <Img src={src} alt={alt} />
        </ImageDiv>
      </ImageSection>
      <HeaderSection>
        <MainTitle>{header}</MainTitle>
        <SubTitle>{subtitle}</SubTitle>
      </HeaderSection>
      <ContentSection>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
      </ContentSection>
    </LocalGrid>
  );
};
