import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import React, { useState } from'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import Ad from '../components/Ad';
import { homeObjOne ,homeObjTwo} from '../components/InfoSection/Data';

const Home = () => {
  const[isOpen, setIsOpen]=useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <Ad/>
    <InfoSection {...homeObjTwo}/>
    <Collections/>
    <Footer/>
    </>
  );
};

export default Home;
