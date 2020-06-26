import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { firestore } from "../../firebase/FirebaseUtils";

import "./collection.styles.scss";
import CollectionItem from "./collection-item/CollectionItem";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../product-page/ProductPage";

class CollectionPage extends Component {
  state = { items: [] };
  unsubscribe = null;

  componentDidMount = async () => {
    //const colid = this.props.match.params.colid;
    //const colid = "000001";
    console.log(
      this.props.match.params.collectionId,
      "this.props.match.params.colid"
    );
    const collectionId = this.props.match.params.collectionId;
    collectionId &&
      (this.unsubscribe = firestore
        .collection(collectionId)
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshop) => {
          const items = snapshop.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          this.setState({ items });
          console.log(items, "-----items********");
          console.log({ items }, "-----items");
        }));
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { collection } = this.props;
    //const { title } = this.props.collection;
    //console.log(this.props.match.params.collectionId, "**--xxx--***")--????? error;
    //console.log(collection, "*************");
    //console.log(title, "******title*******");
    //console.log(items, "******items*******");
    const { items } = this.state;
    return (
      <Switch>
        <div className="collection-page">
          {/* <h2 className="title">{title}</h2> */}
          <div className="collection-items-grid-container">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <Route
          path={`/collection/product/:productId`}
          component={ProductPage}
        />
      </Switch>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
