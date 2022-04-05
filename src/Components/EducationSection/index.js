import React from 'react'
import { SectionWrapper, SectionContainer, SectionHeaderWrap, SectionHeader } from './EducationElements'
import { partOne, partTwo } from './data'
import { SingleSection } from './BlockElements'
export const EducationSection = () => {
  return (
    <SectionWrapper id='education'>
        <SectionContainer>
          <SectionHeaderWrap>
          <SectionHeader>Education</SectionHeader>
          </SectionHeaderWrap>
          <SingleSection {...partOne}/>
          <SingleSection {...partTwo}/>
        </SectionContainer>
    </SectionWrapper>
  )
}
