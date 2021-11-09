import React, { useEffect } from "react";
import { Link } from "react-router-dom";

class MyAccountNevLeft extends React.Component {
    constructor(props) {
      super(props);
      this.navActiveClass = this.navActiveClass.bind(this);
    }

    navActiveClass = (checkStr) => {
      return this.props?.navActive === checkStr ? ' active ' : ' ';
    };

  render() {
    return (
      <>
        <ul className="list-group">
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-order-history"))}>
            <Link to="/myaccount-order-history"> My order history </Link>{" "}
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-order-tracking"))}>
            <Link to="/myaccount-order-tracking"> My order tracking </Link>{" "}
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-transaction-history"))}>
            <Link to="/myaccount-transaction-history">My Transactions </Link>{" "}
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-return-refund"))}>
            <Link to="/myaccount-return-refund">My Return and refunds </Link>
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-wishlist"))}>
            <Link to="/myaccount-wishlist"> My Wishlist </Link>{" "}
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-selling-items"))}>
            <Link to="/myaccount-selling-items"> My Selling Items </Link>
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-received-orders"))}>
            <Link to="/myaccount-received-orders"> My Received orders</Link>
          </li>
          <li className={"list-group-item".concat(this.navActiveClass("myaccount-settings"))}>
            <Link to="/myaccount-settings"> My Account Settings </Link>{" "}
          </li>
        </ul>
        <br />
        <Link className="btn btn-light btn-block" to="/logout">
          {" "}
          <i className="fa fa-power-off" />{" "}
          <span className="text">Log out</span>{" "}
        </Link>
      </>
    );
  }
}

export default MyAccountNevLeft;
