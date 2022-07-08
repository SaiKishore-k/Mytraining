import React from 'react'
import { NavLink } from 'react-router-dom';
import books from '../Data/Data.jsx'
const Products = () => {
    const cardItem = (item) => {
        return (
          <div className="card" key={item.id} style={{ width: "18rem" }}>
            <img src={item.thumbnailUrl} className="card-img-top" alt={item.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{item.title}</h5>
              <p className="lead"><b>price :</b> ${item.price}</p>
            </div>
              <div className="card-body">
              <ul className="navbar-nav">
                <li className="nav-item text-center">
                  <NavLink
                    to={`/info/${item.id}`}
                    className="btn btn-outline-primary text-center"
                  >
                Book Description
                  </NavLink>
                </li>
              </ul>
              </div>
             <div className="card-body">
              <ul className="navbar-nav">
                <li className="nav-item text-center">
                  <NavLink
                    to={`/buynow/${item.id}`}
                    className="btn btn-outline-primary text-center"
                  >
                    Buy Now
                  </NavLink>
                </li>
              </ul>
            </div> 
            </div>
            
        );
      };
      return (
        <div>
            <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Books</h1>
                        <hr />
                    </div>
                </div>
          <div className="container">
            <div className="row justify-content-around">{books.map(cardItem)}</div>
          </div>
        </div>
      );
}

export default Products