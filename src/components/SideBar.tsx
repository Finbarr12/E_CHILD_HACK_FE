import styled from "styled-components";
import logo from "../assets/EChild.png";
import Sidenavigation from "./Sidenavigation";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineQuiz } from "react-icons/md";
import { FaItunesNote } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { FaCircleQuestion } from "react-icons/fa6";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <ImgHolder>
          <Img src={logo} alt="" />
        </ImgHolder>
        <Sidenavigation
          to="/dashboard"
          icon={
            <RiHomeSmile2Fill
              style={{ color: "white", marginLeft: "30px" }}
              size={20}
            />
          }
          color="#E22E6E"
          text="Home"
          mt="20px"
        />
        <Sidenavigation
          to="/dashboard/quiz"
          icon={
            <MdOutlineQuiz
              style={{ color: "white", marginLeft: "30px" }}
              size={20}
            />
          }
          color="#E22E6E"
          text="Quiz"
          mt="7px"
        />
        <Sidenavigation
          to="/dashboard/poems"
          icon={
            <FaItunesNote
              style={{ color: "white", marginLeft: "30px" }}
              size={20}
            />
          }
          color="#E22E6E"
          text="Poems"
          mt="7px"
        />
        <Sidenavigation
          to="/dashboard/funfacts"
          icon={
            <FaCircleQuestion
              style={{ color: "white", marginLeft: "30px" }}
              size={20}
            />
          }
          color="#E22E6E"
          text="Fun Facts"
          mt="7px"
        />
        <Sidenavigation
          to=""
          icon={
            <VscSignOut
              style={{ color: "white", marginLeft: "30px" }}
              size={20}
            />
          }
          color="transparent"
          text="Log Out"
          mt="70px"
        />
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const ImgHolder = styled.div`
  width: 80%;
  height: 90px;
  border-bottom: 1px solid #626268;
`;

const Img = styled.img`
  height: 40px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  font-family: "Butterfly Kids", cursive;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 95%;
  border-radius: 10px;
  background-color: #313034;
  margin-left: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
