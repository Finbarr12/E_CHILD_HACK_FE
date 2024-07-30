import styled from "styled-components"
import bg from "../../assets/banner_01.jpg"

const Hero = () => {
  return (
    <>
      <Container>
        <Warpper></Warpper>
      </Container>
    </>
  )
}

export default Hero

const Warpper = styled.div``

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width:900px){
  width: 100%;
}
`