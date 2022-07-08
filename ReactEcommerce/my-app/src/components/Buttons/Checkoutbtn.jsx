import React from 'react'
import { NavLink } from 'react-router-dom'
const Checkoutbtn = () => {
  return (
    <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
  )
}

export default Checkoutbtn