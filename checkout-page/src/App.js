import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import Payments from './Components/Payments';
import Shipping from './Components/Shipping';
import Sales from './Components/Sales';
import { useState } from 'react';


function App() {
  const [Prodstate,setState]=useState({
    prodname:"Apple iPhone 12-White,128 GB",
  })
  return (
    <>
     <Header prodname={Prodstate.prodname}/>
     <div div className='Main'>
     <ProductDetails prodname={Prodstate.prodname}/>
     <Sales/>
     <Payments/>
     <Shipping/>
     </div>
    </>
  );
}

export default App;