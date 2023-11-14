import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent';
import { fetchProducts, setProducts } from '../redux/actions/productActions';
function ProductListing(props) {
   // const products =useSelector(state=>state)
  
    const dispatch=useDispatch()
    // const fetchProducts=async()=>{
    //     const response=await axios
    //     .get('https://fakestoreapi.com/products');
       
    //    dispatch(setProducts(response.data));
    // }

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    //console.log(products);


// useEffect(()=>{
//     fetchProducts()
// },[])

    return (
        <div className='ui grid container'>
          <ProductComponent/> 
        </div>
    );
}

export default ProductListing;