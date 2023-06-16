import React, {useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import{Nav, NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';
import{IconContext} from'react-icons/lib';
import {animateScroll as scroll} from'react-scroll';

const Navbar = ({toggle}) => {
  const[scrollNav,setScrollNav]= useState(false);

  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true);
    } else{
      setScrollNav(false);
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome=()=>{
      scroll.scrollToTop();
    };

  return (
    <>
    <IconContext.Provider value={{color:'white'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer> 
            <NavLogo to='/Muradi' onClick={toggleHome}>
              Muradi
              </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks 
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={40}
                >Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='Brands'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={50}
                >Brands</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='Collections'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={50}
                >Collections</NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/Signin"> Sign In</NavBtnLink>
            </NavBtn>
            

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
