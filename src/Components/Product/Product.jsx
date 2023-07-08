import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = ({ product, handelAddToCart }) => {
  const { name, price, img, seller, ratings } = product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <h3>Price:${price}</h3>
        <p>Manufacturer:{seller}</p>
        <p>Rating:{ratings}</p>
      </div>
      <button onClick={() => handelAddToCart(product)} className="btn-cart">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
