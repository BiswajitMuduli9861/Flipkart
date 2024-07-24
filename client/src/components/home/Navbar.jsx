import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import {navData} from '../constants/data'

const Component = styled(Box)(({theme})=>({
    display:'flex',
    margin:'55px 130px 0px 130px',
    justifyContent:'space-between',
    overflow:'overlay',
    [theme.breakpoints.down('lg')]:{
      margin:0,
    }
  }));
const Container = styled(Box)`
  padding:12px 8px;
  text-align:center;
`;
const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherity;
`;
const Navbar = () => {
  return (
    <>
    <Box style={{backgroundColor: '#fff',}}>

      <Component>
         {
           navData.map((val,index)=>(
             <Container>
                <img src={val.url} alt="nav" style={{width:64}}/>
                <Text>{val.text}</Text>
              </Container>
          ))
        }
      </Component>
        </Box>
    </>
  )
}

export default Navbar
