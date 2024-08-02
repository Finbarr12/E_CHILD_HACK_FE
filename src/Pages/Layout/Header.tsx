import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/EChild.png"
import { useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

const Header = () => {

  const [show, Setshow] = useState<boolean>(false)

  const Toggle = () =>{
    Setshow(!show)
  }

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
          <Icon size={30} onClick={Toggle}/>
        </Warpper>
       {
        show ?  <Box>
        <nav style={{fontSize:"23px",color:"white"}}>Home</nav>
            <nav style={{fontSize:"23px",marginTop:"15px",color:"white"}}>Mission</nav>
            <nav style={{fontSize:"23px",marginTop:"15px",color:"white"}}>Vision</nav>
            <nav style={{fontSize:"23px",marginTop:"15px",color:"white"}}>Values</nav>
            <nav style={{fontSize:"23px",marginTop:"15px",color:"white"}}>Teams</nav>
            <NavLink to={"/signup"}>
            <Button style={{fontSize:"23px",marginTop:"15px"}}>Signup</Button>
            </NavLink>
            <NavLink to={"/signin"}>
            <Button style={{fontSize:"23px",marginTop:"18px"}}>Signin</Button>
            </NavLink>

        </Box> : null
       }
    </Container>
      
    
    </>
    )
  
}

export default Header

const Icon = styled(CiMenuBurger)`
display: none;

@media screen and (max-width:900px){
  display: flex;
}
`

const Box = styled.div`
width: 100%;
height: 450px;
background-color: rgba(0,0,0,0.4);
position: absolute;
top: 71px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

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