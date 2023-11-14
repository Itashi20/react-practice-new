import { ActionTypes } from "../constants/action-type"
import axios from 'axios';
import fakeStoreApi from "../../apis/fakeStoreApi";
// export const fetchProducts=async(dispatch)=>{

//    // const response =await axios.get("/products") //api calll restful api
//     // console.log(response);
//     return async function(dispatch,getState){
//         const response=await fakeStoreApi('/products')
//     dispatch({
//         type:ActionTypes.FETCH_PRODUCTS,
//         payload:response.data
//     }
//     )
// }
// }

export const fetchProducts=()=>async(dispatch)=>{
    const response=await fakeStoreApi('/products')
    dispatch({type:ActionTypes.FETCH_PRODUCTS,
        payload:response.data})
}

export const fetchSelectedProducts=(id)=>async(dispatch)=>{
const response=await fakeStoreApi(`/products/${id}`);
dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})

}

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

// export const fetchProduct=(id)=>async(dispatch)=>{
//     const response=await fakeStoreApi(`/products/${id}`)
//     dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
// }