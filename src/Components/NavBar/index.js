import React from "react";
import {MdMenu} from 'react-icons/md'
import {animateScroll as scroll} from 'react-scroll'
import { Nav,NavBarContainer,NavLogo, NavMenu, NavLink,ResumeWrapper, ResumeBtn, NavIconBox } from "./NavElements";

export const NavBar = ({toggle}) => {
const toggleHome =() => {
  scroll.scrollToTop();
}

  return (
    <Nav>
    <NavBarContainer>
      <NavLogo to='/' onClick={toggleHome}>AG FullStack</NavLogo>
      <NavMenu>
        <NavLink to='aboutme' 
        smooth={true} duration ={500} spy={true} offset={-80}
        >
          About Me
        </NavLink>
        <NavLink to='education'
        smooth={true} duration ={500} spy={true} offset={-80} 
        
        >

          Education
        </NavLink>
        <NavLink to='projects'
                smooth={true} duration ={500} spy={true} offset={-80}
                >
          Coding Projects
        </NavLink>
      </NavMenu>
      <ResumeWrapper> 
        <a href='https://drive.google.com/file/d/1vROJnp4cLr7hc0X4GhUaZxTr4sFw_dSZ/view?usp=sharing' target='_blank' rel="noopener noreferrer" style={{all:'none'}}>     
        <ResumeBtn>Resume</ResumeBtn>
        </a>
      </ResumeWrapper>
      <NavIconBox onClick={toggle}>
        <MdMenu  onClick={toggle}/>
      </NavIconBox>
    </NavBarContainer>
    </Nav>
  );
};
