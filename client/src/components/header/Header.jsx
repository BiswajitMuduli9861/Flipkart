import React, { useState } from 'react'
import {AppBar, Toolbar, Box, Typography, styled,Drawer,List,ListItem, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
 const StyleHeader = styled(AppBar)`
    background-color:#2874f0;
    height:55px;
    
 `;


 const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    width:50%;
    display:flex;
 `;
 const SubHeading= styled(Typography)`
    font-size:10px;
    font-style: italic;
    text-align:center;
    
   
 `;
 const PlusImage = styled('img')({

 });
 const CustomButtonWrapper = styled(Box)(({theme})=>({

    width:'50%',
    [theme.breakpoints.down('md')] :{
      display : 'none',
    }
   }));

const MenuButton = styled(IconButton)(({theme})=>({
      display: 'none',
      [theme.breakpoints.down("md")] :{
         display: 'block',
      }
}));

const Header = () => {
   const [open, setOpen] = useState(false);

   const handleOpen = () =>{
      setOpen(true);
   }
   const handleClose = () =>{
      setOpen(false);
   }
   const list = () =>(
      <Box style={{width:200}} onClick={handleClose}>
         <List>
            <ListItem button>
                  <CustomButtons/>
            </ListItem>
         </List>
      </Box>
   )


    const logoUrl ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


  return (
    <>
      <StyleHeader>
         <Toolbar>
            <MenuButton color="inherit" onClick={handleOpen}>
               <MenuIcon/>
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
                  {list()}
            </Drawer>

            <Component>
               <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                <Box style={{display:"flex",flexDirection:"column"}}>
               <Typography style={{fontStyle:"italic",fontWeight:"700",fontSize:"20px",positon:"absolute",textAlign:"center",marginTop:-3}}>Flipkart</Typography>
                    <SubHeading style={{marginTop:"-7px"}}>Explore&nbsp;
                         <Box component="span" style={{color:"#FFE500"}}>Plus</Box>
                         {/* <PlusImage src={subURL} alt="icon" /> */}
                         <Typography component="span" style={{fontWeight:"600", color:"#FFE500", marginLeft:"3px"}}>+</Typography>
                    </SubHeading>
                </Box>
                </Link>
                    <Search/>
            </Component>
            <CustomButtonWrapper>
               <CustomButtons/>

            </CustomButtonWrapper>
        </Toolbar>
      </StyleHeader>
      
    </>
  )
}

export default Header
