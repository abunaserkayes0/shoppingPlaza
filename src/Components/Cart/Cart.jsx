import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="cart">
      <h3>Selected Items:{cart.length}</h3>
      <h3>Total Price:${total}</h3>
      <h3>Shipping Charge:${shipping}</h3>
      <h3>Tax:${tax.toFixed(2)}</h3>
      <h2>Grand Total:${parseFloat(grandTotal.toFixed(3))}</h2>
    </div>
  );
};

export default Cart;
