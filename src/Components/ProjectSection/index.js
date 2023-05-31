import React from "react";
import { ProjectWrapper, SectionContainer, SectionHeader, SectionHeaderWrap } from "./ProjectElements";
import { ProjectCard } from "./ProjectCard";
import projectData from "./data";
export const ProjectSection = () => {
  return (
    <ProjectWrapper id="projects">
      <SectionContainer>
      <SectionHeaderWrap>
        <SectionHeader>Projects</SectionHeader>
      </SectionHeaderWrap>
      {projectData.map(project => (<div key={project.title}>
        <ProjectCard {...project}/>
      </div>))}
      </SectionContainer>
    </ProjectWrapper>
  );
};
