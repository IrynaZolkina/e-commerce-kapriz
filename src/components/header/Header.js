import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/FirebaseUtils";
import { connect } from "react-redux";

import "./header.styles.scss";

//import { ReactComponent as Logo } from "../../assets/crown.svg";
//import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart/cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart/cart-icon/CartIcon";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <div>
        <Link
          className="logo-kapriz"
          to="/"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Flogo2.jpg?alt=media&token=49259f9e-e01b-4215-a9c8-795681ab1e49')`,
          }}
        ></Link>
      </div>
      {/*<div className="main-title">
        <Link to="/">
          <span>К</span>априз
        </Link>*/}
      <div className="main-title2">
        <Link to="/">КАПРИЗ</Link>
      </div>
      <div className="options">
        {/* <Link className="option" to="/shop">
          SHOP
        </Link> */}
        <Link className="option" to="/collection/items">
          ALL
        </Link>
        {/*  <Link className="option" to="/application">
          For
        </Link> */}
        {/*  {currentUser && currentUser.email === "1234@hotmail.com" && ( */}
        <Link className="option" to="/new">
          New Product
        </Link>
        {/* )} */}
        {/* <Link className="option" to="/sn">
          SN
        </Link>
       
        <Link className="option" to="/slidernew">
          SliderNew
        </Link> */}
        {/*  <Link className="option" to="/slider6in18">
          SliderNew
        </Link> */}
        {/*  <Link className="option" to="/new">
          New Product
        </Link> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
            {/* <div className="options-1">
              {currentUser.displayName} - Добро пожаловать
            </div> */}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}{" "}
        {hidden ? null : <CartDropdown />}
        {currentUser ? (
          (console.log("currentUser", currentUser.currentUser.email),
          (
            <div className="options-1">
              {currentUser.currentUser.displayName} - Добро пожаловать
            </div>
          ))
        ) : (
          <div className="options-1"></div>
        )}
        <CartIcon />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
//export default Header;
