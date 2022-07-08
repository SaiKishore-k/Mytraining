import React from "react";
import { useParams } from "react-router-dom";
import books from "../Data/Data";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions";
import Products from "./BuyFromDescription";

const Detailpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cartbtn, setcartbtn] = useState("Add to Cart");
  const prod_id = useParams();
  const info = books.filter((x) => x.id == prod_id.id);
  const product = info[0];
  console.log(product);
  const dispatch = useDispatch();

  const cartHandler = (product) => {
    if (cartbtn == "Add to Cart") {
      dispatch(addItem(product));
      setcartbtn("Remove from Cart");
    } else {
      dispatch(deleteItem(product));
      setcartbtn("Add to Cart");
    }
  };
  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto">
          <img src={product.thumbnailUrl} alt={product.title} height="400px" />
        </div>
        <div className="col-md-6 d-flex flex-column justfy-content-center">
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <hr />
          <h6 className="my-2">Price : ${product.price}</h6>
          <h6 className="my-2">Author : {product.authors}</h6>
          <h6 className="my-2">PageCount : {product.pageCount}</h6>
          <h6 className="my-2">Isbn : {product.isbn}</h6>
          <p className="lead" style={{backgroundColor:"grey",color:"black"}}>{product.longDescription}</p>
          <button
            onClick={() => cartHandler(product)}
            className="btn btn-outline-prmary my-5"
          >
            {cartbtn}
          </button>
          <Products value={product} />
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
