import React, { Component } from "react";
import CustomButtonAdopted from "../../../components/custom-button-adopted/CustomButtonAdopted";
import FormInputSmall from "../../../components/form-input-small/FormInputSmall";
import { firestore } from "../../../firebase/FirebaseUtils";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cartActions";

class ProductTitleGroup extends Component {
  state = {
    title: "",
    price: 0,
    discountPrice: 0,

    titleCode: "",
    codeTovara: "",
    shortDescription: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    novinka: false,
    palitra: [],
    title1Input: "",
    title2Input: "",
    title3Input: "",
    title4Input: "",
    title5Input: "",
    title6Input: "",
    priceInput: "",
    discountPriceInput: "",
    codeTovaraInput: "",
    shortDescriptionInput: "",
  };
  componentDidMount = () => {
    const item = this.props.item;
    console.log(this.props.item, "-----------------ITEM");
    console.log(this.props, "--------PROPS");
    //const { codeTovara, discountPrice, price } = this.props.item;
    const {
      price,
      discountPrice,
      codeTovara,
      shortDescription,
      titleCode,
      title,
      palitra,
      novinka,
    } = item;

    console.log(
      codeTovara,
      discountPrice,
      price,
      "----------codeTovara, discountPrice, price-------ITEM"
    );
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

    this.setState({ price: price });
    this.setState({ priceInput: price });

    this.setState({ discountPrice: discountPrice });
    this.setState({ discountPriceInput: discountPrice });

    this.setState({ codeTovara: codeTovara });
    this.setState({ codeTovaraInput: codeTovara });

    this.setState({ shortDescription: shortDescription });
    this.setState({ shortDescriptionInput: shortDescription });

    this.setState({ novinka: novinka });
    this.setState({ palitra: palitra });
  };
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
  handleSubmitTitleGroup = () => {
    this.setState({ title1: this.state.title1Input });
    this.setState({ title2: this.state.title2Input });
    this.setState({ title3: this.state.title3Input });
    this.setState({ title4: this.state.title4Input });
    this.setState({ title5: this.state.title5Input });
    this.setState({ title6: this.state.title6Input });
    this.setState({ price: this.state.priceInput });
    this.setState({ discountPrice: this.state.discountPriceInput });
    this.setState({ shortDescription: this.state.shortDescription });
    this.setState({ codeTovara: this.state.codeTovaraInput });
    this.setState({ novinka: this.state.novinka });

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
        shortDescription: this.state.shortDescription,
        novinka: this.state.novinka,
      },
      { merge: true }
    );
    this.props.item.collectionsArray.map((collectionCode) => {
      //console.log("888", collectionCode);
      firestore.collection(collectionCode).doc(this.props.id).set(
        {
          title: string,
          titleCode: titleCode,

          price: this.state.priceInput,
          discountPrice: this.state.discountPriceInput,
          shortDescription: this.state.shortDescription,
          novinka: this.state.novinka,
        },
        { merge: true }
      );
    });
  };
  buttonAddItemToCart = (element) => {
    let item = {
      id: element.id,
      price: element.discountPrice,
      name: element.title,
      imageUrl1: element.imageUrl1,
      codeTovara: element.codeTovara,
    };
    this.props.addItem(item);
  };
  render() {
    const { editMode } = this.props;

    const {
      title1,
      title2,
      title3,
      title4,
      title5,
      title6,
      price,
      discountPrice,
      codeTovara,
      title1Input,
      title2Input,
      title3Input,
      title4Input,
      title5Input,
      title6Input,
      priceInput,
      discountPriceInput,
      codeTovaraInput,
      novinka,
      palitra,
    } = this.state;

    return (
      <div className="title-group">
        <div className="title-brand">{title1}</div>
        <div className="title-name">{title2}</div>
        <div className="title-name1">{title3}</div>
        <div className="title-name2">{title4}</div>
        <div className="title-size">{title5}</div>
        <div className="title-producer">{title6}</div>
        <div className="title-code-tovara">{codeTovara}</div>
        <div
          className={`${discountPrice !== 0 ? "line-through" : ""} title-price`}
        >
          {price} грн.
        </div>
        {discountPrice !== 0 && (
          <div>
            {" "}
            {console.log(discountPrice, "discountPrice")}
            <div className="title-discount-price">{discountPrice} грн.</div>
            <div>
              Знижка-
              {Math.floor(((price - discountPrice) / discountPrice) * 100)}%
            </div>
          </div>
        )}
        {palitra.length === 0 && (
          <div className="button-collection-items">
            <CustomButtonAdopted
              onClick={() => this.buttonAddItemToCart(this.props.item)}
              /*  onClick={() => this.props.addItem(this.props.item)} */
              inverted
            >
              В КОШИК
            </CustomButtonAdopted>
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
                type="number"
                step=".01"
                name="priceInput"
                value={priceInput}
                label="Цена"
                onChange={this.handleChangeStateByName}
              />
            </div>
            {/*********   name="discountPrice"*******/}
            <div className="edit-field-container">
              <FormInputSmall
                type="number"
                step=".01"
                name="discountPriceInput"
                value={discountPriceInput}
                label="Цена со скидкой"
                onChange={this.handleChangeStateByName}
              />
            </div>
            {/*********   name="codeTovara"   ************/}
            <div className="edit-field-container">
              {console.log(this.props.item.palitra, "this.props.item.palitra")}
              {this.props.item.palitra.length === 0 && (
                <FormInputSmall
                  type="text"
                  name="codeTovaraInput"
                  value={codeTovaraInput}
                  label="Код товара"
                  onChange={this.handleChangeStateByName}
                />
              )}
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
                onChange={this.handleChangeStateNovinka}
              />
            </div>

            <button className="x-button" onClick={this.handleSubmitTitleGroup}>
              Сохранить
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(ProductTitleGroup));
