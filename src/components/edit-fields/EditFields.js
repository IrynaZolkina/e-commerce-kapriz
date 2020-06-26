import React, { Component } from "react";
import { firestore } from "../../firebase/FirebaseUtils";
//import FormInput from "../utilities/form-input/FormInput";

class EditFields extends Component {
  state = {
    reserveItem: [],
    item: [],
    title: "",
  };
  componentDidMount = () => {
    firestore
      .collection("items")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        this.setState({ reserveItem: doc.data() });
        this.setState({ item: doc.data() });
      });
    this.setState({ title: this.props.item.title });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ titleNew: value });
    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
    console.log(this.state.reserveItem, "---this.state.reserveItem");
  };
  handleDiscardTitle = (event) => {
    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ title: this.state.reserveItem.title }, { merge: true });
    console.log(this.state.reserveItem, "---this.state.reserveItem");
    //this.setState({item.title:})
  };

  render() {
    //console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", this.state.id);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", this.state.title);
    //var { id, title } = this.props;
    const { id } = this.props;

    return (
      <div>
        <h1> EDIT FIELDS component--------{id}</h1>
        <h1> EDIT FIELDS comp..........onent--------{this.state.title}</h1>
        <input
          type="text"
          name="title"
          defaultValue={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleDiscardTitle}>Discard</button>
      </div>
    );
  }
}

export default EditFields;
