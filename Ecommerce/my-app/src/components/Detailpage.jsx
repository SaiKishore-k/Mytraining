import React from 'react'
import {useParams} from 'react-router-dom'
import data from './DATA/Data';
import { useState } from 'react';
import {NavLink} from 'react'
import { useDispatch } from 'react-redux';
import { addItem,deleteItem } from '../redux/actions';

const Detailpage = () => {
    const [cartbtn , setcartbtn]=useState("Add to Cart")
    const prod_id=useParams();
    const info = data.filter(x=>x.id == prod_id.id);
    const product = info[0];
    console.log(product);
    const dispatch =useDispatch();

    const checkoutbutton=()=>{
        return(
          <div className="container">
                    <div className="row">
                        <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Checkout</NavLink>
                    </div>
                </div>
        );
      }
    const cartHandler=(product)=>{
        if(cartbtn == "Add to Cart"){
            dispatch(addItem(product))
            setcartbtn("Remove from Cart");
        }
        else{
            dispatch(deleteItem(product))
            setcartbtn("Add to Cart");
        }
    }
  return (
    <div className='container my-5 py-3'>
        <div className='row'>
            <div className='col-md-6 d-flex justify-content-center mx-auto'>
                <img src={product.thumbnailUrl} alt={product.title}height="400px"/> 
            </div>
            <div className='col-md-6 d-flex flex-column justfy-content-center'>
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h6 className='my-2'>price : ${product.price}</h6>
                <h6 className='my-2'>Author : {product.authors}</h6>
                <h6 className='my-2'>pageCount : {product.pageCount}</h6>
                <h6 className='my-2'>isbn : {product.isbn}</h6>
                <p className='lead'>{product.longDescription}</p>
            <button onClick={()=>cartHandler(product)} className='btn btn-outline-prmary my-5'>{cartbtn}</button>
            

            </div>
        </div>
    </div>
  )
}

export default Detailpage