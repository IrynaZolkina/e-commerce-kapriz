import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({
  item: { imageUrl1, price, name, quantity, codeTovara },
}) => (
  <div className="cart-item">
    <img src={imageUrl1} alt="item" />
    <div className="item-details">
      <span className="name">{codeTovara}</span>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}{" "}
      </span>
    </div>
  </div>
);

export default CartItem;
