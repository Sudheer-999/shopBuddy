import ProductDetails from "../ProductDetails";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

import "./index.css";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    setProducts(data);
    setIsLoading(false);
  };
  return (
    <div className="products-bg">
      {isLoading ? (
        <div className="spin">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <ul className="product-list">
          {products.map((eachItem) => (
            <ProductDetails details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
