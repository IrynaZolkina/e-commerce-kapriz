import React, { Component } from "react";
import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import SliderNew from "./pages/homepage/slider-new/SliderNew";
import Sn from "./pages/homepage/slider-new/Sn";
import Navbar from "./components/navbar-group/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUpPage";
import CheckOutPage from "./pages/checkout-page/CheckOutPage";

import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";
import CollectionPage from "./pages/collection-page/CollectionPage";
import ProductPage from "./pages/product-page/ProductPage";
import NewProduct from "./components/new-product/NewProduct";
import Slider6in18 from "./components/slider-6-un-18-sec/Slider6in18";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
            //,
            //() => {
            //  console.log(this.state);
            //}
          );
          //console.log(this.state);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //my comment
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/shop" component={ShopPage} /> */}
          <Route path="/checkout" component={CheckOutPage} />
          {/* <Route path="/shop/:collectionId" component={ShopPage} /> */}

          <Route
            path="/collection/product/:productId"
            component={ProductPage}
          />
          <Route exact path="/new" component={NewProduct} />
          <Route path="/slidernew" component={SliderNew} />
          {/*  <Route path="/sn" component={Sn} /> */}
          {/*  <Route path="/slider6in18" component={Slider6in18} /> */}

          <Route path="/collection/:collectionId" component={CollectionPage} />
          {/* <Route
            path="/collection/:collectionId"
            render={() => <CollectionPage />}
          /> */}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
