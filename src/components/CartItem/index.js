import "./index.css";

const CartItem = (props) => {
  const { itemDetails, onRemove } = props;

  const { title, image, id } = itemDetails;

  const onRemoveCartItem = () => {
    onRemove(id);
  };

  return (
    <li className="cart-item-card">
      <div className="card-left">
        <img src={image} alt="cart item" className="cart-image" />
        <p className="cart-item-name">{title}</p>
      </div>
      <button
        type="button"
        className="remove-button"
        onClick={onRemoveCartItem}
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
