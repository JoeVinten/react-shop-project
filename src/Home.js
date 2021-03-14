import styled from "styled-components";
import Button from "./components/Button";
import Heading from "./components/Heading";

const HomePageContainer = styled.main`
  margin: 0;
  padding: 0;
  background: url(https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  opacity: 1;
`;

const ContentSection = styled.div`
  position: absolute;
  bottom: 30%;
  left: 5%;
  padding: 2em;
`;

function Home() {
  return (
    <HomePageContainer>
      <ContentSection>
        <Heading />
        <Button text="Shop now" />
      </ContentSection>
    </HomePageContainer>
  );
}

export default Home;
