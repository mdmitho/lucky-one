import React from 'react';
import './Cart.css'
const Cart = (props) => {
  
    const {name,id,price,url}=props.flower


    return (
        <div className="flower">
           <div >
             
               <img src={url} alt="" />

               <div className="flower-info">
                   <h6 className='flower-name'>Name : {name}</h6>
                   <p>Price : ${price}</p>
               </div>
               <button className='btn-cart'>Add to cart</button>
           </div>
        </div>
    );
};

export default Cart;