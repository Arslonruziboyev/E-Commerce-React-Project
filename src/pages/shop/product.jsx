import React from "react";
import "./shop.css";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Product;
