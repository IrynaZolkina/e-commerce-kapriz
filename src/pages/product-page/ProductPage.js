import React, { Component } from "react";
import Product from "../../components/product/Product";
import { withRouter } from "react-router-dom";

class ProductPage extends Component {
  render() {
    //return <div>{this.props.id}</div>;
    return (
      <div>
        {this.props.match.params.productId}
        {/* {console.log(
          this.props.match.params.productId,
          "this.props.match.params.productId"
        )} */}
        <Product id={this.props.match.params.productId} />
      </div>
    );
  }
}

export default withRouter(ProductPage);
