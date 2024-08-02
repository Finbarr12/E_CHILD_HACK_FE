import { FiArrowUpRight } from "react-icons/fi"
import styled from "styled-components"

const MissionHolder = () => {
  return (
    <>
       <Container>
        <Main>
          <Card style={{backgroundColor:"#FFF2EC"}}>
            <Box></Box>
            <h1>Our Mission</h1>
            <span>
            Our mission is to provide a safe, 
engaging, and educational digital 
companion that nurtures 
children's curiosity, creativity, 
and learning, while ensuring 
their well
-being and 
development through cutting
-
edge AI technology.
            </span>
            <ButtonHolder>
          <p>Learn more</p>
          <FiArrowUpRight size={25} style={{ marginLeft:"20px"}}/>
        </ButtonHolder>
          </Card>
          <Card style={{backgroundColor:"#ECF5C6"}}>
            <Box></Box>
            <h1>Our vision</h1>
            <span>
            Our vision is to be the leading AI-driven platform that revolutionizes the way children 
            interact with technology, offering personalized and adaptive learning experiences that 
            empower the next generation to thrive in an ever-evolving digital world.
            </span>
            <ButtonHolder>
          <p>Learn more</p>
          <FiArrowUpRight size={25} style={{ marginLeft:"20px"}}/>
        </ButtonHolder>
          </Card>
          <Card style={{backgroundColor:"#FFEAC8"}}>
            <Box></Box>
            <h1>Our Values</h1>
            <p>
            1. Safety First: Ensuring a secure and protected environment 
            for children to explore and learn.
            </p>
            <p> 
              2. Educational Excellence: Committing to the highest standards 
            of educational content and methodologies.</p>
            <ButtonHolder>
          <p>Learn more</p>
          <FiArrowUpRight size={25} style={{ marginLeft:"20px"}}/>
        </ButtonHolder>
          </Card>
          
        </Main>
        </Container> 
    </>
  )
}

export default MissionHolder

const ButtonHolder = styled.div`
width: 180px;
height: 45px;
border-radius: 40px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
cursor: pointer;

p{
  
  font-size: 20px;
  font-weight: 500;
}
`

const Box = styled.div`
  width: 150px;
  height: 90px;
  background-color: gold;
  margin-top: 20px;
`

const Card = styled.div`
padding: 30px;

h1{
  margin-top: 20px;
  font-family: "Butterfly Kids", cursive;
}

p{
  font-size: 19px;
  font-weight: 500;
}

span{
  font-size: 19px;
  font-weight: 500;
  margin-top: 20px;
}
`

const Main = styled.div`
  width: 82%;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;

  @media screen and (max-width:900px){
   display: grid;
   grid-template-columns: repeat(1,1fr);
   height: 380vh;
}
`

const Container = styled.div`
    width: 100%;
    height: 95vh;
    background-color: #FFFBF5;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:900px){
  height: 400vh;
}
`