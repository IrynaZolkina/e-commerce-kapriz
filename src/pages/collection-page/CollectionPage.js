import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { firestore } from "../../firebase/FirebaseUtils";

import "./collection.styles.scss";
import CollectionItem from "./collection-item/CollectionItem";
import { Route, Switch, withRouter } from "react-router-dom";
import ProductPage from "../product-page/ProductPage";
import CollectionTest from "./CollectionTest";

class CollectionPage extends Component {
  state = { items: [], collectionId: "" };

  unsubscribe = null;

  componentDidMount = () => {
    //const colid = this.props.match.params.colid;
    //const colid = "000001";
    console.log(
      this.props.match.params.collectionId,
      " componentDidMount -this.props.match.params.colid"
    );
    console.log(this.props.match.params, "this.props.match.params");
    const collectionId = this.props.match.params.collectionId;
    this.setState({ collectionId: collectionId });
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
    console.log(",,,,,,,componentWillUnmount");
    this.unsubscribe();
  };
  componentDidUpdate = () => {
    const collectionId1 = this.props.match.params.collectionId;
    if (this.state.collectionId !== collectionId1) {
      firestore
        .collection(collectionId1)
        .orderBy("createdAt", "desc")
        .get()
        .then((snapshop) => {
          const items = snapshop.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          this.setState({ items });
          console.log(items, "-----items********");
          console.log({ items }, "-----items");
        });
      this.setState({ collectionId: collectionId1 });
    }
  };
  render() {
    console.log(
      this.props.match.params.collectionId,
      "this.props.match.params.colid"
    );
    /* const collectionId1 = this.props.match.params.collectionId;
    if (this.state.collectionId !== collectionId1) {
      firestore
        .collection(collectionId1)
        .orderBy("createdAt", "desc")
        .get()
        .then((snapshop) => {
          const items = snapshop.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          this.setState({ items });
          console.log(items, "-----items********");
          console.log({ items }, "-----items");
        });
      this.setState({ collectionId: collectionId1 });
    } */
    /* const { collection } = this.props;
    
    const { items } = this.state;
    console.log(items, "******items*******");
 */
    return (
      <div>
        <CollectionTest items={this.state.items} />
      </div>
    );

    {
      /* <Switch>
        <div className="collection-page">
          
          <div className="collection-items-grid-container">
            {this.state.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <Route
          path={`/collection/product/:productId`}
          component={ProductPage}
        />
      </Switch> */
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
/* export default withRouter(CollectionPage); */
