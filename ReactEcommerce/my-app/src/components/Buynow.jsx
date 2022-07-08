import React from "react";
import books from "../Data/Data";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BillingAddress from "./BillingAddress";
const Buynow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prod_id = useParams();
  const info = books.filter((x) => x.id == prod_id.id);
  const product = info[0];
  console.log(product);

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Payment Infomation</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Title</span>
                <strong>{product.title}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Item Price (USD)</span>
                <strong>${product.price}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tax</span>
                <strong>$2</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping Charge</span>
                <strong>$3</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total USD</span>
                <strong>${product.price + 5}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <BillingAddress />
        </div>
      </div>
    </>
  );
};

export default Buynow;
