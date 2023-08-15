import "./index.css";
import ProductContext from "../ProductContext";
import { useContext } from "react";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItemsList,
    cartItems,
    setCartItemsList,
    removeFromCart,
  } = useContext(ProductContext);

  const onRemoveBtn = (id) => {
    const filteredItems = cartItemsList.filter((each) => each.id !== id);
    setCartItemsList(filteredItems);
    removeFromCart();
  };

  const totalPrice = cartItemsList.reduce((acc, item) => acc + item.price, 0);

  console.log(totalPrice);

  console.log(cartItemsList);
  return (
    <div className="cart-bg">
      {cartItemsList.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://res.cloudinary.com/djzsbpran/image/upload/v1692099928/5906_uzblfk.png"
            alt="empty"
            className="empty-cart-img"
          />
          <p className="cart-empty-text">Your Cart is Empty</p>
          <p>
            <Link to="/products">click here</Link> to explore the products
          </p>
        </div>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItemsList.map((eachItem) => (
              <CartItem
                itemDetails={eachItem}
                key={eachItem.id}
                onRemove={onRemoveBtn}
              />
            ))}
          </ul>
          <div className="price-details">
            <p className="price-head">Price Details</p>

            <p className="total-items">
              No of Items : <span>{cartItems}</span>
            </p>
            <p>
              Total Price : <span>$ {totalPrice}</span>
            </p>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
