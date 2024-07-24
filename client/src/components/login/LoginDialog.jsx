import React, { useState,useContext } from 'react'
import {Box, Button, Dialog, TextField, Typography,styled} from '@mui/material'
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
const Image = styled(Box)`
    background:#2874f0 url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png") no-repeat center 85%;
    height:86%;
    width:28%;
    padding:45px 35px;
    & > p, & > h5{
      color: #ffffff;
      font-weight:600;
    }
`;
const Component = styled(Box)`
    height:70vh;
    width:90vh;
    scroll:no-scroll;
`;
const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div, button,p{
      margin-top:20px;
    }
`;
const LoginButoon = styled(Button)`
      text-transform:none;
      background: #FB641B;
      color:#fff;
      height:48px;
      border-radius:2px;
`;
const RequestOTP = styled(Button)`
      text-transform:none;
      background: #fff;
      color:#2874f0;
      height:48px;
      border-radius:2px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;
const Text = styled(Typography)`
    font-size: 12px;
    color:#878787;
`;
const CreateAccount = styled(Typography)`
   font-size:14px;
   text-align:center;
   color:#2874f0;
   font-weight:600;
   cursor:pointer;
`;
const Error = styled(Typography)`
   font-size:10px;
   color: #ff6161;
   line-height: 0;
   margin-top: 10px;
   font-weight: 600;
`;

const LoginDialog = (props) => {  //direct access props value with out props const LoginDialog =({open,setOpen}=>{  })
  
  const accountInitialValues ={
    login:{
      view:"login",
      heading:"Login",
      subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
      view:"signup",
      heading:"Looks like you're new here!",
      subHeading:"Sign up with your mobile number to get started"
    }
  };

  const signupInitialValues ={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
  }

  const loginInitialValues ={
    username:'',
    password:''
  }
  
  const [account, toggledAccount] = useState(accountInitialValues.login);

  const [signup, setSignup] = useState(signupInitialValues);

  const [login, setLogin] =useState(loginInitialValues);

  const [error, setError] = useState(false);

  const {setAccount} = useContext(DataContext);

  const handleAccount = () =>{
    toggledAccount(accountInitialValues.signup);
  }
  
  const handleClose = ()=>{
      props.setOpen(false);
      toggledAccount(accountInitialValues.login);
      setError(false);
  }

  const onInputChange =(e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);

    setSignup({...signup, [e.target.name]: e.target.value})
    // console.log(signup);
  }

  const signupUser = async() =>{
    const response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
    
  }

  const onValueChange =(e)=>{
    setLogin({...login,[e.target.name]: e.target.value});
  }
  
  const loginUser =async()=>{
   const response = await authenticateLogin(login);
   console.log(response);
   if(response.status === 200){
    handleClose();
    setAccount(response.data.data.firstname);  
  }else{
     setError(true);

   }
  }
  return (
    <>
      <Dialog open={props.open} onClose={handleClose} PaperProps={{sx: {maxWidth:"unset"}}}>
            <Component>
              <Box style={{display:"flex", height:"100%"}}>
              <Image>
                <Typography variant='h5'>{account.heading}</Typography>
                <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
              </Image>
              { account.view === "login" ?

                <Wrapper>
                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='username' label="Enter username"/>

                {error && <Error>Please enter valid username and password</Error>}
                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='password' label="Enter Password"/>
                <Text>By continuing, you agree to FlipKart's Terms of Use and Privacy Police.</Text>
                <LoginButoon onClick={loginUser}>Login</LoginButoon>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount  onClick={handleAccount}>New to FlipKart? Create an account</CreateAccount>
              </Wrapper>
              :
                <Wrapper>
                <TextField variant="standard" onChange={(e)=>{onInputChange(e)}} name='firstname' label="Enter Firstname"/>
                <TextField variant="standard" onChange={(e)=>{onInputChange(e)}} name='lastname' label="Enter Lastname"/>
                <TextField variant="standard" onChange={(e)=>{onInputChange(e)}} name='username' label="Enter Username"/>
                <TextField variant="standard" onChange={(e)=>{onInputChange(e)}} name='email' label="Enter Email"/>
                <TextField variant="standard" onChange={(e)=>{onInputChange(e)}} name='password' label="Enter Password"/>
                <TextField variant="standard" onChange={(e)=>{onInputChange(e)}} name='phone' label="Enter Phone"/>
                
                <LoginButoon onClick={signupUser}>Continue</LoginButoon>
                
              </Wrapper>
              }
              </Box>
            </Component>
      </Dialog>
    </>
  )
} 

export default LoginDialog
