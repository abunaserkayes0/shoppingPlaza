import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <div className="menu">
          <a href="/order">Order</a>
          <a href="/order-reviews">Order Review</a>
          <a href="/manage-inventory">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
