import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Myorders from './components/Myorders';
import { Route, Routes } from 'react-router-dom';
import Detailpage from './components/Detailpage';
import Product from './components/Product';
import Checkout from './components/Checkout';

// import {BrowserRouter, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/products' element={<Product/>}/>
      <Route exact path='/product/:id' element={<Detailpage/>}/>
      {/* <Route exact path='/Myorders' element={<Myorders/>}/> */}
      <Route exact path='/Cart' element={<Cart/>}/>
       <Route exact path='/Checkout' element={<Checkout/>}/> 
    </Routes> 
    </>
  );
}

export default App;
