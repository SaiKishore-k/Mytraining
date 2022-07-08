import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "../components/EmptyCart";
import Checkoutbtn from "../components/Buttons/Checkoutbtn";
import Cartproducts from "../components/Cartproducts";

const Cart = () => {
  const state = useSelector((state) => state.addItem);

  return (
    <>
      {state.length === 0 && <EmptyCart />}
      {state.length !== 0 &&
        state.map((e) => {
          return (
            <Cartproducts
              id={e.id}
              title={e.title}
              thumbnailUrl={e.thumbnailUrl}
              price={e.price}
            />
          );
        })}
      {state.length !== 0 && <Checkoutbtn />}
    </>
  );
};
export default Cart;
