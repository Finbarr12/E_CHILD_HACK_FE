import styled from "styled-components"

const HeroOne = () => {
  return (
    <>
    <Container>
        <Main>
            <Card>
                <Box></Box>
                <h2>Interactive Learning <br /> Games & Activities</h2>
                <span>Provide a variety of fun and educational games <br /> and activities that cover different subjects such as <br /> math, science, language arts, and geography</span>
            </Card>
            <Card>
            <Box></Box>
            <h2>Child-Friendly <br /> Content Libraries</h2>
            <span>Provide a variety of fun and educational games <br /> and activities that cover different subjects such as <br /> math, science, language arts, and geography</span>
            </Card>
            <Card>
            <Box></Box>
            <h2 style={{textAlign:"center"}}>Progress Tracking <br /> & Reporting</h2>
            <span>Provide a variety of fun and educational games <br /> and activities that cover different subjects such as <br /> math, science, language arts, and geography</span>
            </Card>
        </Main>
    </Container>
    </>
  )
}

export default HeroOne

const Box = styled.div`
width: 130px;
height: 120px;
border-radius: 40px;
background-color: #e22e6e;
display: flex;
align-items: center;
justify-content: center;

`
    

const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-left: 10px;

@media screen and (max-width:900px){
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0;
width: 100%;
}



span{
    width: 400px;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    /* font-family: "Princess Sofia", cursive; */
    font-family: 'Times New Roman', Times, serif;
    text-align: center;

    @media screen and (max-width:900px){
      width: 80%;
  font-size: 12px;
  text-align: center;
}
}

h2{
    font-weight: 600;
    margin-top: 20px;
    /* font-family: "Butterfly Kids", cursive; */
    font-family: Arial, Helvetica, sans-serif;
}
`
    

const Main = styled.div`
    width: 90%;
    height: 60vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);

    @media screen and (max-width:900px){
   display: grid;
   grid-template-columns: repeat(1,1fr);
   height: 150vh;
}
`

const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:900px){
  height: 170vh;
}
`