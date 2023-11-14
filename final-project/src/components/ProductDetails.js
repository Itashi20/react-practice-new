// import {React,useEffect} from 'react';
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux';
// import { selectedProducts } from '../redux/actions/productActions';
// function ProductDetails(props) {
//     const id=props.match.params.productId
//     console.log(id)
//     //dispatching request to reducer(contains current state of id) and then displaying it
// const dispatch=useDispatch()
// const product=useSelector(state=>state.product)


// const{title,image,price,category,description}=product
// console.log(product)
//     const fetchProducts=async()=>{
//         const response=await axios
//         .get(`https://fakestoreapi.com/products/${id}`);
       
//      dispatch(selectedProducts(response.data));
//     }


// useEffect(()=>{
//     fetchProducts()
// },[id])

//     return (
//         <div className="ui grid container">
//            <div className="ui placeholder segment">
//            <div className="ui two column stackable center aligned grid">
//            <div className="ui vertical divider">
//            AND
//            </div>
//            <div className="middle aligned row">
//            <div className="column 1p">
//             <img src={image} className='ui fluid image' />
           
//            </div>
//            <div className="column rp">
//            <h1>{title}</h1>
//            <h2>
//             <a className="ui teal tag label">${price}</a>
//            </h2>
//            <h3 className='ui brown black header'>{category}</h3>
//            <p>{description}</p>

//            <div className='ui vertical animated button' tabIndex="0">
//         <div className='hiden content'>

//             <i className='shop-icon'></i>

//         </div>
//            </div>
//            </div>
//            </div>
//            </div>
       
//         </div>

//     );
// }

// export default ProductDetails;




import React, {useEffect} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {fetchSelectedProducts,selectedProducts} from '../redux/actions/productActions';
function ProductDetails(props) {
    const id = props.match.params.productId;
console.log(id)
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const {
        title,
        image,
        price,
        category,
        description
    } = product


    // const fetchProducts = async () => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //     dispatch(selectedProducts(response.data))
    // }

    // useEffect(() => {
    //     fetchProducts()
    // }, [id])

    //////////////////////////
    // useEffect(()=>{
    //     dispatch(fetchProducts())
    // },[])
    //console.log(products);


// useEffect(()=>{
//     fetchProducts()
// },[])


useEffect(()=>{
       dispatch(fetchSelectedProducts(id))
    },[id])
    return (
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column 1p">
                            <img src={image}
                                className="ui fluid image"/>
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">
                                {category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>

                                </div>
                                <div className="visible content">
                                    Add To Cart

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProductDetails;
