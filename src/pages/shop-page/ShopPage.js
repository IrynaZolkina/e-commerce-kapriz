import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection-page/CollectionPage";

const ShopPage = ({ match }) => {
  console.log(match.params, "match++++++++++");
  return (
    <div className="shop-page">
      {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
      <Redirect to={`/collection/${match.params.collectionId}`}>HELLO</Redirect>
    </div>
  );
};

export default ShopPage;
