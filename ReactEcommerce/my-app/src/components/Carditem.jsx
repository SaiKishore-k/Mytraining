import React from "react";
import { NavLink } from "react-router-dom";

const Carditem = (props) => {
  return (
    <div className="card" key={props.id} style={{ width: "18rem",height:"650px"}}>
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
        style={{height:"225px"}}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="lead">
          <b>Price :</b> ${props.price}
        </p>
        <p>
            {props.shortDescription}
        </p>
      </div>
      
        <ul>
          <li className="nav-item text-left">
            <NavLink
              to={`/info/${props.id}`}
              className="text-left"
            >
              Book Description
            </NavLink>
          </li>
        </ul>
      <div className="card-body">
        <ul className="navbar-nav">
          <li className="nav-item text-center">
            <NavLink
              to={`/buynow/${props.id}`}
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

export default Carditem;
