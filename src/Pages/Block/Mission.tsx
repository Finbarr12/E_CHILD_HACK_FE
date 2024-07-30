import styled from "styled-components"
import mission from "../../assets/mission1-removebg.png"

const Mission = () => {
  return (
    <>
    <Container id="mission">
      <Warpper>
        <Left>
          <h1>Our Mission</h1>
          <span>To provide a safe, engaging, and educational digital companion that nurtures children's curiosity, creativity, and learning, while ensuring their well-being and development through innovative AI technology.</span>
        </Left>
        <Right>
          <img src={mission} alt="loading..." />
        </Right>
      </Warpper>
    </Container>
    </>
  )
}

export default Mission


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