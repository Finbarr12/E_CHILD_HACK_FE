import { Link } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Home = () => {
  return <>
  {/* <Header/>
  <Footer/> */}
  <Link to={"/signup"}>
  <div>Home</div>
  </Link>
  </>;
};

export default Home;
