

import React, { useEffect, useState } from 'react';
import Cart from '../flowerCart/Cart';
import './FlowerShop.css'


const FlowerShop = () => {
  const  [flowers, setFlowers] =useState([])
  const [addflowers,setAddflowefa]=useState([])
//   console.log(addflowers)

  useEffect(()=>{
      fetch('flowers.json')
      .then(res => res.json())
      .then(data => setFlowers(data))
  },[])
 
  const handleAddToCart =(flower)=>{
     const newFlower =[...addflowers,flower]
     setAddflowefa(newFlower)
  }




    return (
      
            <div className="flower-shop">
                <div className="flower">
                    {
                        flowers.map(flower => <Cart
                        key = {flower.id}
                        flower={flower}
                        handleAddToCart ={handleAddToCart}
                        ></Cart>)
                    }
                </div>
  

               
                <div className="selected-flower">
                  <div className="selected-item">
                  <h3>Selected Flower</h3>
                
                {
                    addflowers.map((item)=>(
                        <h5>Name : {item.name}</h5>
                    ))
                }
                <button className='choose-btn'>CHOOSE 1 fOR ME</button>  <br /><br />
                <button className='choose-btn'>CHOOSE AGAIN</button>
                  </div>
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