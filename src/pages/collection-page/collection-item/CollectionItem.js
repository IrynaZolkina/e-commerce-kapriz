import React from "react";

import "./collection-item.styles.scss";
import CustomButtonAdopted from "../../../components/custom-button-adopted/CustomButtonAdopted";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cartActions";

import { withRouter, NavLink } from "react-router-dom";
import { Component } from "react";
import { setScrollPosition } from "../../../redux/scrollposition/scrollActions";
//import ProductPage from "../../product-page/ProductPage";

class CollectionItem extends Component {
  componentDidMount() {
    this.handleScrollPosition();
    console.log("componentDidMount", this.props.scrollPosition);
    //window.scrollTo(0, 2818.181640625);
  }

  // handle scroll position after content load
  handleScrollPosition = () => {
    //const scrollPosition = sessionStorage.getItem("scrollPosition");
    const scrollPosition = this.props.scrollPosition;

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      //sessionStorage.removeItem("scrollPosition");
    }
  };

  // store position in sessionStorage
  handleClick = (e) => {
    //sessionStorage.setItem("scrollPosition", window.pageYOffset);
    this.props.setScrollPosition(window.pageYOffset);
  };
  buttonAddItemToCartFromCollection = (element) => {
    let item = {
      id: element.id,
      discountPrice: element.discountPrice,
      price: element.price,
      name: element.title,
      imageUrl1: element.imageUrl1,
      codeTovara: element.codeTovara,
    };
    console.log("buttonAddITEMToCart***item", { item });
    addItem(item);
  };
  render() {
    const { item, addItem } = this.props;
    const {
      id,
      price,
      title,
      titleCode,
      discountPrice,
      imageUrl1,
      imageUrl2,
      novinka,
    } = item;

    const string11 = titleCode.substring(0, 2);
    const string111 = title.substring(0, string11);

    const string22 = titleCode.substring(2, 4);
    const string222 = title.substring(
      parseInt(string11) + 1,
      parseInt(string11) + 1 + parseInt(string22)
    );

    const string33 = titleCode.substring(4, 6);
    const string333 = title.substring(
      parseInt(string11) + parseInt(string22) + 2,
      parseInt(string11) + parseInt(string22) + parseInt(string33) + 2
    );

    const string44 = titleCode.substring(6, 8);
    const string444 = title.substring(
      parseInt(string11) + parseInt(string22) + parseInt(string33) + 3,
      parseInt(string11) +
        parseInt(string22) +
        parseInt(string33) +
        parseInt(string44) +
        3
    );

    const string55 = titleCode.substring(8, 10);
    const string555 = title.substring(
      parseInt(string11) +
        parseInt(string22) +
        parseInt(string33) +
        parseInt(string44) +
        4,
      parseInt(string11) +
        parseInt(string22) +
        parseInt(string33) +
        parseInt(string44) +
        parseInt(string55) +
        4
    );
    const string66 = titleCode.substring(10, 12);
    const string666 = title.substring(
      parseInt(string11) +
        parseInt(string22) +
        parseInt(string33) +
        parseInt(string44) +
        parseInt(string55) +
        5,
      parseInt(string11) +
        parseInt(string22) +
        parseInt(string33) +
        parseInt(string44) +
        parseInt(string55) +
        parseInt(string66) +
        5
    );

    const title1 = string111;

    const title2 = string222;

    const title3 = string333;

    const title4 = string444;
    const title5 = string555;
    const title6 = string666;

    /* const buttonAddItemToCartFromCollection = (element) => {
      let item = {
        id: element.id,
        discountPrice: element.discountPrice,
        price: element.price,
        name: element.title,
        imageUrl1: element.imageUrl1,
        codeTovara: element.codeTovara,
      };
      console.log("buttonAddITEMToCart***item", { item });
      addItem(item);
    }; */

    return (
      <div className="collection-grid-item">
        <NavLink to={`/collection/product/${id}`} onClick={this.handleClick}>
          <div className="item-container">
            <div className="new-string">
              {novinka === true ? "НОВИНКА" : " "}
            </div>

            <div className="box-for-slides">
              <div className="slideshow cen">
                <div className="slides">
                  <div className="slide pc1">
                    <div
                      className="background-image-1"
                      style={{
                        backgroundImage: `url(${imageUrl1})`,
                      }}
                      alt=""
                    />
                  </div>
                  <div className="slide ">
                    <div
                      className="background-image-1"
                      style={{
                        backgroundImage: `url(${imageUrl2})`,
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-footer">
              <div className="title title-brand">{title1}</div>
              <div className="title title2">{title2}</div>
              <div className="title title3-4">{title3}</div>
              <div className="title title3-4">{title4}</div>
              <div className="title title5">{title5}</div>
              <div className="title title2">{title6}</div>
              <div
                className={`${
                  (discountPrice !== 0) & (discountPrice !== "")
                    ? "title line-through"
                    : ""
                } title title-price`}
              >
                {parseFloat(price).toFixed(2)} грн.
              </div>
              {(discountPrice !== 0) & (discountPrice !== "") ? (
                <div className="title title-discount">
                  {parseFloat(discountPrice).toFixed(2)} грн.
                </div>
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        </NavLink>
        <div className="button-collection-items">
          <CustomButtonAdopted
            onClick={() => this.buttonAddItemToCartFromCollection(item)}
            inverted
          >
            В КОШИК
          </CustomButtonAdopted>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  setScrollPosition: (scrollPosition) =>
    dispatch(setScrollPosition(scrollPosition)),
});
const mapStateToProps = (state) => {
  return {
    scrollPosition: state.scroll.scrollPosition,
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);

/***** funcional */

/* import React from "react";

import "./collection-item.styles.scss";
import CustomButtonAdopted from "../../../components/custom-button-adopted/CustomButtonAdopted";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cartActions";

import { withRouter, NavLink } from "react-router-dom";
//import ProductPage from "../../product-page/ProductPage";

const CollectionItem = ({ item, addItem }) => {
  const {
    id,
    price,
    title,
    titleCode,
    discountPrice,
    imageUrl1,
    imageUrl2,
    novinka,
  } = item;

  const string11 = titleCode.substring(0, 2);
  const string111 = title.substring(0, string11);

  const string22 = titleCode.substring(2, 4);
  const string222 = title.substring(
    parseInt(string11) + 1,
    parseInt(string11) + 1 + parseInt(string22)
  );

  const string33 = titleCode.substring(4, 6);
  const string333 = title.substring(
    parseInt(string11) + parseInt(string22) + 2,
    parseInt(string11) + parseInt(string22) + parseInt(string33) + 2
  );

  const string44 = titleCode.substring(6, 8);
  const string444 = title.substring(
    parseInt(string11) + parseInt(string22) + parseInt(string33) + 3,
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      3
  );

  const string55 = titleCode.substring(8, 10);
  const string555 = title.substring(
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      4,
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      parseInt(string55) +
      4
  );
  const string66 = titleCode.substring(10, 12);
  const string666 = title.substring(
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      parseInt(string55) +
      5,
    parseInt(string11) +
      parseInt(string22) +
      parseInt(string33) +
      parseInt(string44) +
      parseInt(string55) +
      parseInt(string66) +
      5
  );

  const title1 = string111;

  const title2 = string222;

  const title3 = string333;

  const title4 = string444;
  const title5 = string555;
  const title6 = string666;

  const buttonAddItemToCartFromCollection = (element) => {
    let item = {
      id: element.id,
      discountPrice: element.discountPrice,
      price: element.price,
      name: element.title,
      imageUrl1: element.imageUrl1,
      codeTovara: element.codeTovara,
    };
    console.log("buttonAddITEMToCart***item", { item });
    addItem(item);
  };
  const handleClick = () => {
    console.log("////////////");
  };
  return (
    <div className="collection-grid-item">
      <NavLink to={`/collection/product/${id}`} onClick={handleClick}>
        <div className="item-container">
          <div className="new-string">{novinka === true ? "НОВИНКА" : " "}</div>

          <div className="box-for-slides">
            <div className="slideshow cen">
              <div className="slides">
                <div className="slide pc1">
                  <div
                    className="background-image-1"
                    style={{
                      backgroundImage: `url(${imageUrl1})`,
                    }}
                    alt=""
                  />
                </div>
                <div className="slide ">
                  <div
                    className="background-image-1"
                    style={{
                      backgroundImage: `url(${imageUrl2})`,
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="item-footer">
            <div className="title title-brand">{title1}</div>
            <div className="title title2">{title2}</div>
            <div className="title title3-4">{title3}</div>
            <div className="title title3-4">{title4}</div>
            <div className="title title5">{title5}</div>
            <div className="title title2">{title6}</div>
            <div
              className={`${
                discountPrice !== 0 ? "title line-through" : ""
              } title title-price`}
            >
              {parseFloat(price).toFixed(2)} грн.
            </div>
            {discountPrice !== 0 ? (
              <div className="title title-discount">
                {parseFloat(discountPrice).toFixed(2)} грн.
              </div>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </NavLink>
      <div className="button-collection-items">
        <CustomButtonAdopted
          onClick={() => buttonAddItemToCartFromCollection(item)}
          inverted
        >
          В КОШИК
        </CustomButtonAdopted>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
 */
