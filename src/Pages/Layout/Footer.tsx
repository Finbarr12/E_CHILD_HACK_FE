import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
        <p>&copy;{new Date().getFullYear()} E-Child. Designed by Team E-Child</p>
    </Container>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
height: 80px;
background-color: #000;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-family: "Butterfly Kids", cursive;
`