import "./index.css";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductContext from "../ProductContext";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const { cartItems } = useContext(ProductContext);

  const handleActive = () => {
    setActive(!active);
  };

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
        <div className="nav-links">
          <Link to="/" className="link">
            <p className="nav-item">Home</p>
          </Link>
          <Link to="/products" className="link">
            <p className="nav-item">Products</p>
          </Link>
          <Link to="/about" className="link">
            <p>About</p>
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
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: active ? 1 : 0, height: active ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sm-nav-items"
      >
        <Link to="/" className="link">
          <p className="sm-nav">Home</p>
        </Link>
        <Link to="/products" className="link">
          <p className="sm-nav">Products</p>
        </Link>
        <Link to="/about" className="link">
          <p className="sm-nav">About</p>
        </Link>
        <Link to="/cart" className="link">
          <p className="sm-nav">Cart</p>
        </Link>
      </motion.div>
    </>
  );
};

export default NavBar;
