

import React, { useEffect, useState } from 'react';
import Cart from '../flowerCart/Cart';
import './FlowerShop.css'


const FlowerShop = () => {
  const  [flowers, setFlowers] =useState([])
  const [addflowers,setAddflowefa]=useState([])
 

  useEffect(()=>{
      fetch('flowers.json')
      .then(res => res.json())
      .then(data => setFlowers(data))
  },[])
 
  const handleAddToCart =(flower)=>{
    let newFlower =[]
  
    const exits = addflowers.find(flowers=> flowers.id === flower.id)
    if(!exits){
      flower.quantity= 1
      newFlower=[...addflowers,flower]
    }
    else{
      const rests = addflowers.filter(flowers=>flowers.id !== flower.id)
      exits.quantity =exits.quantity +1
      newFlower=[...rests,exits]
     }
    
     setAddflowefa(newFlower)
     
     
  }

  const handleChooseForMe =(addflowers) =>{
console.log(addflowers)


   for(const shoocseforme of addflowers){


    console.log(shoocseforme);
   }
    // console.log(addflowers)

    // let addChooseForMe=[]
    //      const forme= addflowers.length
    //    const chooseforme =addflowers.find(flower => flower>4)
      
    //    serChoocseforme(chooseforme)

  }

  const handleChooseAgain = () => {
    
    const ChooseAgain = document.getElementById('selected-item')
    ChooseAgain.innerHTML=''
    
    window.setTimeout( function() {
      window.location.reload();
    }, );

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
                
                <div id='selected-item'>

                  
                {
                    addflowers.map((item)=>(
                        <h5><img className='cart-img' src={item.url} alt="" />  {item.name}</h5>
                    ))
                }
                </div>
                
                <button onClick={()=>handleChooseForMe(addflowers)} className='choose-btn'>CHOOSE 1 fOR ME</button>  <br /><br />
                <button onClick={()=>handleChooseAgain()} className='choose-btn'>CHOOSE AGAIN</button>
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