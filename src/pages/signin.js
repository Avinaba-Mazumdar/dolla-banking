import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SigninPage = () => {
      return (
            <Container>
                  <FormWrap>
                        <Icon to='/'>dolla</Icon>
                        <FormContent>
                              <Form action='#'>
                                    <FormH1>Sign In to your account</FormH1>
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='email' required/>
                                    <FormLabel htmlFor='for'>Password</FormLabel>
                                    <FormInput type='password' required/>
                                    <FormButton type='submit'>Continue</FormButton>
                                    <Text>Forgot Password</Text>
                              </Form>
                        </FormContent>
                  </FormWrap>
            </Container>
      )
}; export default SigninPage


const Container = styled.div `
      min-height: 692px;
      position: fixed;
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      z-index: 0;
      overflow: hidden;
      background: linear-gradient(
            108deg,
            rgba(1, 147, 86, 1) 25%,
            rgba(10, 201, 122, 1) 100%
      );
`

const FormWrap = styled.div `
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 400px){
            height: 80%;
      }
`

const Icon = styled(Link) `
      margin-left: 32px;
      margin-top: 32px;
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 32px;

      @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 20px;
            margin-bottom: 30px;
      }
`

const FormContent = styled.div `
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 480px){
            padding: 10px;
      }
`

const Form = styled.div `
      background: #010101;
      max-width: 400px;
      height: auto;
      width: 100%;
      z-index: 1;
      display: grid;
      margin: 0 auto;
      padding: 80px 32px;
      border-radius: 4px;
      box-shadow: 0 0 7px rgba(0,0,0,1);

      @media screen and (max-width: 400px){
            padding: 32px 32px;
      }
`

const FormH1 = styled.h1 `
      margin-bottom: 40px;
      color: white;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
`

const FormLabel = styled.label `
      margin-bottom: 8px;
      font-size: 14px;
      color: white;
`

const FormInput = styled.input `
      padding: 16px 16px;
      margin-bottom: 32px;
      border: none;
      border-radius: 4px;
      outline: none;
      font-weight: 500;
`

const FormButton = styled.button `
      background: #01bf71;
      padding: 16px 0;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover{
            background: #01995a;
      }
`

const Text = styled.span `
      text-align: center;
      margin-top: 24px;
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover{
            color: #01bf71;
      }
`