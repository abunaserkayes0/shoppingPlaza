import React from "react";
import "./Cart.css";
const Cart = ({cart}) => {
  return (
    <div>
      <h3>Selected Items:{cart.length}</h3>
    </div>
  );
};

export default Cart;
