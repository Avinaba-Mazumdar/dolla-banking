import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

const Sidebar = ({toggle, isOpen}) => {
      return (
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                  <Icon onClick={toggle}>
                        <CloseIcon/>
                  </Icon>
                  <SidebarWrapper>
                        <SidebarMenu>
                              <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                              <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                              <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                              <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                        </SidebarMenu>
                        <SideBtnWrap>
                              <SidebarRoute to='/signin' ><P>Sign in</P></SidebarRoute>
                        </SideBtnWrap>
                  </SidebarWrapper>
            </SidebarContainer>
      )
}

export default Sidebar


const SidebarContainer = styled.aside `
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 100%;
      background: #0d0d0d;
      display: grid;
      align-items: center;
      top: 0;
      left: 0;
      transition: .3s ease-in-out;
      opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
      top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div `
      position: absolute;
      top: 1.2rem;
      right: 1.5rem;
      background: transparent;
      font-size: 2rem;
      cursor: pointer;
`

const CloseIcon = styled(FaTimes) `
      color: white;
`

const SidebarWrapper = styled.div `
      color: white;
`

const SidebarLink = styled(LinkS) `
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      text-decoration: none;
      list-style-type: none;
      transition: .2s ease-in-out;
      color: white;
      cursor: pointer;

      &:hover{
            color: #01bf71;
            transition: .2s ease-in-out;
      }
`

const SidebarMenu = styled.div `
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 80px);
      text-align: center;

      @media screen and (max-width: 480px){
            grid-template-rows: repeat(6, 60px);
      }
`

const SideBtnWrap = styled.div `
      display: flex;
      justify-content: center;
`

const SidebarRoute = styled(LinkR)`
      text-decoration: none;
      border-radius: 50px;
      background: #01bf71;
      white-space: nowrap;
      padding: 16px 64px;
      color: #010606;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover{
            transition: all .2s ease-in-out;
            background: white;
            color: #010606;
      }
`

const P = styled.p `
      font-size: 18px;
      font-weight: 500;
`