import React, { Component } from "react";

import "./product.css";

import { firestore } from "../../firebase/FirebaseUtils";
//import EditFields from "../edit-fields/EditFields";
import { storage } from "../../firebase/FirebaseUtils";
import firebase from "../../firebase/FirebaseUtils";
//import FormInput from "../../utilities/form-input/FormInput";
//import SelectCollection from "../select-collection/SelectCollection";
//import CollectionList from "../collection-list/CollectionList";
import Collections from "../collections/Collections";
import ProductSmallImage from "../product-small-image/ProductSmallImage";
import FormInput from "../form-input/FormInput";
import FormInputSmall from "../form-input-small/FormInputSmall";
import { withRouter } from "react-router-dom";
import { exists } from "fs";
import Slider3in8 from "../slider-3-un-8-sec/Slider3in8";
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
    numberImageUrl: "",
    temporaryUrl: "",
    item: [],

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

          this.setState({ mainImageUrl: item.imageUrl1 });

          const title = item.title;
          const titleCode = item.titleCode;
          const priceInput = item.price;
          const discountPriceInput = item.discountPrice;
          const codeTovaraInput = item.codeTovara;

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
  handleChangeColor = (e) => {
    const { value, index } = e.target;
    //console.log(name, "***", value);
    console.log(index, "***");
    console.log(this.state.palitra, "***", this.state.palitra[index]);
    const palitra = [...this.state.palitra];
    //palitra[index].number = value;
    //this.setState({ palitra: palitra });
  };
  handleSubmitColor = () => {
    const object = {
      number: this.state.number,
      numberTitle: this.state.numberTitle,
      numberImageUrl: this.state.temporaryUrl,
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
    this.setState({
      palitra: [],
      number: "",
      numberTitle: "",
      numberImageUrl: "",
      temporaryUrl: "",
    });
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
    const filteredPalitra = palitra.filter((value, ind) => {
      if (ind === index) {
        imageName = value.number;
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
    //console.log("item-", this.state.item);
    const { id } = this.props;
    const {
      title,
      price,
      discountPrice,
      titleCode,
      codeTovara,
      description,
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
    } = this.state;
    const item = this.state.item;

    //: title

    //console.log("hhhhhhhhhh", string1);
    //console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", this.state);
    //console.log("--------item------------", item);
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
              <div className="title-brand">{title1}</div>
              <div className="title-name">{title2}</div>
              <div className="title-name1">{title3}</div>
              <div className="title-name2">{title4}</div>
              <div className="title-size">{title5}</div>
              <div className="title-producer">{title6}</div>
              <div className="title-code-tovara">{codeTovara}</div>
              <div
                className={`${
                  discountPrice !== "" ? "line-through" : ""
                } title-price`}
              >
                {price} грн.
              </div>
              {discountPrice && (
                <div>
                  {" "}
                  <div className="title-discount-price">
                    {discountPrice} грн.
                  </div>
                  <div>
                    Знижка-
                    {Math.floor(
                      ((price - discountPrice) / discountPrice) * 100
                    )}
                    %
                  </div>
                </div>
              )}

              {editMode === true && (
                <div className="edit-group">
                  {/*********   name="title1"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="title1Input"
                      label="БРЕНД"
                      value={title1Input}
                      onChange={this.handleChangeStateByName}
                    />

                    {/* <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title1")}
                    >
                      Отмена
                    </button> */}
                  </div>
                  {/*********   name="title2"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="title2Input"
                      label="Название"
                      value={title2Input}
                      onChange={this.handleChangeStateByName}
                    />
                    {/* <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title2")}
                    >
                      Отмена
                    </button> */}
                  </div>
                  {/*********   name="title3"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="title3Input"
                      label="Подробное название - 1 строка"
                      value={title3Input}
                      onChange={this.handleChangeStateByName}
                    />
                    {/* <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title3")}
                    >
                      Отмена
                    </button> */}
                  </div>
                  {/*********   name="title4"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="title4Input"
                      label="Подробное название - 2 строка"
                      value={title4Input}
                      onChange={this.handleChangeStateByName}
                    />
                  </div>
                  {/*********   name="title5"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="title5Input"
                      label="Объём"
                      value={title5Input}
                      onChange={this.handleChangeStateByName}
                    />
                  </div>
                  {/*********   name="title6"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="title6Input"
                      label="Страна"
                      value={title6Input}
                      onChange={this.handleChangeStateByName}
                    />
                  </div>
                  {/*********   name="price"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="priceInput"
                      value={priceInput}
                      label="Цена"
                      onChange={this.handleChangeStateByName}
                    />
                  </div>
                  {/*********   name="discountPrice"*******/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="discountPriceInput"
                      value={discountPriceInput}
                      label="Цена со скидкой"
                      onChange={this.handleChangeStateByName}
                    />
                  </div>
                  {/*********   name="codeTovara"   ************/}
                  <div className="edit-field-container">
                    <FormInputSmall
                      type="text"
                      name="codeTovaraInput"
                      value={codeTovaraInput}
                      label="Код товара"
                      onChange={this.handleChangeStateByName}
                    />
                  </div>
                  {/*********   name="novinka"   ************/}
                  <div className="edit-field-container novinka">
                    {/* <label htmlFor="novinka">Novinka</label> */}
                    <FormInputSmall
                      id="novinka"
                      type="checkbox"
                      name="novinka"
                      value={novinka}
                      checked={novinka}
                      label="НОВИНКА"
                      onChange={() => this.setState({ novinka: !novinka })}
                    />
                  </div>

                  <button
                    className="x-button"
                    onClick={() => this.handleSubmitAll()}
                  >
                    Сохранить
                  </button>
                </div>
              )}
            </div>
          </div>

          {/*********   name="palitra"   ************/}
          {palitra && console.log(palitra)}
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
                  <div>
                    <button onClick={() => this.handleDeleteColor(index)}>
                      Delete
                    </button>{" "}
                    {/**/}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="description-block">
            <div className="table-description">Description</div>
          </div>
          <Slider3in8 />
          {editMode === true ? (
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

              <button
                className="x-button"
                onClick={() => this.handleSubmitColor()}
              >
                Submit Palitra
              </button>
            </div>
          ) : null}
          {editMode === true ? (
            <div>
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

export default withRouter(Product);
