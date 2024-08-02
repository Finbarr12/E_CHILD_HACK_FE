import styled from "styled-components";
import Online from "../assets/undraw_online_learning_re_qw08 (1).svg"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { Toaster,toast } from 'sonner';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FcApproval } from "react-icons/fc";
import { useState,CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Signup = () => {

  const  override:CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
    width: "20px",
    height: "20px",
    rotate: "90deg"
  };

  const [loading, SetLoading] = useState<boolean>(false)
  


  const navigate = useNavigate()

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    class: yup.string().required(),
    age: yup.string().required(),
    password: yup.string().required(),
  }).required()

  const {register, handleSubmit,formState:{errors},} = useForm({resolver: yupResolver(schema)})
 
  const onSubmit = handleSubmit(async(data:any) =>{
    SetLoading(true)
    await axios
    .post(`https://e-child-be.onrender.com/api/v1/registerchild`,{
        name: data?.name,
        email: data?.email,
        Class: data?.class,
        age: data?.age,
        password: data?.password,
    })
    .then(() =>{
      toast("User created Successfully",{
        style: {
    background: 'red',
  },
  icon: <FcApproval size={25}/>
  
      });
      SetLoading(false)
      navigate("/signin");
    })
    .catch(() =>{
      SetLoading(false)
      toast("Error occur");
    })
  })
  return <>
  <Container>
  <Warpper>
  <Toaster />
    <Left onSubmit={onSubmit}>
      <h1>Get Started</h1>
      <Box>
        <span>Full Name</span>
        <input type="text" placeholder="Entre your full name" {...register("name")}/>
        <span>{errors.name?.message}</span>
      </Box>
      <BoxHolder>
      <Box1>
        <span>Email</span>
        <input type="text" placeholder=" your Email" {...register("email")}/>
        <span>{errors.email?.message}</span>
      </Box1>
      <Box1>
        <span>Age</span>
        <input type="text" placeholder=" your Age" {...register("age")}/>
        <span>{errors.age?.message}</span>
      </Box1>
      </BoxHolder>
  <Box>
        <span>Class</span>
        <input type="text" placeholder="Entre your Class" {...register("class")}/>
        <span>{errors.class?.message}</span>
      </Box>
  <Box>
        <span>Password</span>
        <input type="text" placeholder="Entre your password" {...register("password")}/>
        <span>{errors.password?.message}</span>
      </Box>
     {
     loading ?  <Button type="submit">
        <PulseLoader

          color={"white"}
          loading={loading}
          cssOverride={override}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </Button>
        : <Button type="submit">Signup</Button>
     }
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

const Left = styled.form`
width: 48%;
height: 83vh;
border-radius: 40px;
box-shadow: hsla(0, 0%, 0%, 0.24) 0px 3px 8px;
padding: 20px;

@media screen and (max-width:900px) {
  width: 100%;
  margin-top: 10px;
  height: 130vh;
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