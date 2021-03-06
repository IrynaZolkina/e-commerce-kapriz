import React from "react";
import { connect } from "react-redux";

import "./cartdropdown.scss";

import CustomButton from "../../custom-button/CustomButton";
//import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/cart/cartActions";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      ПЕРЕЙТИ ДО ЗАМОВЛЕННЯ
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
