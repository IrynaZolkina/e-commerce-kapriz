import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import CollectionItem from "./collection-item/CollectionItem";
import ProductPage from "../product-page/ProductPage";

const CollectionTest = ({ items }) => {
  return (
    <div>
      <Switch>
        <Fragment>
          <div className="collection-page">
            <div className="collection-items-grid-container">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Fragment>
        <Route
          path={`/collection/product/:productId`}
          component={ProductPage}
        />
      </Switch>
    </div>
  );
};

export default CollectionTest;
