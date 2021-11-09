import env from "./config/env.json";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//theme assets
import "./assets/bootstrap.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/ui.css";
import "./assets/responsive.css";

import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/script";

import configureAppStore from "./redux/configureAppStore";

import "./App.css";
import HomePage from "./components/home/HomePage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/includes/Footer";
import Header from "./pages/includes/Header";
import Navbar from "./pages/includes/Navbar";
import ProductPage from "./components/product/ProductPage";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Register from "./components/userAccount/Register";
import Login from "./components/userAccount/Login";
import ForgotPassword from "./components/userAccount/ForgotPassword";
import Checkout from "./components/shoppingCart/Checkout";
import MyTransactionHistory from "./components/myAccount/MyTransactionHistory";
import MyWishlist from "./components/myAccount/MyWishlist";
import MyOrderTracking from "./components/myAccount/MyOrderTracking";
import MyOrderHistory from "./components/myAccount/MyOrderHistory";
import MyReturnAndRefund from "./components/myAccount/MyReturnAndRefund";
import MyAccountSettings from "./components/myAccount/MyAccountSettings";
import MySellingItems from "./components/myAccount/MySellingItems";
import MyReceivedOrders from "./components/myAccount/MyReceivedOrders";
import ProductDetails from "./components/product/ProductDetails";

const store = configureAppStore();

function App() {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product">
            <ProductPage />
          </Route>
          <Route path="/product/:slug">
            <ProductDetails />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/myaccount-order-history">
            <MyOrderHistory />
          </Route>
          <Route path="/myaccount-transaction-history">
            <MyTransactionHistory />
          </Route>
          <Route path="/myaccount-wishlist">
            <MyWishlist />
          </Route>
          <Route path="/myaccount-order-tracking">
            <MyOrderTracking />
          </Route>
          <Route path="/myaccount-return-refund">
            <MyReturnAndRefund />
          </Route>
          <Route path="/myaccount-settings">
            <MyAccountSettings />
          </Route>
          <Route path="/myaccount-selling-items">
            <MySellingItems />
          </Route>
          <Route path="/myaccount-received-orders">
            <MyReceivedOrders />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
