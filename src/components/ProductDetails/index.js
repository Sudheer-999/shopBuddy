import "./index.css";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const { details } = props;
  const { title, id, image, price } = details;
  return (
    <Link to={`/products/${id}`} className="link">
      <li>
        <div className="product-card">
          <img src={image} alt={title} className="product-image" />
          <p className="title">{title}</p>
          <p className="price">$ {price}</p>
        </div>
      </li>
    </Link>
  );
};

export default ProductDetails;
