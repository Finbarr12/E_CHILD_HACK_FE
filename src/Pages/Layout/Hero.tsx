import styled from "styled-components"
import bg from "../../assets/banner-bg-3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
// import Slider from "react-slick";

const Hero = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <>
      <Container>
        <Box>
          <h3 style={{color:"#e22e6e"}}>Welcome back to school</h3>
          <h1>Where Education</h1>
          <h1>Meets Imagination</h1>
          <span>welcome to E-Child where every child's potential is nurtured through quality education and <br /> postivie values. inspiring young minds to explore, learn, and grow together.</span>
          <NavLink to={"/signup"} style={{textDecoration:"none"}}>
          <ButtonHolder>
          <p>Get Started</p>
          <FiArrowUpRight size={25} style={{color:"white", marginLeft:"20px"}}/>
        </ButtonHolder>
        </NavLink>
        </Box>
      </Container>
    </>
  )
}

export default Hero

const ButtonHolder = styled.div`
width: 180px;
height: 45px;
background-color: #e22e6e;
border-radius: 40px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
cursor: pointer;

p{
  color: white;
  font-size: 20px;
  font-weight: 500;
}
`

const Box = styled.div`
width: 800px;
min-height: 200px;
margin-left: 150px;
margin-top: 300px;
display: flex;
flex-direction: column;

@media screen and (max-width:900px){
 width: 90%;
 margin-left: 50px;
}

span{
color: white;
font-size: 18px;
@media screen and (max-width:900px){
    font-size: 15px;
}
}

h1{
  color: white;
  font-size: 90px;
  font-weight: 600;
  @media screen and (max-width:900px){
    font-size: 30px;
    font-weight: 600;
}
}
`

const Container = styled.div`
  width: 100%;
  height: 140vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  

  @media screen and (max-width:900px){
  width: 100%;
}
`