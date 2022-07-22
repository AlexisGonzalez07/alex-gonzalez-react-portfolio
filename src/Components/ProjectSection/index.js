import React from "react";
import { ProjectWrapper, SectionContainer, SectionHeader, SectionHeaderWrap } from "./ProjectElements";
import { ProjectCard } from "./ProjectCard";
import { cardOneInfo, cardTwoInfo, cardThreeInfo, cardFourInfo } from "./data";
export const ProjectSection = () => {
  return (
    <ProjectWrapper id="projects">
      <SectionContainer>
      <SectionHeaderWrap>
        <SectionHeader>Projects</SectionHeader>
      </SectionHeaderWrap>
      {/* <ProjectCard {...cardOneInfo}/> */}
      <ProjectCard {...cardTwoInfo}/>
      <ProjectCard {...cardThreeInfo}/>
      <ProjectCard {...cardFourInfo}/>
      </SectionContainer>
    </ProjectWrapper>
  );
};
