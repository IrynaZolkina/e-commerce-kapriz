import React, { Component } from "react";
import { firestore } from "../../firebase/FirebaseUtils";

import Product from "../product/Product";

class AddItem extends Component {
  state = {
    item: {
      title: "",
      price: 0.0,
      discountPrice: 0.0,
      //brand: "",
      titleCode: "",
      codeTovara: "",
      shortDescription: "",
      description: "",
      content: "",
      applying: "",
      collectionsArray: [],
      imageUrl1: "",
      imageUrl2: "",
      imageUrl3: "",
      imageUrl4: "",
      imageUrl5: "",
      imageUrl6: "",
      imageUrl7: "",
      novinka: false,
      palitra: [],

      createdAt: new Date(),
    },
    timeId: "",
  };
  componentDidMount = async () => {
    let time = new Date().toString();

    const month = time.slice(4, 7);
    let monthNum = "";
    switch (month) {
      case "Jen":
        monthNum = "01";
        break;
      case "Feb":
        monthNum = "02";
        break;
      case "Mar":
        monthNum = "03";
        break;
      case "Apr":
        monthNum = "04";
        break;
      case "May":
        monthNum = "05";
        break;
      case "Jun":
        monthNum = "06";
        break;
      case "Jul":
        monthNum = "07";
        break;
      case "Aug":
        monthNum = "08";
        break;
      case "Sep":
        monthNum = "09";
        break;
      case "Oct":
        monthNum = "10";
        break;
      case "Nov":
        monthNum = "11";
        break;
      case "Dec":
        monthNum = "12";
        break;
      default:
        break;
    }
    const timeId =
      time.slice(11, 15) +
      "-" +
      monthNum +
      "-" +
      time.slice(8, 10) +
      "." +
      time.slice(16, 24);

    this.setState({ timeId: timeId });
    firestore
      .collection("items")
      .doc(timeId)
      .set(this.state.item)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };
  render() {
    return (
      <div>
        {/* <h1>This is AddItem COMPONENT</h1> */}
        {this.state.timeId !== "" && <Product id={this.state.timeId} />}
      </div>
    );
  }
}
export default AddItem;
