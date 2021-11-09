import React from "react";
import pp1 from "./../../assets/images/1.jpg";
import pp2_1 from "./../../assets/images/2_1.jpg";
import pp3 from "./../../assets/images/3.jpg";
import pp4 from "./../../assets/images/4.jpg";
import pp5 from "./../../assets/images/5.jpg";
import pp6 from "./../../assets/images/6.jpg";
import pp7 from "./../../assets/images/7.jpg";
import pp9 from "./../../assets/images/9.jpg";

class ProductGridView extends React.Component {
  render() {
    return (
      <div class="row">
      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <span class="badge badge-danger"> NEW </span>
            <img src={pp1} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Great item name goes here
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
                <del class="price-old">$1980</del>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp2_1} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp3} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp4} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp5} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp6} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp7} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure class="card card-product-grid">
          <div class="img-wrap">
            <img src={pp1} />
            <a class="btn-overlay" href="#">
              <i class="fa fa-search-plus"></i> Quick view
            </a>
          </div>
          <figcaption class="info-wrap">
            <div class="fix-height">
              <a href="#" class="title">
                Product name goes here just for demo item
              </a>
              <div class="price-wrap mt-2">
                <span class="price">$1280</span>
              </div>
            </div>
            <a href="#" class="btn btn-block btn-primary">
              Add to cart{" "}
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
    );
  }
}

export default ProductGridView;
