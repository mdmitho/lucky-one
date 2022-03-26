
import './App.css';
import FlowerShop from './components/flowerShop/FlowerShop';
import Qusan from './components/qusan/Qusan';


function App() {




  return (
    <div className="container">
      <div className="text-center mt-5 mb-5 ">
        <h1>Flower shope</h1>
        <h5 className='mt-3'>আপনার পছন্দের ফুল কিনুন</h5>
      </div>
      <FlowerShop></FlowerShop>
     <Qusan></Qusan>
    </div>


  );
}


export default App;
