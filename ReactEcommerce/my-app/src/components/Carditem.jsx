import React from "react";
import { NavLink } from "react-router-dom";

const Carditem = (props) => {
  return (
    <>
      <div
        className="card my-5 py-4"
        key={props.id}
        style={{ width: "18rem", height: "650px" }}
      >
        <img
          src={props.thumbnailUrl}
          className="card-img-top"
          alt={props.title}
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: "40px" }}>
            {props.title}
          </h5>
          <p className="lead">
            <b>Price :</b> ${props.price}
          </p>
          <p style={{ height: "165px" }}>{props.shortDescription}</p>
          <NavLink style={{ width: "100%"}} to={`/info/${props.id}`}>
            Book Description
          </NavLink>
            <div className="card-body" style={{margin:"40px", paddingLeft:"30px"}}>
                <NavLink
                  to={`/buynow/${props.id}`}
                  className="btn btn-primary btn-block"
                >
                  Buy Now
                </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carditem;
