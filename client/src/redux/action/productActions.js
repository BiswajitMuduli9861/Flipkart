import axios from 'axios';
import * as actionTypes from '../constants/productConstant';
const URL = 'http://localhost:8000';
export const getProducts = () => async(dispatch) =>{   //middleware in async(dispatch)=>{}
    try {
    //   const  response= await axios.get(`${URL}/av1/products`);
      const  {data} = await axios.get(`${URL}/av1/products`);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload: data})
    } catch (error) { 
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload: error.message})
    }
}

export const getProductDetails = (id) => async(dispatch) =>{
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});

        const  {data} = await axios.get(`${URL}/av1/product/${id}`);
        console.log(data)

        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data})

    } catch (error) {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error.message})
    }
}