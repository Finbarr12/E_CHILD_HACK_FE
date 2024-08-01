import styled from "styled-components";
// import DashHeader from "../components/DashHeader";
// import RightSide from "../components/RightSide";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/MobileNav";

const Dashboard = () => {
  return (
    <MainContainer>
      <SideBar />
      <Outlet />
      <MobileNav />
    </MainContainer>
  );
};

export default Dashboard;

const MainContainer = styled.div`
  background-color: #f2f5fa;
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
