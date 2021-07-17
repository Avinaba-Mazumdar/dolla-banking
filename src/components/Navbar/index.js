import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
      const [scrollNav, setScrollNav] = useState(false);

      const changeNav = () => {
            if(window.scrollY >= 80){
                  setScrollNav(true);
            } else{
                  setScrollNav(false);
            }
      };

      useEffect(() => {
            window.addEventListener('scroll', changeNav)
      }, []);

      const toggleHome = () => {
            scroll.scrollToTop();
      }

      return (
            <Nav scrollNav={scrollNav}>
                  <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>dolla</NavLogo>
                        <MobileIcon onClick={toggle}>
                              <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                              <NavItem>
                                    <NavLinks
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    to='about'>About</NavLinks>
                              </NavItem>
                              <NavItem>
                                    <NavLinks
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    to='discover'>Discover</NavLinks>
                              </NavItem>
                              <NavItem>
                                    <NavLinks
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    to='services'>Services</NavLinks>
                              </NavItem>
                              <NavItem>
                                    <NavLinks
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    to='signup'>Sign Up</NavLinks>
                              </NavItem>
                        </NavMenu>
                        <NavBtn>
                              <NavBtnLink
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                              to='/signin'>Sign In</NavBtnLink>
                        </NavBtn>
                  </NavbarContainer>
            </Nav>
      )
}; export default Navbar


const Nav = styled.nav `
      background: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.1)')};
      height: 80px;
      margin-top: -100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      position: sticky;
      top: 0;
      z-index: 10;

      @media screen and (max-width: 960px){
            transition: .8s all ease;
      }
`

const NavbarContainer = styled.div `
      display: flex;
      justify-content: space-between;
      height: 80px;
      z-index: 1;
      width: 100%;
      padding: 0 24px;
      max-width: 1100px;
`

const NavLogo = styled(LinkR) `
      color: #fff;
      justify-self: flex-start;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      margin-left: 24px;
      margin-weight: bold;
      text-decoration: none;
`

const MobileIcon = styled.div `
      display: none;

      @media screen and (max-width:768px){
            display: block;
            position: absolute;
            top:0;
            right: 0;
            transform : translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
            color: white;
      }
`

const NavMenu = styled.ul `
      display: flex;
      align-items: center;
      list-style: none;
      text-align: center;
      margi-right: -22px;

      @media screen and (max-width: 768px){
            display: none;
      }
`

const NavItem = styled.li `
      height: 80px;
`

const NavLinks = styled(LinkS) `
      color: white;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0 1rem;
      height: 100%;
      cursor: pointer;

      &:active{
            border-bottom: 3px solid #01bf71;
      }
`

const NavBtn = styled.nav `
      display: flex;
      align-items: center;

      @media screen and (max-width:768px){
            display:none;
      }
`

const NavBtnLink = styled(LinkR) `
      border-radius: 50px;
      text-decoration: none;
      color: #010606;
      background-color: #01bf71;
      padding:  10px 22px;
      white-space: nowrap;
      font-size: 16px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover{
            background: white;
            color: #010606;
      }
`