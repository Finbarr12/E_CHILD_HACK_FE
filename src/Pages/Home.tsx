import AboutUs from "./Block/AboutUs";
import HeroOne from "./Block/HeroOne";import MissionHolder from "./Block/MissionHolder";
;
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import MeetourTeam from "./Layout/MeetourTeam";

const Home = () => {
  return <>
  <Header/>
  <Hero/>
  <HeroOne/>
  <AboutUs/>
  <MissionHolder/>
  <MeetourTeam/>
  <Footer/>
  </>;
};

export default Home;
