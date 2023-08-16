import "./index.css";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState, useContext } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductContext from "../ProductContext";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const { cartItems } = useContext(ProductContext);

  const handleActive = () => {
    setActive(!active);
  };

  const activeClass = active ? "active" : "";

  return (
    <>
      <div className="nav-container">
        <Link to="/" className="link">
          <img
            src="https://res.cloudinary.com/djzsbpran/image/upload/v1690283544/shopbuddy_logo_v4qrlt.png"
            alt="logo"
            className="logo-image"
          />
        </Link>
        <div className={`nav-links ${activeClass}`}>
          <Link to="/" className="link">
            <p className="nav-item">Home</p>
          </Link>
          <Link to="/products" className="link">
            <p className="nav-item">Products</p>
          </Link>
          <Link to="/about" className="link">
            <p className="nav-item">About</p>
          </Link>
          <Link to="/cart" className="link">
            <p className="nav-item cart-nav">Cart</p>
          </Link>
          <Link to="/cart" className="link">
            <div className="cart-container">
              <AiOutlineShoppingCart className="cart-icon" />
              <span className="cart-items-count">{cartItems}</span>
            </div>
          </Link>
        </div>
        <HiMenu onClick={handleActive} className="menu-icon" />
      </div>
    </>
  );
};

export default NavBar;
