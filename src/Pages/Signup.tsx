import styled from "styled-components";
import Online from "../assets/undraw_online_learning_re_qw08 (1).svg"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const Signup = () => {
  const navigate = useNavigate()

  const schema = yup.object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    classes: yup.string().required(),
    aga: yup.number().positive().integer().required(),
    password: yup.string().required(),
  }).required()

  const {register, handleSubmit,formState:{errors},} = useForm({resolver: yupResolver(schema)})
 
  const onSubmit = handleSubmit(async(data:any) =>{
    console.log(data)
    navigate("/signin")
  })
  return <>
  <Container>
  <Warpper>
    <Left onSubmit={onSubmit}>
      <h1>Get Started</h1>
      <Box>
        <span>Full Name</span>
        <input type="text" placeholder="Entre your full name" {...register("firstName")}/>
        <span>{errors.firstName?.message}</span>
      </Box>
      <BoxHolder>
      <Box1>
        <span>Email</span>
        <input type="text" placeholder=" your Email" {...register("email")}/>
        <span>{errors.email?.message}</span>
      </Box1>
      <Box1>
        <span>Age</span>
        <input type="text" placeholder=" your Age" {...register("aga")}/>
        <span>{errors.aga?.message}</span>
      </Box1>
      </BoxHolder>
  <Box>
        <span>Classes</span>
        <input type="text" placeholder="Entre your Class" {...register("classes")}/>
        <span>{errors.classes?.message}</span>
      </Box>
  <Box>
        <span>Password</span>
        <input type="text" placeholder="Entre your password" {...register("password")}/>
        <span>{errors.password?.message}</span>
      </Box>
      <Button type="submit">Signup</Button>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",marginTop:"10px"}}>
      <span>Already have an account?</span>
      <Link to={"/signin"} style={{textDecoration:"none",marginLeft:"5px"}}>
      <p>Signin</p>
      </Link>
      </div>
    </Left>
    <Right>
      <img src={Online} alt="loading..." />
    </Right>
  </Warpper>
  </Container>
  </>;
};

export default Signup;

const Button = styled.button`
   outline: none;
  width: 95%;
  height: 50px;
  font-size: 20px;
  margin-top: 20px;
  padding-left: 15px;
  background-color: #e22e6e;
  border: #F9F6EF;
  border-radius:30px;
  cursor: pointer;
`

const BoxHolder = styled.div`
display: flex;
align-items : center;

@media screen and (max-width:900px){
  flex-wrap: wrap;
}
`

const Box = styled.div`
display: flex;
flex-direction: column;

span{
  margin-top: 10px;
  margin-left: 20px;
}

input{
  outline: none;
  width: 95%;
  height: 50px;
  margin-top: 10px;
  padding-left: 15px;
  background-color: #F9F6EF;
  border: #F9F6EF;
  border-radius:30px;
}
`
const Box1 = styled.div`
display: flex;
flex-direction: column;

span{
  margin-top: 10px;
  margin-left: 30px;
}

input{
  outline: none;
  width: 270px;
  height: 50px;
  margin-top: 10px;
  padding-left: 10px;
  background-color: #F9F6EF;
  border: #F9F6EF;
  border-radius:30px;
  margin: 10px;
}
`

const Right = styled.div`
width: 45%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;

img{
  height: 400px;
}

@media screen and (max-width:900px){
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    height: 300px;
    margin-left: 90px;
  }
}
`

const Left = styled.div`
width: 48%;
height: 83vh;
background-color: #fff;
border-radius: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 20px;

@media screen and (max-width:900px) {
  width: 100%;
  margin-top: 10px;
  height: 90vh;
}
`

const Warpper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (max-width:900px) {
  flex-wrap: wrap;
}
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`