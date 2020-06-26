import React, { Component } from "react";
import CollectionList from "../collection-list/CollectionList";
import SelectCollection from "../select-collection/SelectCollection";

class Collections extends Component {
  render() {
    const collectionsArray = this.props;
    const arrayNavbar = this.props;

    return (
      <div>
        {collectionsArray !== [] ? (
          <div>
            <div className="collections-title">
              {" "}
              Этот продукт включён в коллекции:
            </div>
            <CollectionList
              collectionsArray={collectionsArray}
              arrayNavbar={arrayNavbar}
              id={this.props.id}
            />
          </div>
        ) : (
          <div> NO COLLECTIONS YET</div>
        )}
        {/* {editMode === true && (
          <button onClick={this.props.changeShowMenu}>ADD COLLECTION</button>
        )} */}
        {this.props.showMenu && (
          <div className="collection-navbar-wrapper">
            <SelectCollection
              changeShowMenu={this.props.changeShowMenu}
              id={this.props.id}
              collectionsArray={collectionsArray}
              arrayNavbar={this.props.arrayNavbar}
              title={this.props.title}
              price={this.props.price}
              discountPrice={this.props.discountPrice}
              imageUrl1={this.props.imageUrl1}
              imageUrl2={this.props.imageUrl2}
              createdAt={this.props.createdAt}
              novinka={this.props.novinka}
              titleCode={this.props.titleCode}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Collections;
