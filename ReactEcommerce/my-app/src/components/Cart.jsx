import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {deleteItem} from '../redux/actions/index'
import EmptyCart from './EmptyCart'
import Checkoutbtn from './Buttons/Checkoutbtn'

const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(deleteItem(item))
    }
    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.thumbnailUrl} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            {state.length === 0 && <EmptyCart/>}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && <Checkoutbtn/>}
        </>
    )
}
export default Cart