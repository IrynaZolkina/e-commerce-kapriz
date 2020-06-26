import React, { Component } from "react";
import { firestore } from "../../firebase/FirebaseUtils";

import SelectSubmenu from "../select-submenu/SelectSubmenu";

class SelectCollection extends Component {
  state = {
    navbarChosen: false,
    navbarOrder: "",
    submenu: [],
    navbarNameChosen: "",
  };
  /************* by substring number, creating list of collection's codes */
  addItemIntoCollections = (code1, number) => {
    const { collectionsArray } = this.props.collectionsArray;

    let arrayForAdding = [];
    let submenuElementMatched = [];

    const chosenNavbarElementArray = this.props.arrayNavbar.filter(
      (doc) => doc.number === number.substring(0, 2) + "000000"
    );
    if (chosenNavbarElementArray) {
      //console.log("chosenNavbarElementArray---", chosenNavbarElementArray);

      /******** getting this object from array **********/
      const [chosenNavbarElementObject] = chosenNavbarElementArray;

      console.log("chosenNavbarElementArray", chosenNavbarElementArray);

      /******** getting code of the navbar collection with number 'numberInNavbar'*/
      const codeNavbarCollection = chosenNavbarElementObject.code;
      !collectionsArray.includes(codeNavbarCollection) &&
        (arrayForAdding = [...arrayForAdding, codeNavbarCollection]);

      console.log("codeNavbarCollection---", codeNavbarCollection);
      console.log("arrayForAdding---", arrayForAdding);

      /******** getting subMenu array */
      const submenuArray = chosenNavbarElementObject.subMenu;
      //console.log("submenuArray---", submenuArray);

      submenuElementMatched = submenuArray.filter(
        (submenuElement) =>
          submenuElement.number === number.substring(0, 4) + "0000"
      );

      if (submenuElementMatched.length !== 0) {
        // 1-st level group exists
        console.log("submenuElementMatched-----", submenuElementMatched);

        /******** getting this object from array  *****/
        const [submenuArrayObject] = submenuElementMatched;
        console.log(
          submenuArrayObject,
          "***number2level***",
          submenuElementMatched
        );

        /********* getting code  */
        const codeSubmenu2Level = submenuArrayObject.code;
        !collectionsArray.includes(codeSubmenu2Level) &&
          (arrayForAdding = [...arrayForAdding, codeSubmenu2Level]);
        //console.log("arrayForAdding---", arrayForAdding);
        //console.log(number.substring(4, 6), "********");

        /******** number in submenu - 3-nd level  ***** */

        if (number.substring(4, 6) !== "00") {
          const submenuArrayElement3Level = submenuArray.filter(
            (doc) => doc.number === number.substring(0, 6) + "00"
          );

          const [submenuArrayObject3Level] = submenuArrayElement3Level;

          const codeSubmenu3Level = submenuArrayObject3Level.code;
          !collectionsArray.includes(codeSubmenu3Level) &&
            (arrayForAdding = [...arrayForAdding, codeSubmenu3Level]);
        }
        if (number.substring(6, 8) !== "00") {
          !collectionsArray.includes(code1) &&
            (arrayForAdding = [...arrayForAdding, code1]);
        }

        arrayForAdding.map((code) =>
          //console.log(code, "codefffffffffffff");
          firestore.collection(code).doc(this.props.id).set({
            title: this.props.title,
            titleCode: this.props.titleCode,
            //brand: this.props.brand,
            price: this.props.price,
            discountPrice: this.props.discountPrice,
            imageUrl1: this.props.imageUrl1,
            imageUrl2: this.props.imageUrl2,
            createdAt: this.props.createdAt,
            novinka: this.props.novinka,
          })
        );
        arrayForAdding = [...collectionsArray, ...arrayForAdding];
        //console.log("arrayForAdding---", arrayForAdding);
        firestore
          .collection("items")
          .doc(this.props.id)
          .set(
            {
              collectionsArray: [...arrayForAdding],
            },
            { merge: true }
          );
      } else {
        console.log("Number is wrong on 2-nd level /submenu-up/", number);
        submenuElementMatched = submenuArray.filter(
          (submenuElement) =>
            submenuElement.number === number.substring(0, 6) + "00"
        );
        if (submenuElementMatched.length !== 0) {
          const [submenuArrayObject33Level] = submenuElementMatched;

          const codeSubmenu33Level = submenuArrayObject33Level.code;
          !collectionsArray.includes(codeSubmenu33Level) &&
            (arrayForAdding = [...arrayForAdding, codeSubmenu33Level]);
        }
        if (number.substring(6, 8) !== "00") {
          !collectionsArray.includes(code1) &&
            (arrayForAdding = [...arrayForAdding, code1]);
        }

        arrayForAdding.map((code) =>
          //console.log(code, "codefffffffffffff");
          firestore.collection(code).doc(this.props.id).set({
            title: this.props.title,
            titleCode: this.props.titleCode,
            //brand: this.props.brand,
            price: this.props.price,
            discountPrice: this.props.discountPrice,
            imageUrl1: this.props.imageUrl1,
            imageUrl2: this.props.imageUrl2,
            createdAt: this.props.createdAt,
            novinka: this.props.novinka,
          })
        );
        arrayForAdding = [...collectionsArray, ...arrayForAdding];
        //console.log("arrayForAdding---", arrayForAdding);
        firestore
          .collection("items")
          .doc(this.props.id)
          .set(
            {
              collectionsArray: [...arrayForAdding],
            },
            { merge: true }
          );
      }
    } else {
      console.log("Number is wrong on Navbar level", number);
    }
  };
  render() {
    return (
      <div>
        {this.props.arrayNavbar.map((element, index) => (
          <h4
            key={index}
            onClick={() =>
              this.setState(
                { navbarChosen: true },
                this.setState({
                  //navbarOrder: element.order,
                  navbarNameChosen: element.title.toUpperCase(),
                  submenu: element.subMenu,
                })
              )
            }
          >
            <div className="collection-navbar-element">
              {element.title.toUpperCase()}
            </div>
          </h4>
        ))}
        {this.state.navbarChosen === true && (
          <div className="collection-submenu-wrapper">
            <div className="collection-submenu-title">
              {this.state.navbarNameChosen}
            </div>
            <SelectSubmenu
              submenu={this.state.submenu}
              changeShowMenu={this.props.changeShowMenu}
              addItemIntoCollections={this.addItemIntoCollections}
            />
          </div>
        )}
      </div>
    );
  }
}
export default SelectCollection;
