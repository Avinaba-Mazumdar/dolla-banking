import {useState} from 'react'
import styled from 'styled-components'
import Video from '../../media/video.mp4'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import Button from '../Button'

const HeroSection = () => {
      const [hover, setHover] = useState(false);

      const onHover = () => {
            setHover(!hover);
      }

      return (
            <HeroContainer id='home'>
                  <HeroBg>
                        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                  </HeroBg>
                  <HeroContent>
                        <HeroH1>Virtual Banking Made Easy</HeroH1>
                        <HeroP>
                              Sign Up for a new account today and recieve $250 in credit towards your next payment.
                        </HeroP>
                        <HeroBtnWrapper>
                              <Button
                              to='signup'
                              onMouseEnter={onHover}
                              onMouseLeave={onHover}
                              primary='true'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                              dark='true' >Get started {hover ? <AfterForward/> : <ArrowRight/>}
                              </Button>
                        </HeroBtnWrapper>
                  </HeroContent>
            </HeroContainer>
      )
}

export default HeroSection


const HeroContainer = styled.div `
      background: #0c0c0c;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      height: 800px;
      position: relative;
      z-index: 1;
`

const HeroBg = styled.div `
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: .5;
`

const VideoBg = styled.video `
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      background: #232a84;
`

const HeroContent = styled.div `
      z-index: 3;
      max-width: 1200px;
      position: absolute;
      padding: 8px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
`

const HeroH1 = styled.h1 `
      color: white;
      font-size: 48px;
      text-align: center;

      @media screen and (max-width:768px){
            font-size: 40px;
      }
      @media screen and (max-width: 480px){
            font-size: 32px;
      }
`

const HeroP = styled.p `
      margin-top: 24px;
      color: white;
      font-size: 24px;
      text-align: center;
      max-width: 600px;

      @media screen and (max-width:768px){
            font-size: 22px;
      }
      @media screen and (max-width: 480px){
            font-size: 18px;
      }
`

const HeroBtnWrapper = styled.div `
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
`

const AfterForward = styled(MdArrowForward) `
      margin-left: 8px;
      font-size: 20px;
`

const ArrowRight= styled(MdKeyboardArrowRight) `
      margin-left: 8px;
      font-size: 20px;
`