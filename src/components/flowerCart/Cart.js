import React from 'react';
import './Cart.css'



const Cart = ({flower,handleAddToCart}) => {
  
    const {name,price,url}=flower;


    return (
        <div className="flower">
           <div >
             
               <img src={url} alt="" />

               <div className="flower-info">
                   <h6 className='flower-name'>Name : {name}</h6>
                   <p>Price : ${price}</p>
               </div>
               <button className='btn-cart'
               onClick={()=> handleAddToCart(flower)}
               >Add to cart</button>
           </div>
        </div>
    );
};

export default Cart;