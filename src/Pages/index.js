import React, {useState} from "react";
import {DropdownNav} from '../Components/DropdownNav/index'
import {NavBar} from '../Components/NavBar'
import { HeroSection } from "../Components/HeroSection";
import {ProjectSection} from '../Components/ProjectSection'
import { InfoSection } from "../Components/AboutSection";
import { EducationSection } from "../Components/EducationSection";
import { Footer } from "../Components/Footer";

export const Home = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => {
          setIsOpen(!isOpen)
        }
  return (
    <>
      <DropdownNav isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle} />
      <HeroSection/>
      <InfoSection/>
      <EducationSection/>
      <ProjectSection/>
      <Footer/>
    </>
  );
};