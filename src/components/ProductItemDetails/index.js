import "./index.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import ProductContext from "../ProductContext";

const ProductItemDetails = () => {
  const { addToCart } = useContext(ProductContext);

  const [isLoading, setIsLoading] = useState(false);

  const [itemCount, setItemCount] = useState(0);

  const { id } = useParams();

  const [data, setData] = useState({});

  const increaseCount = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (itemCount > 0) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const url = `https://fakestoreapi.com/products/${id}`;

      const response = await fetch(url);

      const data = await response.json();

      setData(data);
      setIsLoading(false);
    };
    getData();
  }, [id]);

  const { description, title, price, image } = data;

  return (
    <div className="item-details-container">
      {isLoading ? (
        <div className="details-loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="details-image-con">
            <img src={image} className="product-details-image" alt={title} />
            <p className="item-price">{price}</p>
          </div>
          <div className="item-description-con">
            <h1 className="item-title">{title}</h1>
            <p className="item-description">{description}</p>
            <div className="quantity">
              <button
                type="button"
                className="quantity-button"
                onClick={increaseCount}
              >
                +
              </button>
              <p className="items-count-text">{itemCount}</p>
              <button
                type="button"
                className="quantity-button"
                onClick={decreaseCount}
              >
                -
              </button>
            </div>
            <button type="button" onClick={addToCart} className="buy-button">
              ADD TO CART
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductItemDetails;
