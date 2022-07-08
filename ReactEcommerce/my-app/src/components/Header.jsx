import React from 'react'
import {NavLink} from 'react-router-dom'
import Cartbtn from './Buttons/Cartbtn'
const Header = () => {
  return (
    <>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">BuyABook</span>
      </NavLink>

      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to="/home" className="nav-link" aria-current="page">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/myorders" className="nav-link">MyOrders</NavLink></li>
        <li className="nav-item"><NavLink to="/cart" className="nav-link">Cart</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About Us</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
      </ul>
      <Cartbtn/>
    </header>
  </div>
    </>
  )
}

export default Header