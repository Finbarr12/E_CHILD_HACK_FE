import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import styled from "styled-components"
import finbarr from "../../assets/finbarr1.jpg"
import johnbosco from "../../assets/john.jpg"

const MeetourTeam = () => {
  return (
    <>
    <Container id="teams">
        <Warpper>
            <UpHolder>
            <UpText>Meet our Team</UpText>
                <p>E-Child Team </p>
            </UpHolder>
            <DownHolder>
                <Card>
                    <Circle>
                        <img src={finbarr} alt="loading..."/>
                    </Circle>
                    <h1>Ogbonna Finbarr</h1>
                    <span>Full Stack (MERN) Developer</span>
                    <LogoHolder>
                    <Circle1>
                    <a href="https://github.com/Finbarr12">
                    <FaGithub size={20}/>
                    </a>
                    </Circle1>
                    <Circle1>
                    <a href="https://web.facebook.com/finbizz.davinci/">
                    <FaFacebook size={20}/>
                    </a>
                    </Circle1>
                    <Circle1>
                    <a href="https://www.linkedin.com/in/finbarr-ihechukwu-661523253/">
                    <FaLinkedin size={20}/>
                    </a>
                    </Circle1>
                    <Circle1>
                    <a href="https://wa.me/2347077282829">
                    <FaWhatsapp size={20}/>
                    </a>
                    </Circle1>
                    </LogoHolder>
                </Card>
                <Card>
                    <Circle>
                    <img src={johnbosco} alt="loading..." />
                    </Circle>
                    <h1>Okonkwo Onyedika</h1>
                    <span>Full Stack (MERN) Developer</span>
                    <LogoHolder>
                    <Circle1>
                    <a href="https://github.com/johnbosco35">
                    <FaGithub size={20}/>
                    </a>
                    </Circle1>
                    <Circle1>
                    <a href="https://www.facebook.com/mikeroyalboy.jb">
                    <FaFacebook size={20}/>
                    </a>
                    </Circle1>
                    <Circle1>
                    <a href="https://www.linkedin.com/in/johnbosco-okonkwo-7b33502b8">
                    <FaLinkedin size={20}/>
                    </a>
                    </Circle1>
                    <Circle1>
                    <a href="https://wa.me/2348131994772">
                    <FaWhatsapp size={20}/>
                    </a>
                    </Circle1>
                    </LogoHolder>
                </Card>
            </DownHolder>
        </Warpper>
    </Container>
    </>
  )
}

export default MeetourTeam



const LogoHolder = styled.div`
width: 250px;
height: 30px;
display: flex;
align-items: center;
justify-content: space-between;
`


const Circle1 = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

a{
    color: black;
    text-decoration: none;
}
`
const Circle = styled.div`
width: 130px;
height: 130px;
border-radius: 50%;
background-color: gainsboro;
overflow: hidden;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
`

const Card = styled.div`
width: 320px;
height: 400px;
background-color: white;
border-radius: 50px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
`

const UpText = styled.span`
font-size: 20px;

@media screen and (max-width:900px){
  font-size: 30px;
}
`

const DownHolder = styled.div`
width: 100%;
height: 400px;
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
margin-top: 30px;

@media screen and (max-width:900px){
  flex-wrap: wrap;
  height: 240vh;
  margin-top: 20px;
}
`

const UpHolder = styled.div`
width: 30%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 30px;

@media screen and (max-width:900px){
  width: 70%;
}

p{
    font-size: 30px;
    @media screen and (max-width:900px){
    font-size: 19px;
    margin-top: 10px;
    }
}
`

const Warpper = styled.div`
width: 80%;
height: 100%;
background-color: #F5F5F5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width:900px){
  height: 110vh;
}

`

const Container = styled.div`
width: 100%;
height: 130vh;
background: #F5F5F5;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width:900px){
  height: 190vh;
}

`