import React from 'react'
import orderData from '../Data/Myordersdata';

const Myorders = () => {
    const cardItem = (item) => {
        return (
            <div>
                <div className='container'>
                    <div className="list-group">
                        <a href="/#" className="list-group-item list-group-item-action flex-column align-items-start active">
                            <div className="d-flex w-100 justify-content-between">
                                <small className="mb-1"><b>Order Placed:</b> {item.orderdate}</small>
                                <small><b>Status:</b> {item.status}</small>
                            </div>
                            <hr />
                            <div className="container-fluid">
                                <div className="row" >
                                    <div className="col-sm-4">
                                        <img src={item.thumbnailUrl} height={"200px"} alt="Book1" />
                                    </div>

                                    <div className="col-sm-7" style={{ paddingTop: `40px`, fontSize: `20px` }}>
                                        <span><b>Book Title: </b>{item.title} </span><br />
                                        <span><b>Author Name: </b>{item.authors} </span><br />
                                        <span><b>Book Price: </b>${item.price} </span><br />
                                    </div>
                                </div>
                            </div>
                        </a>
                        <hr />
                    </div>

                </div>
            </div>
        );
    }
  return (
    <>
    <div className="container">
                <div className="row justify-content-around">
                    {orderData.map(cardItem)}
                </div>
            </div>
    </>
  )
}

export default Myorders