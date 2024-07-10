// import React from 'react'

import styled from "styled-components";
import female from "../assets/femaleteach.png";
import male from "../assets/maleteacher.png";

const RightSide = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <div>
            <img src={female} alt="" />
            <p>Mrs. Clara</p>
          </div>
          <div>
            <img src={male} alt="" />
            <p>Mr Femi</p>
          </div>
        </ImageHolder>
        <button>Select Your Teacher</button>
      </Wrapper>
    </Container>
  );
};

export default RightSide;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 300px;
    height: 40px;
    background-color: #e3306f;
    margin-top: 70px;
    border-radius: 5px;
    color: white;
    font-size: 26px;
    border: none;
    font-family: "Butterfly Kids", cursive;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageHolder = styled.div`
  display: flex;
  img {
    height: 340px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
    margin: 10px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    font-family: "Princess Sofia", cursive;
  }
`;
