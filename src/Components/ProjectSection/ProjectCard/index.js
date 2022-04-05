import React from 'react'
import {Card, ImageWrapper, DescriptionWrapper, HeaderSection, MainTitle, SubTitle, Content, Image, ButtonWrapper} from './CardElements'
import { Button } from '../../ButtonElement'
export const ProjectCard = ({img,title,description, line,alt, website, repo}) => {
  return (
    <Card>
    <ImageWrapper>
        <Image src={img} alt={alt}/>
        {/* <OverlayDescription>Technologies: {description}</OverlayDescription>
        <OverlayTitle>{title}</OverlayTitle> */}
    </ImageWrapper>
    <DescriptionWrapper>
    <HeaderSection>
        <MainTitle>{title}</MainTitle>
        <SubTitle>Technologies: {description}</SubTitle>
        <Content>{line}</Content>

      </HeaderSection>
        <ButtonWrapper>
            <Button as='a' href={website} target='_blank'>Live App</Button>
            <Button as='a' href={repo} target='_blank'>Github Repo</Button>
  
        </ButtonWrapper>
    </DescriptionWrapper>
</Card>
)
}

