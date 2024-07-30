import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
import styled from "styled-components"

const Header = () => {

  const [change, setChange] = useState<boolean>(false)


  const ChangeToggle = () =>{
    if (window.scrollY > 70) {
      setChange(true)
    } else {
      setChange(false)
    }
  }
  window.addEventListener("scroll", ChangeToggle)
  return (
    <>
    {
      change ? (
        <Container bg="#e22e6e"  style={{ backdropFilter: "10", WebkitBackdropFilter: "10px" }}>
        <Warpper>
          <Right>
          <Logo src={"/"} alt="logo" />
          </Right>
          <Middle col="white">
          <Link to="home" duration={500} smooth={true} offset={-50}>
          <nav>Home</nav>
          </Link>
            <Link to="mission" duration={500} smooth={true} offset={-50}>
            <nav>Mission</nav>
            </Link>
            <Link to="vision" duration={500} smooth={true} offset={-50}>
            <nav>Vision</nav>
            </Link>
            <Link to="values" duration={500} smooth={true} offset={-50}>
            <nav>Values</nav>
            </Link>
            <Link to="teams" duration={500} smooth={true} offset={-50}>
            <nav>Teams</nav>
            </Link>
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
      ) : (
        <Container bg="#F5F5F5" >
        <Warpper>
          <Right>
          <Logo src={"/"} alt="logo" />
          </Right>
          <Middle col="black">
            <Link to="home" duration={500} smooth={true} offset={-50}>
            <nav>Home</nav>
            </Link>
            <Link to="mission" duration={500} smooth={true} offset={-50}>
            <nav>Mission</nav>
            </Link>
            <Link to="vision" duration={500} smooth={true} offset={-50}>
            <nav>Vision</nav>
            </Link>
            <Link to="values" duration={500} smooth={true} offset={-50}>
            <nav>Values</nav>
            </Link>
            <Link to="teams" duration={500} smooth={true} offset={-50}>
            <nav>Teams</nav>
            </Link>
          </Middle>
          <Left>
            <NavLink to={"/signup"} >
            <Button>Signup</Button>
            </NavLink>
            <NavLink to={"/signin"}>
            <Button>Signin</Button>
            </NavLink>
          </Left>
        </Warpper>
    </Container>
      )
    }
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

const Middle = styled.div<{col:string}>`
width: 500px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
color: ${({col}) => col};

nav{
  font-size: 20px;
  font-weight: bold;
}

@media screen and (max-width:900px){
  display: none;
}
`

const Right = styled.div`
width: 100px;
height: 60px;
background-color: red;
`

const Logo = styled.img``

const Warpper = styled.div`
width: 95%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div<{bg: string}>`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({bg}) => bg};
position: sticky;
  top: 0%;
  z-index: 5;
`