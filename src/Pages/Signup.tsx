import styled from "styled-components";
import Online from "../assets/undraw_online_learning_re_qw08 (1).svg"


const Signup = () => {
  return <>
  <Container>
  <Warpper>
    <Left></Left>
    <Right>
      <img src={Online} alt="loading..." />
    </Right>
  </Warpper>
  </Container>
  </>;
};

export default Signup;


const f = styled.div``

const Right = styled.div`
width: 45%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;

img{
  height: 400px;
}
`

const Left = styled.div`
width: 54%;
height: 78vh;
background-color: #fff;
border-radius: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Warpper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`