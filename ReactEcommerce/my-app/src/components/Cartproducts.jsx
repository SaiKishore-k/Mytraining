import React from "react";
import { deleteItem } from "../redux/actions/index";
import { useDispatch } from "react-redux";
const Cartproducts = (props) => {
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(deleteItem(item));
  };
  return (
    <div className="px-4 my-5 bg-light rounded-3" key={props.id}>
      <div className="container py-4">
        <button
          onClick={() => handleClose(props)}
          className="btn-close float-end"
          aria-label="Close"
        ></button>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src={props.thumbnailUrl}
              alt={props.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{props.title}</h3>
            <p className="lead fw-bold">${props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartproducts;
