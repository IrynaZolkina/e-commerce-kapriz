import React, { Component } from "react";

import "./product.css";

import { firestore } from "../../../firebase/FirebaseUtils";
//import EditFields from "../edit-fields/EditFields";
import { storage } from "../../../firebase/FirebaseUtils";
import firebase from "../../../firebase/FirebaseUtils";
//import FormInput from "../../utilities/form-input/FormInput";
//import SelectCollection from "../select-collection/SelectCollection";
//import CollectionList from "../collection-list/CollectionList";
import Collections from "../../../components/collections/Collections";
import ProductSmallImage from "../product-small-image/ProductSmallImage";
import FormInput from "../../../components/form-input/FormInput";
import FormInputSmall from "../../../components/form-input-small/FormInputSmall";
import { withRouter } from "react-router-dom";
import { exists } from "fs";
import Slider3in8 from "../../../components/slider-3-un-8-sec/Slider3in8";

import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cartActions";
import CustomButtonAdopted from "../../../components/custom-button-adopted/CustomButtonAdopted";
import Slider6in18 from "../../../components/slider-6-un-18-sec/Slider6in18";
import ProductTitleGroup from "./ProductTitleGroup";
//import { storage } from "firebase";
//import { storage } from "firebase";

class Product extends Component {
  state = {
    title: "",
    price: 0,
    discountPrice: 0,
    //brand: "",
    createdAt: "",
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
    number: "",
    numberTitle: "",
    numberCodeTovara: "",
    numberImageUrl: "",
    temporaryUrl: "",
    item: null,

    showMenu: false,
    arrayNavbar: [],

    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",

    title1Input: "",
    title2Input: "",
    title3Input: "",
    title4Input: "",
    title5Input: "",
    title6Input: "",
    priceInput: "",
    discountPriceInput: "",
    codeTovaraInput: "",
    mainImageUrl: "",
    editMode: false,
    descriptionForShow: "",
    inputToArray: "",
    showArrayDescription: false,
    showArrayApplying: false,
    showArrayContent: false,
    arrayDescription: [],
    arrayApplying: [],
    arrayContent: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    console.log("pProduct component");
    firestore
      .collection("navbarTest")
      .orderBy("order", "desc")
      .get()
      .then((doc) => {
        doc.forEach((doc) => {
          const arrayNavbar = this.state.arrayNavbar;

          this.setState({
            arrayNavbar: [doc.data(), ...arrayNavbar],
          });
        });
      });
    /******** Reserving data ***********/
    firestore
      .collection("items")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        doc = doc.data();

        this.setState({ item: { ...doc } });
        //console.log({ ...doc }, "object");
        //console.log(doc.novinka, "object");
      });

    const { id } = this.props;

    /********* Subscription ********* */
    this.unsubscribe = firestore
      .collection("items")
      .doc(id)
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          const item = snapshot.data();

          this.setState({ ...item });
          this.setState({ item: item });

          this.setState({ mainImageUrl: item.imageUrl1 });

          /* const title = item.title;
          const titleCode = item.titleCode;
          const priceInput = item.price;
          const discountPriceInput = item.discountPrice;
          const codeTovaraInput = item.codeTovara;
          const description = item.description;

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

          this.setState({ title1: string111 });
          this.setState({ title2: string222 });
          this.setState({ title3: string333 });
          this.setState({ title4: string444 });
          this.setState({ title5: string555 });
          this.setState({ title6: string666 });

          this.setState({ title1Input: string111 });
          this.setState({ title2Input: string222 });
          this.setState({ title3Input: string333 });
          this.setState({ title4Input: string444 });
          this.setState({ title5Input: string555 });
          this.setState({ title6Input: string666 });

          this.setState({ priceInput: priceInput });
          this.setState({ discountPriceInput: discountPriceInput });
          this.setState({ codeTovaraInput: codeTovaraInput });
          this.setState({ descriptionForShow: description }); */
        }
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleImage = (e) => {
    const file = e.target.files[0];
    console.log("eeeeeeeeee", e.target.name);
    const name = e.target.name;
    const id = this.props.id;
    const uploadTask = storage
      .ref()
      .child(`/kapris/products/${id}/${name}`)
      .put(e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);

          firestore
            .collection("items")
            .doc(id)
            .set({ [name]: downloadURL }, { merge: true });

          this.state.collectionsArray.map((collectionCode) => {
            console.log("888", collectionCode);
            firestore
              .collection(collectionCode)
              .doc(id)
              .set({ [name]: downloadURL }, { merge: true });
          });
        });
      }
    );
  };

  handleImageColor = (e) => {
    const file = e.target.files[0];
    console.log("eeeeeeeeee", e.target.name);
    const name = e.target.name;
    const id = this.props.id;
    const uploadTask = storage
      .ref()
      .child(`/kapris/products/${id}/${name}`)
      .put(e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);

          const palitra = [...this.state.palitra];
          palitra.map((color) =>
            color.number === name ? (color.numberImageUrl = downloadURL) : null
          );
          firestore
            .collection("items")
            .doc(this.props.id)
            .set(
              {
                palitra: [...palitra],
              },
              { merge: true }
            );
        });
      }
    );
  };

  handleDeleteImage = (imageName) => {
    /*  console.log("eeeeeeeeee", imageName); */
    storage
      .ref()
      .child(`/kapris/products/${this.props.id}/${imageName}`)
      .delete()
      .then(function () {
        // File deleted successfully
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      });
    this.state.collectionsArray.map((collectionCode) => {
      /*  console.log("888", collectionCode); */
      firestore
        .collection(collectionCode)
        .doc(this.props.id)
        .set(
          {
            [imageName]: "",
          },
          { merge: true }
        );
    });
    firestore
      .collection("items")
      .doc(this.props.id)
      .set(
        {
          [imageName]: "",
        },
        { merge: true }
      );
  };
  handleChangeMainImage = ({ imageUrl }) => {
    /*  console.log("555555", imageUrl); */
    this.setState({ mainImageUrl: imageUrl });
  };
  /* handleChange = (event) => {
    const { name, value } = event.target;

    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
  }; */
  handleChangeStateByName = (event) => {
    const { name, value } = event.target;
    //console.log(name, "***", value);

    this.setState({ [name]: value });
  };
  handleChangeStateNovinka = (event) => {
    //const { novinka } = event.target;
    //console.log(name, "***", value);

    //this.setState({ [name]: value });
    this.setState({ novinka: !this.state.novinka });
  };
  handleSubmitAll = () => {
    const length1 = this.state.title1Input.length;
    const length2 = this.state.title2Input.length;
    const length3 = this.state.title3Input.length;
    const length4 = this.state.title4Input.length;
    const length5 = this.state.title5Input.length;
    const length6 = this.state.title6Input.length;

    const titleCode =
      (length1 <= 9 ? "0" + length1.toString() : length1.toString()) +
      (length2 <= 9 ? "0" + length2.toString() : length2.toString()) +
      (length3 <= 9 ? "0" + length3.toString() : length3.toString()) +
      (length4 <= 9 ? "0" + length4.toString() : length4.toString()) +
      (length5 <= 9 ? "0" + length5.toString() : length5.toString()) +
      (length6 <= 9 ? "0" + length6.toString() : length6.toString());

    //console.log(titleCode, "bland");
    const string =
      this.state.title1Input +
      " " +
      this.state.title2Input +
      " " +
      this.state.title3Input +
      " " +
      this.state.title4Input +
      " " +
      this.state.title5Input +
      " " +
      this.state.title6Input;
    firestore.collection("items").doc(this.props.id).set(
      {
        title: string,
        titleCode: titleCode,
        price: this.state.priceInput,
        discountPrice: this.state.discountPriceInput,
        codeTovara: this.state.codeTovaraInput,
        description: this.state.description,
        shortDescription: this.state.shortDescription,
        novinka: this.state.novinka,
      },
      { merge: true }
    );
    this.state.collectionsArray.map((collectionCode) => {
      //console.log("888", collectionCode);
      firestore.collection(collectionCode).doc(this.props.id).set(
        {
          title: string,
          titleCode: titleCode,

          price: this.state.priceInput,
          discountPrice: this.state.discountPriceInput,
          imageUrl1: this.state.imageUrl1,
          imageUrl2: this.state.imageUrl2,
          createdAt: this.state.createdAt,
          novinka: this.state.novinka,
        },
        { merge: true }
      );
    });
  };
  submitDescription = () => {
    console.log(this.state);
    firestore.collection("items").doc(this.props.id).set(
      {
        description: this.state.description,
        applying: this.state.applying,
        content: this.state.content,
      },
      { merge: true }
    );
  };
  submitArrayDescription = () => {
    let array = [...this.state.arrayDescription, this.state.inputToArray];
    firestore.collection("items").doc(this.props.id).set(
      {
        arrayDescription: array,
      },
      { merge: true }
    );
    this.setState({ inputToArray: "" });
  };
  submitArrayApplying = () => {
    let array = [...this.state.arrayApplying, this.state.inputToArray];
    firestore.collection("items").doc(this.props.id).set(
      {
        arrayApplying: array,
      },
      { merge: true }
    );
    this.setState({ inputToArray: "" });
  };
  submitArrayContent = () => {
    let array = [...this.state.arrayContent, this.state.inputToArray];
    firestore.collection("items").doc(this.props.id).set(
      {
        arrayContent: array,
      },
      { merge: true }
    );
    this.setState({ inputToArray: "" });
  };

  handleChangeColor = (e) => {
    const { value, index } = e.target;
    //console.log(name, "***", value);
    console.log(index, "***");
    console.log(this.state.palitra, "***", this.state.palitra[index]);
    const palitra = [...this.state.palitra];
    //palitra[index].number = value;
    //this.setState({ palitra: palitra });
  };
  handleSubmitPalitra = () => {
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

    const object = {
      number: this.state.number,
      numberTitle: this.state.numberTitle,
      numberCodeTovara: this.state.numberCodeTovara,
      numberImageUrl: this.state.temporaryUrl,
      numberId: timeId,
    };
    const palitra = [...this.state.palitra, object];
    firestore
      .collection("items")
      .doc(this.props.id)
      .set(
        {
          palitra: [...palitra],
        },
        { merge: true }
      );
    firestore.collection("items-palitra").doc(timeId).set(
      /* firestore.collection("items-palitra").doc(this.state.numberCodeTovara).set( */
      {
        parent: this.props.id,
        numberCodeTovara: object.numberCodeTovara,
      },
      { merge: true }
    );
    this.setState({
      palitra: [],
      number: "",
      numberTitle: "",
      numberImageUrl: "",
      numberCodeTovara: "",
      temporaryUrl: "",
    });
  };
  /* onClick={() => this.props.addItem(item)} */
  buttonAddPalitraToCart = (element) => {
    let item = {
      id: element.numberId,
      discountPrice: this.state.discountPrice,
      price: this.state.price,
      name: this.state.title + " " + element.number + " " + element.numberTitle,
      imageUrl1: element.numberImageUrl,
      codeTovara: element.numberCodeTovara,
    };
    console.log("buttonAddPalitraToCart---item", { item });
    this.props.addItem(item);
  };
  handleSubmitChangeColorNumber = (index) => {
    const palitra = [...this.state.palitra];
    palitra[index].number = this.state.number;
    firestore
      .collection("items")
      .doc(this.props.id)
      .set(
        {
          palitra: [...palitra],
        },
        { merge: true }
      );
  };
  handleDeleteColor = (index) => {
    const palitra = [...this.state.palitra];
    let imageName = "";
    let codeTovara = "";
    let numberId = "";
    const filteredPalitra = palitra.filter((value, ind) => {
      if (ind === index) {
        imageName = value.number;
        codeTovara = value.numberCodeTovara;
        numberId = value.numberId;
      } else return ind !== index;
    });

    storage
      .ref()
      .child(`/kapris/products/${this.props.id}/${imageName}`)
      .delete();
    firestore
      .collection("items")
      .doc(this.props.id)
      .set(
        {
          palitra: [...filteredPalitra],
        },
        { merge: true }
      );
    firestore.collection("items-palitra").doc(numberId).delete();
  };
  handleDiscard = (name) => {
    console.log("title1", name);
    if (name === "title1") {
      const titleCode = this.state.item.titleCode;
      const string111 = this.state.item.title.substring(
        0,
        titleCode.substring(0, 2)
      );

      this.setState({ title1: string111 });
    } else if (name === "title2") {
      const titleCode = this.state.item.titleCode;

      const string222 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) + 1,
        parseInt(titleCode.substring(0, 2)) +
          1 +
          parseInt(titleCode.substring(2, 4))
      );
      this.setState({ title2: string222 });
    } else if (name === "title3") {
      const titleCode = this.state.item.titleCode;

      const string333 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          2,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          2
      );

      this.setState({ title3: string333 });
    } else if (name === "title4") {
      const titleCode = this.state.item.titleCode;

      const string444 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          3,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          3
      );
      this.setState({ title4: string444 });
    } else if (name === "title5") {
      const titleCode = this.state.item.titleCode;

      const string555 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          4,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          parseInt(titleCode.substring(8, 10)) +
          4
      );
      this.setState({ title5: string555 });
    } else if (name === "title6") {
      const titleCode = this.state.item.titleCode;

      const string777 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          parseInt(titleCode.substring(8, 10)) +
          5,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          parseInt(titleCode.substring(8, 10)) +
          parseInt(titleCode.substring(10, 12)) +
          5
      );
      this.setState({ title6: string777 });
    } else {
      this.setState({ [name]: this.state.item[name] });
    }
  };

  changeShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };
  fullDeleteItem = async () => {
    const id = this.props.id;
    const mmm = await storage
      .ref()
      .child(`/kapris/products/${this.props.id}/`)
      .listAll();
    mmm.items.map((item) => item.delete());
    //mmm1.map((item) => item.delete());
    if (mmm.items.length > 0) {
      console.log("delete pictures", mmm.items.length, mmm.items);
    } else {
      console.log("delete pictures", mmm.items.length, mmm.items);
    }
    /****** from storage */
    /* if (storage.ref().child(`/kapris/products/${this.props.id}`).exists) {
      return console.log("delete pictures");
    } else { */
    /****** from All Collections */
    firestore
      .collection("items")
      .doc(id)
      .get()
      .then((doc) => {
        const doc11 = doc.data().collectionsArray;

        doc11.map((element) => {
          firestore.collection(element).doc(id).delete();
        });
      });

    /****** from "items" collection */
    firestore.collection("items").doc(id).delete();
    this.props.history.goBack();
  };

  render() {
    //console.log("history-", this.props.history);
    //console.log("id-", this.props.id);
    // console.log("state", this.state);
    const { id } = this.props;
    const {
      title,
      price,
      discountPrice,
      titleCode,
      codeTovara,
      description,
      arrayDescription,
      arrayApplying,
      arrayContent,
      showArrayDescription,
      showArrayApplying,
      showArrayContent,
      content,
      applying,
      createdAt,
      shortDescription,
      collectionsArray,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
      imageUrl7,
      novinka,
      palitra,
      number,
      numberTitle,
      numberCodeTovara,
      numberImageUrl,
      temporaryUrl,
      arrayNavbar,
      title1,
      title2,
      title3,
      title4,
      title5,
      title6,
      title1Input,
      title2Input,
      title3Input,
      title4Input,
      title5Input,
      title6Input,
      priceInput,
      discountPriceInput,
      codeTovaraInput,
      mainImageUrl,
      editMode,
      descriptionForShow,
      inputToArray,
    } = this.state;

    const item = this.state.item;

    //: title

    //console.log("hhhhhhhhhh", string1);
    //console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", this.state);
    /* console.log("--------item------------", item);
    console.log("--------arrayDescription-----", arrayDescription); */
    return (
      <div>
        {/* <h1>{id}</h1> */}
        <div className="product-page-container">
          <div className="product-section-1-grid">
            <div className="product-small-images-container">
              <ProductSmallImage
                imageName={"imageUrl1"}
                imageUrl={imageUrl1}
                imageTitle={"Фото 1"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl2"}
                imageUrl={imageUrl2}
                imageTitle={"Фото 2"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl3"}
                imageUrl={imageUrl3}
                imageTitle={"Фото 3"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl4"}
                imageUrl={imageUrl4}
                imageTitle={"Фото 4"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl5"}
                imageUrl={imageUrl5}
                imageTitle={"Фото 5"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl6"}
                imageUrl={imageUrl6}
                imageTitle={"Фото 6"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl7"}
                imageUrl={imageUrl7}
                imageTitle={"Фото 7"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
            </div>

            <div className="upload-btn-wrapper-main product-main-image  ">
              <div className="product-main">
                {" "}
                <div
                  className="product-image-main"
                  style={{
                    backgroundImage: `url(${mainImageUrl})`,
                  }}
                  alt=""
                />
              </div>

              <input
                type="file"
                name="imageUrl1"
                placeholder="file"
                onChange={this.handleImage}
              />
            </div>

            <div className="product-title-container">
              {item !== null && (
                <ProductTitleGroup
                  item={this.state.item}
                  id={id}
                  editMode={editMode}
                />
              )}
              {(arrayDescription.length !== 0 || editMode) && (
                <div className="description-group">
                  <div className="desc">
                    <div className="description-title">
                      <span> Опис</span>
                      {showArrayDescription === false ? (
                        <span
                          className="span-symbol"
                          onClick={() =>
                            this.setState({ showArrayDescription: true })
                          }
                        >
                          &#8853;
                        </span>
                      ) : (
                        <span
                          className="span-symbol"
                          onClick={() =>
                            this.setState({ showArrayDescription: false })
                          }
                        >
                          &#8854;
                        </span>
                      )}
                    </div>
                    <div
                      className={
                        showArrayDescription === true
                          ? "show-description-block"
                          : "description-block"
                      }
                    >
                      {arrayDescription &&
                        arrayDescription.map((string, index) => (
                          <div key={index}>
                            <span>{string}</span>
                            <p className="prt"></p>
                          </div>
                        ))}{" "}
                      {editMode === true && (
                        <div>
                          <input
                            type="text"
                            name="inputToArray"
                            value={inputToArray}
                            label="inputToArray"
                            onChange={this.handleChangeStateByName}
                          />
                          <button onClick={this.submitArrayDescription}>
                            {" "}
                            Абзац закончен
                          </button>
                          <button
                            onClick={() =>
                              firestore
                                .collection("items")
                                .doc(this.props.id)
                                .set(
                                  {
                                    arrayDescription: [],
                                  },
                                  { merge: true }
                                )
                            }
                          >
                            Delete Опис
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {(arrayApplying.length !== 0 || editMode) && (
                <div className="description-group">
                  <div className="desc">
                    <div className="description-title">
                      <span>Як використовувати</span>
                      {showArrayApplying === false ? (
                        <span
                          className="span-symbol"
                          onClick={() =>
                            this.setState({ showArrayApplying: true })
                          }
                        >
                          &#8853;
                        </span>
                      ) : (
                        <span
                          className="span-symbol"
                          onClick={() =>
                            this.setState({ showArrayApplying: false })
                          }
                        >
                          &#8854;
                        </span>
                      )}
                    </div>
                    <div
                      className={
                        showArrayApplying === true
                          ? "show-description-block"
                          : "description-block"
                      }
                    >
                      {arrayApplying &&
                        arrayApplying.map((string, index) => (
                          <div key={index}>
                            <span>{string}</span>
                            <p className="prt"></p>
                          </div>
                        ))}{" "}
                      {editMode === true && (
                        <div>
                          <input
                            type="text"
                            name="inputToArray"
                            value={inputToArray}
                            label="inputToArray"
                            onChange={this.handleChangeStateByName}
                          />
                          <button onClick={this.submitArrayApplying}>
                            {" "}
                            Абзац закончен
                          </button>
                          <button
                            onClick={() =>
                              firestore
                                .collection("items")
                                .doc(this.props.id)
                                .set(
                                  {
                                    arrayApplying: [],
                                  },
                                  { merge: true }
                                )
                            }
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {(arrayContent.length !== 0 || editMode) && (
                <div className="description-group">
                  <div className="desc">
                    <div className="description-title">
                      <span>Состав</span>
                      {showArrayContent === false ? (
                        <span
                          className="span-symbol"
                          onClick={() =>
                            this.setState({ showArrayContent: true })
                          }
                        >
                          &#8853;
                        </span>
                      ) : (
                        <span
                          className="span-symbol"
                          onClick={() =>
                            this.setState({ showArrayContent: false })
                          }
                        >
                          &#8854;
                        </span>
                      )}
                    </div>
                    <div
                      className={
                        showArrayContent === true
                          ? "show-description-block"
                          : "description-block"
                      }
                    >
                      {arrayContent &&
                        arrayContent.map((string, index) => (
                          <div key={index}>
                            <span>{string}</span>
                            <p className="prt"></p>
                          </div>
                        ))}{" "}
                      {editMode === true && (
                        <div>
                          <input
                            type="text"
                            name="inputToArray"
                            value={inputToArray}
                            label="inputToArray"
                            onChange={this.handleChangeStateByName}
                          />
                          <button onClick={this.submitArrayContent}>
                            {" "}
                            Абзац закончен
                          </button>
                          <button
                            onClick={() =>
                              firestore
                                .collection("items")
                                .doc(this.props.id)
                                .set(
                                  {
                                    arrayContent: [],
                                  },
                                  { merge: true }
                                )
                            }
                          >
                            Delete Состав
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/*********   name="palitra"   ************/}
          {codeTovara === "" && palitra.length !== 0 && (
            <div className="colors-container">
              <div className="color-grid-container">
                {palitra.map((element, index) => (
                  <div key={index} className="color-item">
                    {element.numberImageUrl === "" ? (
                      <input
                        type="file"
                        name={element.number}
                        placeholder="file"
                        onChange={this.handleImageColor}
                      />
                    ) : (
                      <div
                        className="color-image"
                        style={{
                          backgroundImage: `url(${element.numberImageUrl})`,
                        }}
                        alt=""
                      />
                    )}

                    <div className="color-number">{element.number}</div>
                    <div className="color-number">{element.numberTitle}</div>
                    <div className="color-number">
                      {element.numberCodeTovara}
                    </div>
                    <div className="button-collection-items">
                      <CustomButtonAdopted
                        /* onClick={() => this.props.addItem(item)} */
                        onClick={() => this.buttonAddPalitraToCart(element)}
                        inverted
                      >
                        В КОШИК
                      </CustomButtonAdopted>
                    </div>
                    {editMode === true && (
                      <div>
                        <button onClick={() => this.handleDeleteColor(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {editMode === true
            ? codeTovara === "" && (
                <div className="edit-field-container">
                  <FormInputSmall
                    type="text"
                    name="number"
                    value={number}
                    label="Номер"
                    onChange={this.handleChangeStateByName}
                  />
                  <FormInputSmall
                    type="text"
                    name="numberTitle"
                    value={numberTitle}
                    label="Название"
                    onChange={this.handleChangeStateByName}
                  />
                  <FormInputSmall
                    type="text"
                    name="numberCodeTovara"
                    value={numberCodeTovara}
                    label="Н"
                    onChange={this.handleChangeStateByName}
                  />

                  <button
                    className="x-button"
                    onClick={() => this.handleSubmitPalitra()}
                  >
                    Submit Palitra
                  </button>
                </div>
              )
            : null}

          {editMode === true ? (
            <div className="collections-block">
              <Collections
                id={this.props.id}
                collectionsArray={collectionsArray}
                arrayNavbar={arrayNavbar}
                changeShowMenu={this.changeShowMenu}
                showMenu={this.state.showMenu}
                title={title}
                price={price}
                discountPrice={discountPrice}
                imageUrl1={imageUrl1}
                imageUrl2={imageUrl2}
                createdAt={createdAt}
                novinka={novinka}
                titleCode={titleCode}
              />
              <div className="add-collection-button">
                <button onClick={this.changeShowMenu}>ADD COLLECTION</button>
              </div>
            </div>
          ) : null}

          <div className="buttons-edit-exit">
            <button onClick={() => this.setState({ editMode: true })}>
              EDIT
            </button>
            <button
              onClick={() => {
                //this.props.history.push("/collection/:collectionId");
                this.props.history.goBack();
              }}
            >
              EXIT
            </button>
            <button onClick={this.fullDeleteItem}>DELETE PRODUCT</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  /* addItem: (item) => dispatch(addItem(item)), */
});

export default withRouter(connect(null, mapDispatchToProps)(Product));
