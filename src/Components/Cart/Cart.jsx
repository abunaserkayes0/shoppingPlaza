import "./Cart.css";
const Cart = ({cart}) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price*product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div className="cart">
      <h3>Selected Items:{quantity}</h3>
      <h3>Total Price:${total}</h3>
      <h3>Shipping Charge:${shipping}</h3>
      <h3>Tax:${tax.toFixed(2)}</h3>
      <h2>Grand Total:${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
