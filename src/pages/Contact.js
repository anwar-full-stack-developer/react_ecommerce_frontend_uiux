import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./../actions/productActions";
class Contact extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    console.log("contact us page");
    this.state = {
      counter: 10,
      productList: [],
    };
    console.log("props ", props);
    //bind actions from outside [it works]
    this.actions = bindActionCreators(productActions, dispatch);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let counter = this.state.counter + 1;
    this.setState({ counter });
    // this.state.counter = this.state.counter++;
  }
  async componentDidMount() {
    this.setState({ counter: 11 });
    try {
      const products = await this.props.listProducts();
      this.setState({ productList: products });
    } catch (exception) {}
  }
  render() {
    return (
      <div>
        <h1>Contact page</h1>
        <button onClick={this.handleClick}>
          Add counter : {this.state.counter}
        </button>
        <h4>props oCounter: {this.props.oCounter}</h4>
        <h5>listProducts {this.state.productList}</h5>
      </div>
    );
  }
}


//pass state or initial state from outside to connect with component
const mapStateToProps = (state) => {
  return {
    oCounter: 200,
    oCounterSource: "outside",
  };
};

//pass dispatch from outside to connect with component
const mapDispatchToProps = (dispatch) => {
  return {
    listProducts: (event) => dispatch(productActions.listProducts()),
  };
};
// export default Contact;
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
