import React from 'react'
import { first, second, third } from './data'
import { FooterColumn } from './FooterColumns'
import {FooterWrapper, FooterSection, FooterHeader} from './FooterElements'

export const Footer = () => {
  return (
    <FooterWrapper>
        <FooterHeader>Connect With Me</FooterHeader>
        <FooterSection>
                <FooterColumn {...first}/>
                <FooterColumn {...second}/>
                <FooterColumn {...third}/>
        </FooterSection>
    </FooterWrapper>
  )
}
