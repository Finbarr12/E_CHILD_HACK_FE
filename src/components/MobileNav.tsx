import styled from "styled-components";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineQuiz } from "react-icons/md";
import { FaItunesNote } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const MobileNav: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <Boxes to="/dashboard" active={location.pathname === "/dashboard"}>
          <RiHomeSmile2Fill />
          <p>Home</p>
        </Boxes>
        <Boxes
          to="/dashboard/quiz"
          active={location.pathname === "/dashboard/quiz"}
        >
          <MdOutlineQuiz />
          <p>Quiz</p>
        </Boxes>
        <Boxes
          to="/dashboard/poems"
          active={location.pathname === "/dashboard/poems"}
        >
          <FaItunesNote />
          <p>Poems</p>
        </Boxes>
        <Boxes
          to="/dashboard/funfacts"
          active={location.pathname === "/dashboard/funfacts"}
        >
          <FaCircleQuestion />
          <p>Did you know?</p>
        </Boxes>
      </Container>
    </>
  );
};

export default MobileNav;

const Boxes = styled(Link)<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  text-decoration: none;
  background-color: ${({ active }) => (active ? "#E22E6E" : "transparent")};
  padding: 10px;

  &:hover {
    background-color: #e22e6e;
  }

  svg {
    margin-bottom: 5px;
  }

  p {
    margin: 0;
  }
`;

const Container = styled.div`
  display: none;
  width: 95%;
  height: 80px;
  background-color: #313034;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: hidden;
  }
`;
