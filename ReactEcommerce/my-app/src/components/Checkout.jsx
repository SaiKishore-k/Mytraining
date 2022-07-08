import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import BillingAddress from './BillingAddress'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)
    var total = 0;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const itemList = (item) => {
        const tax=2;
        const shippingtax=3;
        total = total + item.price+tax+shippingtax;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }
    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tax (USD)</span>
                                <strong>$2 per each</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Shipping Tax (USD)</span>
                                <strong>$3 per each</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <BillingAddress/>
                </div>
            </div>
        </>
    )
}

export default Checkout