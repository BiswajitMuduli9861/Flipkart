import {Badge, Box, Button,Typography, styled } from '@mui/material'
import React from 'react'
import { useState,useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/DataProvider';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
//components 
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    gap:'30px',
    margin:'-13px 3% 0 5px',
    width:'70%',
    '& > button, & > p, & > div': {
        marginRight:'40px',
        fontSize:'14px',
        
    },
    [theme.breakpoints.down('md')] :{
        display:'block',
    }
}));
const Container = styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block',
    }

}));
const LoginButton = styled(Button)`
    color:#2874f0;
    background:#fff;
    text-transform:none;
    padding:5px 40px;
    box-shadow:none;
    font-weight:600;
    border-radius:2px;
    height:32px;

`;
const CustomButtons = () => {

    const {cartItems} = useSelector((state=> state.cart))
    const [open, setOpen] =useState(false);

    const {account, setAccount} = useContext(DataContext);

    const openDialog =()=>{
        setOpen(true);
    }
  return (
    <>
     <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount}/> :
        <LoginButton variant="contained" onClick={()=>{openDialog()}}>Login</LoginButton>
        }
        <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container style={{marginTop:"3px"}} to='/cart'>
            <Badge badgeContent={cartItems.length} color="secondary">

            <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>

            <LoginDialog open={open} setOpen={setOpen}/>

     </Wrapper>

    </>
  )
}

export default CustomButtons
