import React from "react";
import { Link } from "react-router-dom";
import logo from './../../assets/images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">
                <Link to="/" class="brand-wrap">
                  <img class="logo" src={logo} />
                </Link>
              </div>
              <div class="col-lg-6 col-sm-12">
                <form action="#/page-index-2.html#" class="search">
                  <div class="input-group w-100">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header mr-3">
                    <Link
                      to="/shopping-cart"
                      class="icon icon-sm rounded-circle border"
                    >
                      <i class="fa fa-shopping-cart"></i>
                    </Link>
                    <span class="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div class="widget-header icontext">
                    <Link
                      to="/myaccount-order-history"
                      class="icon icon-sm rounded-circle border bg-primary"
                    >
                      <i class="fa fa-user white"></i>
                    </Link>
                    <div class="text">
                      <span class="text-muted">Welcome!</span>
                      <div>
                        <Link to="login">Sign in</Link>
                        <span> | </span>
                        <Link to="/register">Register</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
