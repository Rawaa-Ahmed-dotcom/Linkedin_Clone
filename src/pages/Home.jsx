import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Middle from '../components/Middle';
const Home = () => {
  return (
    <Container>
      <Header/>
      <Section>
        <h5><a>Hiring in a hurry? - </a></h5>
        <p>Find talented pros in record time with Upwork and keeo business moving.</p>
      </Section>
      <Layout>
        <LeftSide/>
        <Middle/>
        <RightSide/>

      </Layout>
    </Container>
  )
}
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
 
`;
const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`
const Section = styled.section`
  
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
    
  }
  
`;
const Layout = styled.div`
  display: grid;
  padding-inline: 2em;
  grid-template-areas: "leftSide main rightSide";
  grid-template-columns: minmax(0,7fr) minmax(0,12fr) minmax(300px,7fr);
  gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`; 
export default Home
