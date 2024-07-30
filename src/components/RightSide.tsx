import React, { useState } from "react";
import styled from "styled-components";
import female from "../assets/teacherG.jpg";
import male from "../assets/mteach.jpg";
import { useTeacher } from "../context/TeacherContext";
import AskQuestion from "./AskQuestion";

const RightSide: React.FC = () => {
  const { teacher, selectTeacher } = useTeacher();
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  const handleSelect = (teacher: string) => {
    setSelectedTeacher(teacher);
  };

  const handleDone = () => {
    if (selectedTeacher) {
      selectTeacher(selectedTeacher);
    }
  };

  if (teacher) {
    return <AskQuestion />;
  }

  return (
    <Container>
      <Wrapper>
        <Select>Select An Instructor</Select>
        <ImageHolder>
          <Avatar
            bg={selectedTeacher === "Clara" ? "#e22e6e" : "transparent"}
            onClick={() => handleSelect("Clara")}
            cirbg={
              selectedTeacher === "Clara"
                ? "4px solid white"
                : "4px solid #e3306f"
            }
            txt={selectedTeacher === "Clara" ? "white" : "black"}
          >
            <Circle className="circle">
              <img src={female} alt="Mrs. Clara" />
            </Circle>
            <p>Mrs. Clara</p>
          </Avatar>
          <Avatar
            bg={selectedTeacher === "Alvin" ? "#e22e6e" : "transparent"}
            onClick={() => handleSelect("Alvin")}
            cirbg={
              selectedTeacher === "Alvin"
                ? "4px solid white"
                : "4px solid #e3306f"
            }
            txt={selectedTeacher === "Alvin" ? "white" : "black"}
          >
            <Circle className="circle">
              <img src={male} alt="Mr. Alvin" />
            </Circle>
            <p>Mr. Alvin</p>
          </Avatar>
        </ImageHolder>
        <button
          style={{
            background: selectedTeacher ? "#e22e6e" : "#cecece",
            cursor: selectedTeacher ? "pointer" : "not-allowed",
          }}
          onClick={handleDone}
          disabled={!selectedTeacher}
        >
          Done
        </button>
      </Wrapper>
    </Container>
  );
};

export default RightSide;

const Select = styled.h1`
  font-family: "Princess Sofia", cursive;
`;

type AvatarProps = {
  bg: string;
  cirbg: string;
  txt: string;
};

const Avatar = styled.div<AvatarProps>`
  cursor: pointer;
  width: 160px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 350ms ease-in-out;
  background-color: ${({ bg }) => bg};

  .circle {
    border: ${({ cirbg }) => cirbg};
  }

  p {
    color: ${({ txt }) => txt};
  }

  &:hover {
    background-color: #e22e6e;

    p {
      color: white;
    }
    .circle {
      border: 4px solid white;
    }
  }
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #e3306f;
  overflow: hidden;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 300px;
    height: 40px;
    background-color: #cecece;
    margin-top: 40px;
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
  gap: 30px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px;
  }

  p {
    font-size: 30px;
    font-weight: 700;
    font-family: "Princess Sofia", cursive;
  }
`;
