import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

interface iside {
  icon?: any;
  color: string;
  text?: string;
  mt: string;
  to: string;
}

const Sidenavigation: React.FC<iside> = ({ text, color, icon, mt, to }) => {
  return (
    <Container to={to} cl={color} mt={mt}>
      {icon}
      <p>{text}</p>
    </Container>
  );
};

export default Sidenavigation;

const Container = styled(Link)<{ cl: string; mt: string }>`
  width: 90%;
  height: 60px;
  background-color: ${({ cl }) => cl};
  margin-top: ${({ mt }) => mt};
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  border-radius: 10px;
  transition: all 350ms ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #e22e6e;
  }
  p {
    font-size: 17px;
    color: white;
  }
`;
