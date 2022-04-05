import React from 'react'
import { SectionWrapper, SectionContainer, SectionHeader,SectionHeaderWrap } from './AboutElements'
import { sectionOne,sectionTwo } from './data'
import { SingleSection } from './BlockElements'
export const InfoSection = () => {
  return (
    <SectionWrapper id='aboutme'>
        <SectionContainer>
          <SectionHeaderWrap>
          <SectionHeader>About Me</SectionHeader>
          </SectionHeaderWrap>
          <SingleSection {...sectionOne}/>
          <SingleSection {...sectionTwo}/>
        </SectionContainer>
    </SectionWrapper>
  )
}
