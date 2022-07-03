import React from 'react'
import { NavLink } from 'react-router-dom';

const Products = (props) => {
    return (
        <NavLink to={`/buynow/${props.value.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
    )
}

export default Products