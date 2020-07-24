import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./checkout.styles.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import CheckOutItem from "./checkout-item.js/CheckOutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Продукт</span>
      </div>
      <div className="header-block">
        <span>Наименование</span>
      </div>
      <div className="header-block">
        <span>Код Товара</span>
      </div>
      <div className="header-block">
        <span>Количество</span>
      </div>
      <div className="header-block">
        <span>Цена</span>
      </div>
      <div className="header-block">
        <span>Удалить</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>Загальна сума : {total.toFixed(2)}грн.</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit cart for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV:123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
