import React, { Component } from "react";

import "./collection-item.styles.scss";
import CustomButtonAdopted from "../../../components/custom-button-adopted/CustomButtonAdopted";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cartActions";
import { render } from "@testing-library/react";
import { Redirect, withRouter, Route, NavLink } from "react-router-dom";
import ProductPage from "../../product-page/ProductPage";

const CollectionItem = ({ item, addItem }) => {
  /* state = {
    productComponent: false,
  }; */
  //const { name, price, imageUrl1 } = item;

  const {
    id,
    name,
    price,
    imageUrl1id,
    title,
    titleCode,
    codeTovara,
    discountPrice,
    brand,
    collectionsArray,
    imageUrl1,
    imageUrl2,
    novinka,
    content,
    user,
    createdAt,
    stars,
    comments,
  } = item;
  //const { item } = item;

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
  /* console.log(typeof price, "*************"); */

  return (
    <div className="collection-grid-item">
      <NavLink to={`/collection/product/${id}`}>
        <div className="item-container">
          <div className="new-string">{novinka === true ? "NEW" : " "}</div>
          {/* <div className={`${novinka === true ? "" : "empty-string"}`}>
            {novinka === true ? "NEW" : "NOT NEW"}
          </div> */}
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
                discountPrice !== "" ? "title line-through" : ""
              } title title-price`}
            >
              {parseFloat(price).toFixed(2)} грн.
            </div>
            {discountPrice !== "" ? (
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
        <CustomButtonAdopted onClick={() => addItem(item)} inverted>
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
