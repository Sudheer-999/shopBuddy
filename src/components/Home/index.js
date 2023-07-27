import "./index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-con">
      <div className="shop-section">
        <img
          src="https://res.cloudinary.com/djzsbpran/image/upload/v1690356857/123png_ooclvm.png"
          alt="shop"
          className="shop-image"
        />
        <div className="button-section">
          <p className="desc">
            Let's explore brand new products just with one click
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="enter-button"
          >
            <Link to="/products" className="link">
              Enter
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
