import Mission from "./Block/Mission";
import Values from "./Block/Values";
import Vision from "./Block/Vision";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import MeetourTeam from "./Layout/MeetourTeam";

const Home = () => {
  return <>
  <Header/>
  <Hero/>
  <Mission/>
  <Vision/>
  <Values/>
  <MeetourTeam/>
  <Footer/>
  </>;
};

export default Home;
