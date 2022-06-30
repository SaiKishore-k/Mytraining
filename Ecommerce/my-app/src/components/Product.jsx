import React from "react";
import { NavLink } from "react-router-dom";
import data from "./DATA/Data";
const Product = () => {
  const cardItem = (item) => {
    return (
      <div class="card" key={item.id} style={{ width: "18rem" }}>
        <img src={item.thumbnailUrl} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <NavLink to='/product/:id'>
            Book Description
          </NavLink>
        </div>
        <div class="card-body">
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <NavLink
                to={`/product/${item.id}`}
                class="btn btn-outline-primary text-center"
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
      <div className="container">
        <div className="row justify-content-around">{data.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
