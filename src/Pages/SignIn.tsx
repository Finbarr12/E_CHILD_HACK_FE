import styled from "styled-components";
import Online from "../assets/undraw_online_learning_re_qw08 (1).svg"
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { Toaster,toast } from 'sonner';
import "react-toastify/dist/ReactToastify.css";
import { FcApproval } from "react-icons/fc";
import { useState,CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userInfo } from "../components/Global/GlobalState";


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

const navigate = useNavigate();
const dispatch = useDispatch();

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
}).required()

const {register, handleSubmit,formState:{errors}} = useForm({resolver: yupResolver(schema)})

const onSubmit = handleSubmit(async (data: any) =>{
  SetLoading(true)
  await axios
  .post(`https://e-child-be.onrender.com/api/v1/loginchild`, {
    email: data?.email,
    password: data?.password,
  })
  .then((res:any) =>{
    console.log("res", res.data)
    toast("LogIn Successfully",{
      style: {
  background: 'red',
},
icon: <FcApproval size={25}/>

    });
    SetLoading(false)
    dispatch(userInfo(res!.data!.data!))
    navigate("/dashboard")
  })
  .catch((error:any) =>{
    SetLoading(false)
    console.log(error)
  })
})
 
  return <>
  <Container>
  <Warpper>
  <Toaster />
    <Left onSubmit={onSubmit}>
      <h1>Welcome Back!</h1>
     <Box>
        <span>Email</span>
        <input type="text" placeholder="Entre your Email" {...register("email")}/>
        <span style={{color:"red"}}>{errors.email?.message}</span>
      </Box>
  <Box>
        <span>Password</span>
        <input type="text" placeholder="Entre your password" {...register("password")}/>
        <span style={{color:"red"}}>{errors.email?.message}</span>
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
        : <Button type="submit">Signin</Button>
     }
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",marginTop:"10px"}}>
      <span >Don't have an account?</span>
      <Link to={"/signup"} style={{textDecoration:"none",color:"black",marginLeft:"5px", cursor:"pointer"}}>
      <p>Signup</p>
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
width: 46%;
height: 50vh;
background-color: #fff;
border-radius: 40px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding: 20px;

@media screen and (max-width:900px){
  width: 100%;
  height: 70vh;
  margin-top: 20px;
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