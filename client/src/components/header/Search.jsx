import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../redux/action/productActions'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
const SearchContainer = styled(Box)`
    background: #fff;
    width:78%;
    border-radius:5px;
    margin:5px auto 15px 10px;
    display:flex;
`;
const InputSearchBase = styled(InputBase)`
    width:100%;
    
    & input::placeholder{
        padding-left:30px;
        font-size:16px;
    }
`;
const SearchIconWrapper = styled(Box)`
    color:blue;
    font-size:u9nset;
    padding:5px;
`;
const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: #000;
    margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState();
  const {products} = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  console.log(products)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);

  const getText = (text) =>{
      setText(text)
  }


  return (
    <>
    <SearchContainer>

     <InputSearchBase 
     placeholder='Search for product, brands and more'
     onChange={(e)=> getText(e.target.value)}
       value={text}  //click search bar menu then serach bar empty
     />
     <SearchIconWrapper>

     <SearchOutlinedIcon/>
     </SearchIconWrapper>
     {
          text && 
              <ListWrapper>
                {
                  products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(                 //channel- codeforInterview 7/9 time 47. 
                    <ListItem>
                      <Link
                       to={`product/${product.id}`}
                       onClick={()=>setText('')}
                       style={{textDecoration:'none', color:'inherit'}}
                       >
                       {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }
              </ListWrapper>
     }
    </SearchContainer>
    </>
  )
}

export default Search
