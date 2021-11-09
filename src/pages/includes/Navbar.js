import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav"
          aria-controls="main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <Link
                class="nav-link"
                to="/"
                >Home</Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/product"
                >Products</Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/about"
                >About</Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/page-index-2.html#"
                >Supermarket</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/page-index-2.html#"
                >Partnership</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/page-index-2.html#"
                >Baby &amp; Toys</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/page-index-2.html#"
                >Fitness sport</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/page-index-2.html#"
                >Clothing</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/page-index-2.html#"
                >Furnitures</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#/page-index-2.html#"
                aria-expanded="false"
              >
                More</a
              >
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  href="#/page-index-2.html#"
                  >Foods and Drink</a
                >
                <a
                  class="dropdown-item"
                  href="#/page-index-2.html#"
                  >Home interior</a
                >
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#/page-index-2.html#"
                  >Category 1</a
                >
                <a
                  class="dropdown-item"
                  href="#/page-index-2.html#"
                  >Category 2</a
                >
                <a
                  class="dropdown-item"
                  href="#/page-index-2.html#"
                  >Category 3</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;
