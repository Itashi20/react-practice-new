// import React from 'react';
// import {useSelector} from 'react-redux'
// function ProductComponent(props) {
//     const product =useSelector(state=>state.allProducts.products)
//     const{id,title}= product[0]
//     return (
//         <div className='four column wide'>
//             <div className='ui link cards'>
//             <div className='card'>
//             <div className='image'></div>
//             <div className='content'>
//             <div className='header'>
//            {title}
//            </div>

//         </div>
//            </div>

//         </div>
//            </div>

//     );
// }

// export default ProductComponent;

// import React from 'react';
// import { useSelector } from 'react-redux';
// function ProductComponent(props) {
//    const products=useSelector(state=>state.allProducts.products);
//    // const {id,title}=product[0];
//    const renderList=products.map((product)=>{

//    const{id,title,image,price,category}=product
//    console.log(product)
//     return (
//         <div className='four wide column' key={id}>
//             <div className='ui link cards'>
//             <div className='card'>
//                 <div className='image'>
//                     <img src={image}/>
//                 </div>
//                 <div className='content'>
//                     <div className='header'>{title}</div>
//                     <div className='meta-price'>${price}</div>
//                     <div className='meta'>{category}</div>

//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// })
// return(
//     <>{renderList}</>
// )
// }

// export default ProductComponent;

import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
function ProductComponent(props) {
    const product=useSelector(state=>state.allProducts.products);
    
    console.log(product);
    const renderList=product.map((p)=>{
        const {id,title,image,price,category}=p;
     
        return (
            <div className='four wide column' key={id}>
                <NavLink to={`/product/${id}`}>
                <div className='ui link cards'>
                <div className='card'>
                    <div className='image'>
                        <img src={image}></img>
                    </div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                        <div className='meta price'>${price}</div>
                        <div className='meta'>{category}</div>
                    </div>
                </div>
                </div>
                </NavLink>
            </div>
        );
        
    })

    return(
        <>{renderList}</>
    )

    
   
}

export default ProductComponent;