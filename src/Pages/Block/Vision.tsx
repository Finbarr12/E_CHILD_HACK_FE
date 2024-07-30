import styled from "styled-components"
import vision from "../../assets/vision.webp"

const Vision = () => {
  return (
    <>
    <Container id="vision">
    <Warpper>
      <Right>
        <img src={vision} alt="loading..." />
      </Right>
      <Left>
        <h1>Our Vision</h1>
        <span>To be the leading AI-driven platform that revolutionizes the way children interact with technology, offering personalized and adaptive learning experiences that empower the next generation to thrive in an ever-evolving digital world.</span>
      </Left>
    </Warpper>
  </Container>
    </>
  )
}

export default Vision


const Right = styled.div`
width: 600px;
height: 400px;
background-color: #F5F5F5;
display: flex;
align-items: center;
justify-content: center;
`

const Left = styled.div`
width: 600px;
height: 400px;
background-color: #6B1716;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color:white;

span{
  width: 500px;
  font-size:18px;
}
`

const Warpper = styled.div`
width: 90%;
height: 70vh;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:900px){
  flex-wrap: wrap;
}
`

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
align-items: center;
justify-content: center;
`