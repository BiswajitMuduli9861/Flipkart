import { useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from "./MidSlide";
import { Box, styled } from '@mui/material'
import {getProducts} from '../../redux/action/productActions';
import {useDispatch, useSelector} from 'react-redux'
import MidSection from './MidSection'


const Component = styled(Box)`
  padding:10px;
  background: #f2f2f2;
`;

const Home = () => {

 const {products} = useSelector((state) => (
    state.getProducts     //this getProducts is a store inside getProducts
  ));
  // console.log(products)


  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(getProducts())  //this getProducts() is a function from productActions.js
  },[dispatch])
  return (
    <>
      <Navbar/>

      <Component>
         <Banner/>
         <MidSlide products={products} title="Deal of the Day" timer={true}/>
         <MidSection/>
         <Slide products={products} title="Discounts for You" timer={false}/>
         <Slide products={products} title="Suggesting Items " timer={false}/>
         <Slide products={products} title="Top Selection" timer={false}/>
         <Slide products={products} title="Recommended Items" timer={false}/>
         <Slide products={products} title="Trending Offers" timer={false}/>
         <Slide products={products} title="Season's top picks" timer={false}/>
         <Slide products={products} title="Top Deals on Accessories" timer={false}/>
      </Component>

    </>
  )
}

export default Home
