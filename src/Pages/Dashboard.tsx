import styled from "styled-components";
// import DashHeader from "../components/DashHeader";
// import RightSide from "../components/RightSide";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <MainContainer>
      <SideBar />
      <Outlet />
    </MainContainer>
  );
};

export default Dashboard;

const MainContainer = styled.div`
  background-color: #f2f5fa;
  height: 100vh;
  width: 100%;
  display: flex;
`;
