

import React, { useEffect, useState } from 'react';
import Cart from '../flowerCart/Cart';
import './FlowerShop.css'


const FlowerShop = () => {
  const  [flowers, setFlowers] =useState([])
  console.log(flowers)

  useEffect(()=>{
      fetch('flowers.json')
      .then(res => res.json())
      .then(data => setFlowers(data))
  },[])

    return (
      
            <div className="flower-shop">
                <div className="flower">
                    {
                        flowers.map(flower => <Cart
                        key = {flower.id}
                        flower={flower}
                        ></Cart>)
                    }
                </div>

                <div className="">
                    <h1>hdhsdks</h1>
                </div>
            </div>
              
              
        
    );
};

export default FlowerShop;



























// import './Cart.css'
// const Cart = (props) => {

//     const {name,url,price,id} = props.flower
  
//     const [flowers, setFlower] = useState([])
//     console.log(flowers)
    
      
//           useEffect(()=>{
//               fetch('flowers.json')
//               .then(res => res.json())
//               .then(data => setFlower(data))
//           },[])




//        <div className="">
//     return (
//         <div className="flower-shop">
// <div className="row-cols-md-3">
//     <div className="">
//     <img className='flower-img' src={url} alt="" />
//     <h6>Name : {name}</h6>
//     </div>
//     <div className="flower-info">
        
//     </div>
// </div>
     
//       </div>  
//     );
// };

// export default Cart;