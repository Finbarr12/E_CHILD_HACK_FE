import styled, { keyframes } from "styled-components";
import coming from "../assets/comingsoon.png";

const Quiz = () => {
  return (
    <Container>
      <img src={coming} alt="Coming Soon" />
      <p>Coming Soon..</p>
    </Container>
  );
};

export default Quiz;

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 170px;
    animation: ${waveAnimation} 1.5s infinite;

    @media screen and (max-width: 500px) {
      height: 100px;
    }
  }

  p {
    font-size: 31px;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    margin-top: 20px;

    @media screen and (max-width: 500px) {
      font-size: 19px;
    }
  }
`;
