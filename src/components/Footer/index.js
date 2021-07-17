import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialTwitterCircular, TiSocialGooglePlusCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
      const toggleHome = () => {
            scroll.scrollToTop();
      }

      return (
            <FooterContainer>
                  <FooterWrap>
                        <FooterLinksContainer>
                              <FooterLinksWrapper>
                                    <FooterLinkItems>
                                          <FooterLinkTitle>About Us</FooterLinkTitle>
                                                <FooterLink to='/'>How it works</FooterLink>
                                                <FooterLink to='/'>Testimonials</FooterLink>
                                                <FooterLink to='/'>Careers</FooterLink>
                                                <FooterLink to='/'>Investors</FooterLink>
                                                <FooterLink to='/'>Terms</FooterLink>
                                    </FooterLinkItems>
                                    <FooterLinkItems>
                                          <FooterLinkTitle>Videos</FooterLinkTitle>
                                                <FooterLink to='/'>Submit Video</FooterLink>
                                                <FooterLink to='/'>Ambassadors</FooterLink>
                                                <FooterLink to='/'>Agency</FooterLink>
                                                <FooterLink to='/'>Influencer</FooterLink>
                                                <FooterLink to='/'>YouTube</FooterLink>
                                    </FooterLinkItems>
                              </FooterLinksWrapper>
                              <FooterLinksWrapper>
                                    <FooterLinkItems>
                                          <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                                <FooterLink to='/'>Contact</FooterLink>
                                                <FooterLink to='/'>Support</FooterLink>
                                                <FooterLink to='/'>Destinations</FooterLink>
                                                <FooterLink to='/'>Sponsorships</FooterLink>
                                                <FooterLink to='/'>Blog Page</FooterLink>
                                    </FooterLinkItems>
                                    <FooterLinkItems>
                                          <FooterLinkTitle>Social Media</FooterLinkTitle>
                                                <FooterLink to='/'>Facebook</FooterLink>
                                                <FooterLink to='/'>Instagram</FooterLink>
                                                <FooterLink to='/'>Google Plus</FooterLink>
                                                <FooterLink to='/'>Twitter</FooterLink>
                                                <FooterLink to='/'>Linkedin</FooterLink>
                                    </FooterLinkItems>
                              </FooterLinksWrapper>
                        </FooterLinksContainer>
                        <SocialMedia>
                              <SocialMediaWrap>
                                    <SocialLogo onClick={toggleHome} to='/'>dolla</SocialLogo>
                              </SocialMediaWrap>
                              <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                              <SocialIcons>
                                    <SocialIconLink href='/' target='_blank' area-label='Facebook'><TiSocialFacebookCircular/></SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' area-label='Instagram'><TiSocialInstagramCircular/></SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' area-label='Google Plus'><TiSocialGooglePlusCircular/></SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' area-label='Twitter'><TiSocialTwitterCircular/></SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' area-label='Linkedin'><TiSocialLinkedinCircular/></SocialIconLink>
                              </SocialIcons>
                        </SocialMedia>
                  </FooterWrap>
            </FooterContainer>
      )
}; export default Footer


const FooterContainer = styled.footer `
      background-color: #101522;
`

const FooterWrap = styled.div `
      padding: 48px 24px 10px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
`

const FooterLinksContainer = styled.div `
      display: flex;
      justify-content: center;

      @media screen and (max-width: 828px){
            padding-top: 32px;
      }
`

const FooterLinksWrapper = styled.div `
      display: flex;

      @media screen and (max-width: 828px){
            flex-direction: column;
      }
`

const FooterLinkItems = styled.div `
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 16px;
      width: 160px;
      box-sizing: border-box;
      color: white;

      @media screen and (max-width: 420px){
            margin: 0;
            padding: 10px;
            width: 100%;
      }
`

const FooterLinkTitle = styled.h1 `
      font-size: 19px;
      margin-bottom: 11px;
      font-weight: 600;

      @media screen and (max-width:300px){
            font-size: 15px;
      }
`

const FooterLink = styled(Link) `
      color: white;
      text-decoration: none;
      margin-bottom: .5rem;
      font-size: 15px;

      &:hover{
            color: #01bf71;
            transition: .3s ease-in-out;
      }

      @media screen and (max-width:480px){
            font-size: 13px;
      }
`

const SocialMedia = styled.div `
      max-width: 1000px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
`

const SocialMediaWrap = styled.div `
      max-width: 1100px;
      margin: 40px auto 0 auto;

      @media screen and (max-width: 828px){
            flex-direction: column;
      }
`

const SocialLogo = styled.div `
      color: white;
      cursor: pointer;
      text-decoration: none;
      font-size: 1.5rem;
      margin-bottom: 16px;
      font-weight: bold;
`

const WebsiteRights = styled.div `
      color: white;
      margin-bottom: 16px;
`

const SocialIcons = styled.div `
      display: flex;
      color: white;
`

const SocialIconLink = styled.div `
      font-size: 50px;
`