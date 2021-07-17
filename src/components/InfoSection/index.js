import styled from 'styled-components'
import Button from '../Button'
import img from '../../media/svg2.svg'

const InfoSection = ({lightBg, darkText, id, lightText, description, imgStart, topLine, headline, buttonLabel, alt, primary, dark, dark2}) => {
      return (
            <InfoContainer lightBg={lightBg} id={id}>
                  <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                              <Column1>
                              <TextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Title lightText={lightText}>{headline}</Title>
                                    <SubTitle darkText={darkText}>{description}</SubTitle>
                                    <BtnWrap>
                                          <Button to='home'
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                exact="true"
                                                offsets={-80}
                                                primary={primary ? 1 : 0}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                          >{buttonLabel}</Button>
                                    </BtnWrap>
                              </TextWrapper>
                              </Column1>
                              <Column2>
                                    <ImgWrap>
                                          <Img src={img} alt={alt} />
                                    </ImgWrap>
                              </Column2>
                        </InfoRow>
                  </InfoWrapper>
            </InfoContainer>
      )
}; export default InfoSection


const InfoContainer = styled.div `
      color: white;
      background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

      @media screen and (max-width:768px){
            padding: 100px 0;
      }
`

const InfoWrapper = styled.div `
      display: grid;
      z-index: 1;
      height: 860px;
      width: 100%;
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 24px;
      justify-content: center;
`

const InfoRow = styled.div `
      display: grid;
      grid-auto-columns: minmax(auto, 1fr);
      align-items: center;
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

      @media screen and (max-width:768px){
            grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
      }
`

const Column1 = styled.div `
      margin-bottom: 15px;
      padding: 0 15px;
      grid-area: col1;
`

const Column2 = styled.div `
      margin-bottom: 15px;
      padding: 0 15px;
      grid-area: col2;
`

const TextWrapper = styled.div `
      max-width: 540px;
      padding-top: 0;
      padding-bottom: 60px;
`

const TopLine = styled.div `
      color: white;
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-bottom: 16px;
`

const Title = styled.h1 `
      color: #000;
      margin-bottom:24px;
      font-size: 48px;
      line-height: 1.1;
      font-weight: 600;
      color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

      @media screen and (max-width:480px){
            font-size: 36px;
      }

      @media screen and (max-width:300px){
            font-size: 33px;
      }
`

const SubTitle = styled.p `
      max-width: 440px;
      margin-bottom: 35px;
      font-size: 18px;
      line-height: 24px;
      color: ${({darkText}) => (darkText ? '#010606' : 'white')};
`

const BtnWrap = styled.div `
      display: flex;
      justify-content: center;
`

const ImgWrap = styled.div `
      max-width: 550px;
      height: 100%;
`

const Img = styled.img `
      width: 100%;
      margin: 0 0 10px 0;
      padding-right: 0;
`