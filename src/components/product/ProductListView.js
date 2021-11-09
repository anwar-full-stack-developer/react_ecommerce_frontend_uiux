import React from "react";
import pp1 from "./../../assets/images/1.jpg";
import pp2_1 from "./../../assets/images/2_1.jpg";
import pp3 from "./../../assets/images/3.jpg";
import pp4 from "./../../assets/images/4.jpg";
import pp5 from "./../../assets/images/5.jpg";
import pp6 from "./../../assets/images/6.jpg";
import pp7 from "./../../assets/images/7.jpg";
import pp9 from "./../../assets/images/9.jpg";

class ProductListView extends React.Component {
  render() {
    return (
      <div>
        <article class="card card-product-list">
          <div class="row no-gutters">
            <aside class="col-md-3">
              <a href="#" class="img-wrap">
                <span class="badge badge-danger"> NEW </span>
                <img src={pp3} />
              </a>
            </aside>
            <div class="col-md-6">
              <div class="info-main">
                <a href="#" class="h5 title">
                  {" "}
                  Great product name goes here{" "}
                </a>
                <div class="rating-wrap mb-3">
                  <ul class="rating-stars">
                    <li  class="stars-active">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <div class="label-rating">7/10</div>
                </div>

                <p>
                  {" "}
                  Take it as demo specs, ipsum dolor sit amet, consectetuer
                  adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, Ut wisi enim ad minim veniam{" "}
                </p>
              </div>
            </div>
            <aside class="col-sm-3">
              <div class="info-aside">
                <div class="price-wrap">
                  <span class="price h5"> $140 </span>
                  <del class="price-old"> $198</del>
                </div>
                <p class="text-success">Free shipping</p>
                <br />
                <p>
                  <a href="#" class="btn btn-primary btn-block">
                    {" "}
                    Details{" "}
                  </a>
                  <a href="#" class="btn btn-light btn-block">
                    <i class="fa fa-heart"></i>
                    <span class="text">Add to wishlist</span>
                  </a>
                  
                  <a href="#" class="btn btn-primary btn-block">
                  <i class="fa fa-cart-plus"></i>  {" "}
                   Add to Cart
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </article>
        <article class="card card-product-list">
          <div class="row no-gutters">
            <aside class="col-md-3">
              <a href="#" class="img-wrap">
                <img src={pp4} />
              </a>
            </aside>
            <div class="col-md-6">
              <div class="info-main">
                <a href="#" class="h5 title">
                  {" "}
                  Great product name goes here{" "}
                </a>
                <div class="rating-wrap mb-3">
                  <ul class="rating-stars">
                    <li  class="stars-active">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <div class="label-rating">7/10</div>
                </div>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut
                  wisi enim ad minim veniam{" "}
                </p>
              </div>
            </div>
            <aside class="col-sm-3">
              <div class="info-aside">
                <div class="price-wrap">
                  <span class="price h5"> $56 </span>
                  <del class="price-old"> $85</del>
                </div>
                <p class="text-success">Free shipping</p>
                <br />
                <p>
                  <a href="#" class="btn btn-primary btn-block">
                    {" "}
                    Details{" "}
                  </a>
                  <a href="#" class="btn btn-light btn-block">
                    <i class="fa fa-heart"></i>
                    <span class="text">Add to wishlist</span>
                  </a>
                  <a href="#" class="btn btn-primary btn-block">
                  <i class="fa fa-cart-plus"></i>  {" "}
                   Add to Cart
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </article>
        <article class="card card-product-list">
          <div class="row no-gutters">
            <aside class="col-md-3">
              <a href="#" class="img-wrap">
                <img src={pp5} />
              </a>
            </aside>
            <div class="col-md-6">
              <div class="info-main">
                <a href="#" class="h5 title">
                  {" "}
                  Great product name goes here{" "}
                </a>
                <div class="rating-wrap mb-3">
                  <ul class="rating-stars">
                    <li  class="stars-active">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <div class="label-rating">7/10</div>
                </div>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut
                  wisi enim ad minim veniam{" "}
                </p>
              </div>
            </div>
            <aside class="col-sm-3">
              <div class="info-aside">
                <div class="price-wrap">
                  <span class="price h5"> $56.00 </span>
                </div>
                <p class="text-success">Free shipping</p>
                <br />
                <p>
                  <a href="#" class="btn btn-primary btn-block">
                    {" "}
                    Details{" "}
                  </a>
                  <a href="#" class="btn btn-light btn-block">
                    <i class="fa fa-heart"></i>
                    <span class="text">Add to wishlist</span>
                  </a>
                  <a href="#" class="btn btn-primary btn-block">
                  <i class="fa fa-cart-plus"></i>  {" "}
                   Add to Cart
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </article>
        <article class="card card-product-list">
          <div class="row no-gutters">
            <aside class="col-md-3">
              <a href="#" class="img-wrap">
                <img src={pp6} />
              </a>
            </aside>
            <div class="col-md-6">
              <div class="info-main">
                <a href="#" class="h5 title">
                  {" "}
                  Product name can be here{" "}
                </a>
                <div class="rating-wrap mb-3">
                  <ul class="rating-stars">
                    <li  class="stars-active">
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                  <div class="label-rating">7/10</div>
                </div>

                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut
                  wisi enim ad minim veniam{" "}
                </p>
              </div>
            </div>
            <aside class="col-sm-3">
              <div class="info-aside">
                <div class="price-wrap">
                  <span class="price h5"> $62 </span>
                </div>
                <p class="text-success">Free shipping</p>
                <br />
                <p>
                  <a href="#" class="btn btn-primary btn-block">
                    {" "}
                    Details{" "}
                  </a>
                  <a href="#" class="btn btn-light btn-block">
                    <i class="fa fa-heart"></i>
                    <span class="text">Add to wishlist</span>
                  </a>
                  <a href="#" class="btn btn-primary btn-block">
                  <i class="fa fa-cart-plus"></i>  {" "}
                   Add to Cart
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
    );
  }
}

export default ProductListView;
