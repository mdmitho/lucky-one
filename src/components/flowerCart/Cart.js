import React from 'react';

const Cart = (props) => {
  
    const {name,id,price,url}=props.flower


    return (
        <div>
           <div className="flower">
               <img src={url} alt="" />
               <div className=""></div>
           </div>
        </div>
    );
};

export default Cart;