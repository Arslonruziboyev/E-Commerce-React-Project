import React, { useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useState(ShopContext);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
