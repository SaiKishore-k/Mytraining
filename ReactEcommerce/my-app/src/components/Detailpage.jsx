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
          <h5 className="my-2">Price : ${product.price}</h5>
          <h5 className="my-2">Author : {product.authors}</h5>
          <h5 className="my-2">PageCount : {product.pageCount}</h5>
          <h5 className="my-2">Isbn : {product.isbn}</h5>
          <h5>Book Description :</h5>
          <div>
          <p className="lead" style={{backgroundColor:"grey",color:"black"}}> <br/>{product.longDescription}</p>
          </div>
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
