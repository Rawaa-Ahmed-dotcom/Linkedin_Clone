import React from 'react'
import { Link } from 'react-router'
import LogoLogin from "../images/login-logo.svg";
import styled from 'styled-components';
import HeroLogIn from "../images/login-hero.svg";
import GoogleIcon from "../images/google.svg";
const Login = () => {
  return (
    <div>
      <Nav className = "nav_login">
        <Logo to = "/">
            <img src = {LogoLogin}/>
        </Logo>
        <div className = "login_options">
            <Join className = "join_login">Join now</Join>
            <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>This is Hero Banner</h1>
          <img src = {HeroLogIn}/>
        </Hero>
        <Form>
          <Google>
            <img src = {GoogleIcon}/>
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </div>
  )
  

}

let Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;
  `;
  const Join = styled.a`
  font-size: 16px;
    padding: 10px 12px;
    color: rgba(0,0,0,0.7);
    margin-right: 12px;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: rgba(0,0,0,0.08);
      color: rgba(0,0,0,0.9);
    }  
  `;
  const Logo = styled.div`
  width: 135px;
  height: 34px;
  @media (max-width: 768px) {
    .nav_login {
        padding: 0 5px;
    }    
}
  `;
  const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(112,181,249, 0.15);
    
  }
  `;
  const Section = styled.section`
    display: flex;
    
    min-height: 70px;
    padding-bottom: 138px;
    padding-top: 40px;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1120px;
    align-items: center;
    margin : auto;
    @media (max-width : 768px) {
      min-height: 0;
      margin: auto;
      justify-content: center;
    }
  `;
  const Hero = styled.div`
    width: 100%;
    position: relative;
    h1 {
      padding-bottom: 0;
      width: 55%;
      font-size: 56px;
      color: #2977c9;
      font-weight: 200;
      line-height: 70px;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
      }
    }
    img {
      /* z-index : -1; */
      width: 700px;
      height: 670px;
      position: absolute;
      bottom: -500px;
      right: -150px;
      @media (max-width: 768px) {
        top: 230px;
        width: initial;
        position: initial;
        height: initial;
      }
    }
  `;
  const Form = styled.div`
    width: 408px;
    margin-top: 100px;
   
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  `;
  const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0  1px rgba(0,0 ,0 ,0.6),inset 0 0 0 2px rgba(0,0,0,0),inset 0 0 0 1px rgba(0, 0, 0, 0);
    cursor: pointer;
    vertical-align: middle;
    z-index: 0;
    transition: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      background-color: rgba(207,207,207,0.25);
      color: rgba(0,0,0,0.75);
    }
  `;
export default Login
