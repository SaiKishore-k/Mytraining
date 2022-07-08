import React from "react";
import Carditem from "./Carditem.jsx";
import books from "../Data/Data.jsx";

const Products = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Books</h1>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {books.map((e) => {
            return (
              <Carditem
                id={e.id}
                title={e.title}
                thumbnailUrl={e.thumbnailUrl}
                price={e.price}
                shortDescription={e.shortDescription}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
