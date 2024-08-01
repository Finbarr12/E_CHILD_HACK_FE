import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/EChild.png"

const Header = () => {

  return (
    <>
    
        <Container   style={{ backdropFilter: "10", WebkitBackdropFilter: "10px" }}>
        <Warpper>
          <Right>
          <Logo src={logo} alt="logo" />
          </Right>
          <Middle>
          <nav>Home</nav>
            <nav>Mission</nav>
            <nav>Vision</nav>
            <nav>Values</nav>
            <nav>Teams</nav>
          </Middle>
          <Left>
            <NavLink to={"/signup"}>
            <Button>Signup</Button>
            </NavLink>
            <NavLink to={"/signin"}>
            <Button>Signin</Button>
            </NavLink>
          </Left>
        </Warpper>
    </Container>
      
    
    </>
    )
  
}

export default Header



const Button = styled.button`
width: 100px;
height: 40px;
border-radius: 10px;
border: 1px solid black;
font-size: 20px;
cursor: pointer;
font-family: "Butterfly Kids", cursive;
`

const Left = styled.div`
width: 230px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:900px){
  display: none;
}
`

const Middle = styled.div`
width: 500px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;

nav{
  font-size: 20px;
  font-weight: bold;
  font-family: "Butterfly Kids", cursive;
}

@media screen and (max-width:900px){
  display: none;
}
`

const Right = styled.div`
width: 100px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
`

const Logo = styled.img`
height: 70px;
width: 70px;
`

const Warpper = styled.div`
width: 95%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F5F5F5;
position: sticky;
  top: 0%;
  z-index: 5;
`