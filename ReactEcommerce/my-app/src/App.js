
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Myorders from './pages/Myorders';
import About from './pages/About';
import Products from './components/Products';
import Detailpage from './components/Detailpage';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import Buynow from './components/Buynow';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/info/:id' element={<Detailpage/>}/>
      <Route exact path='/buynow/:id' element={<Buynow/>}/>
      <Route exact path='/myorders' element={<Myorders/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/checkout' element={<Checkout/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
