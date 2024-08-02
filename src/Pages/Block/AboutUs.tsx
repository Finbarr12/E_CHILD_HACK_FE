import styled from "styled-components"
import bg from "../../assets/background.jpeg"
import img from "../../assets/about.png"
import { NavLink } from "react-router-dom"

const AboutUs = () => {
  return (
    <>
    <Container>
        <Main>
            <Left>
                <img src={img} alt="loading..." />
            </Left>
            <Right>
                <h1>
                About Our E-Child
                </h1>
                <div>
                Enthusiasticay diseminate competitive oportunitie through transparent an <br /> actions Compelngly seize viral schemas through intermandated creative is <br /> adiea sources. Enthusiasticay plagiarize clientcentered relationship for the <br /> covalent experiences. Distinctively architect 24/365 service for wireless is <br />ebusiness ahosfluorescently Efficiently comunicate coperative methods of <br /> empowerment awesome athrough Monotonectaly myocardinate cross and <br /> functional niche markets and an functional.
                </div>
                <NavLink to={"/signup"} style={{textDecoration:"none"}}>
                <Button>Get Started</Button>
                </NavLink>
            </Right>
        </Main>
    </Container>
    </>
  )
}

export default AboutUs

const Button = styled.button`
width: 130px;
height: 60px;
margin-top: 20px;
background-color: #e22e6e;
border: none;
border-radius: 10px;
color: white;
font-size: 19px;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: white;
    color: black;
}
`

const Right = styled.div`
width: 490px;
height: 400px;
margin-left: 40px;
padding: 10px;

@media screen and (max-width:900px){
 width: 80%;
 margin-top: 0;
}

div{
    color: white;
    margin-top: 20px;


}

h1{
    color: white;
    margin-top: 40px;
}
`

const Left = styled.div`
width: 500px;
height: 390px;
overflow: hidden;

@media screen and (max-width:900px){
    height: 230px;
   width: 300px;
   display: flex;
   justify-content: center;
   }

img{
    width: 100%;
height: 100%;
object-fit: cover;
    @media screen and (max-width:900px){
width: 100%;
height: 100%;
object-fit: cover;
}
}
`

const Main = styled.div`
    width: 100%;
    height: 90vh;
    background-color: rgba(28, 25, 221, 0.664);
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width:900px){
        display: flex;
    align-items: center;
    justify-content: center;
        flex-direction: column;
  height: 122vh;
}
`

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

@media screen and (max-width:900px){
 height: 122vh;
}
`