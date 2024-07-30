import styled from "styled-components"
import values from "../../assets/values.jpeg"

const Values = () => {
  return (
    <>
      <Container id="values">
      <Warpper>
        <Left>
          <h1>Our Values</h1>
          <span>Safety First: Ensuring a secure and protected environment for children to explore and learn.</span>
          <span>Educational Excellence: Committing to the highest standards of educational content and methodologies.</span>
          <span>Creativity and Curiosity: Fostering a love for learning by encouraging creative thinking and curiosity.</span>
          <span>Inclusivity: Providing accessible and inclusive resources for children of all backgrounds and abilities.</span>
          <span>Innovation: Continuously innovating to improve the AI's capabilities and the child's learning experience.</span>
          <span>Empathy and Compassion: Designing the AI to be empathetic and supportive, promoting emotional well-being and resilience.</span>
          <span>Collaboration with Parents: Engaging with parents and guardians to support their child's learning journey and development.</span>
        </Left>
        <Right>
          <img src={values} alt="loading..." />
        </Right>
      </Warpper>
    </Container>
    </>
  )
}

export default Values


const Right = styled.div`
width: 600px;
height: 400px;
background-color: #F5F5F5;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width:900px){
 width: 50%;
}
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
  width: 550px;
  font-size:18px;
  margin: 2px;
}

@media screen and (max-width:900px){
  width: 50%;
  height: 40vh;
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