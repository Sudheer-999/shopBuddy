import "./index.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import ProductContext from "../ProductContext";

const ProductItemDetails = () => {
  const { addToCart, setCartItemsList, cartItemsList } = useContext(
    ProductContext
  );

  const [isLoading, setIsLoading] = useState(false);

  const [isAdded, setIsAdded] = useState(false);

  const { id } = useParams();

  const [data, setData] = useState({});

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

  const onAddToCart = () => {
    if (!cartItemsList.some((item) => item.id === data.id)) {
      setCartItemsList([...cartItemsList, data]);
    }
    addToCart();
    setIsAdded(true);
  };

  const disableSwitch = isAdded ? "disable" : "";

  return (
    <div className="item-details-container">
      {isLoading ? (
        <div className="details-loader">
          <ThreeDots
            height="70"
            width="70"
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
            <p className="item-price">$ {price}</p>
          </div>
          <div className="item-description-con">
            <h1 className="item-title">{title}</h1>
            <p className="item-description">{description}</p>

            <button
              type="button"
              onClick={onAddToCart}
              className={`buy-button ${disableSwitch}`}
            >
              ADD TO CART
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductItemDetails;
