import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  DropdownWrapper,
  Nav,
  List,
  DropDownLink,
  ResumeWrapper,
  ResumeBtn,
} from "./DropdownElements";
import { MdCloseFullscreen } from "react-icons/md";
export const DropdownNav = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
    toggle();
  };

  return (
    <DropdownWrapper isOpen={isOpen} onClick={toggle}>
      <Nav onClick={toggle}>
        <MdCloseFullscreen onClick={toggle} />
      </Nav>
      <List>
        <DropDownLink to="/" onClick={toggleHome}>
          Home
        </DropDownLink>
        <DropDownLink
          to="aboutme"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={toggle}
        >
          About Me
        </DropDownLink>
        <DropDownLink
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={toggle}
        >
          Education
        </DropDownLink>
        <DropDownLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={toggle}
        >
          Coding Projects
        </DropDownLink>
      </List>
      <ResumeWrapper>
        <a
          href="https://drive.google.com/file/d/1u-ELeSqonNLdA6bsyOaV_Ei_lN6zvHk-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ all: "none" }}
        >
          <ResumeBtn>Resume</ResumeBtn>
        </a>
      </ResumeWrapper>
    </DropdownWrapper>
  );
};
