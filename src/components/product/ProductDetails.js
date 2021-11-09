import { event } from "jquery";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { listProducts } from "../../actions/productActions";
import starActiveIcon from "./../../assets/images/icons/stars-active.svg";
import starInActiveIcon from "./../../assets/images/icons/starts-disable.svg";
import img12 from "./../../assets/images/12.jpg";
import avarter2 from "./../../assets/images/avarter/avatar2.jpg";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <section class="section-pagetop bg">
          <div class="container">
            <nav>
              <ol class="breadcrumb text-white">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Category</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Sub Category
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section class="section-content bg">
          <div class="container">
            <div className="card">
              <div className="row no-gutters">
                <aside className="col-md-6">
                  <article className="gallery-wrap">
                    <div className="img-big-wrap">
                      <a href="#">
                        <img src={img12} />
                      </a>
                    </div>{" "}
                    <div className="thumbs-wrap">
                      <a href="#" className="item-thumb">
                        {" "}
                        <img src={img12} />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img src={img12} />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img src={img12} />
                      </a>
                      <a href="#" className="item-thumb">
                        {" "}
                        <img src={img12} />
                      </a>
                    </div>{" "}
                  </article>{" "}
                </aside>
                <main className="col-md-6 border-left">
                  <article className="content-body">
                    <h2 className="title">
                      Off-White Odsy-1000 Low-Top Sneakers
                    </h2>
                    <div className="rating-wrap my-3">
                      <ul className="rating-stars">
                        <li style={{ width: "80%" }} className="stars-active">
                          <img
                            src={starActiveIcon}
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src={starInActiveIcon}
                            alt
                          />
                        </li>
                      </ul>
                      <small className="label-rating text-muted">
                        132 reviews
                      </small>
                      <small className="label-rating text-success">
                        {" "}
                        <i className="fa fa-clipboard-check" /> 154 orders{" "}
                      </small>
                    </div>
                    <div className="mb-3">
                      <var className="price h4">$815.00</var>
                      <span className="text-muted">/per kg</span>
                    </div>
                    <p>
                      Virgil Abloh’s Off-White is a streetwear-inspired
                      collection that continues to break away from the
                      conventions of mainstream fashion. Made in Italy, these
                      black and brown Odsy-1000 low-top sneakers.
                    </p>
                    <dl className="row">
                      <dt className="col-sm-3">Model#</dt>
                      <dd className="col-sm-9">
                        <div
                          class="btn-group btn-group-sm btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label class="btn btn-light active">
                            <input type="radio" name="radio_size" checked="" />{" "}
                            Xs
                          </label>
                          <label class="btn btn-light">
                            <input type="radio" name="radio_size" /> Xs Max
                          </label>
                        </div>
                      </dd>
                      <dt className="col-sm-3">Color</dt>
                      <dd className="col-sm-9">
                        <div
                          class="btn-group btn-group-sm btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label class="btn btn-light active">
                            <input type="radio" name="radio_color" /> Silver
                          </label>
                          <label class="btn btn-light">
                            <input type="radio" name="radio_color" checked="" />{" "}
                            Gray
                          </label>
                          <label class="btn btn-light">
                            <input type="radio" name="radio_color" /> Gold
                          </label>
                        </div>
                      </dd>
                      <dt className="col-sm-3">Capacity</dt>
                      <dd className="col-sm-9">
                        <div
                          class="btn-group btn-group-sm btn-group-toggle"
                          data-toggle="buttons"
                        >
                          <label class="btn btn-light active">
                            <input type="radio" name="options" checked="" /> 64
                            GB
                          </label>
                          <label class="btn btn-light">
                            <input type="radio" name="options" /> 256 GB
                          </label>
                          <label class="btn btn-light">
                            <input type="radio" name="options" /> 512 GB
                          </label>
                        </div>
                      </dd>
                      <dt className="col-sm-3">Delivery</dt>
                      <dd className="col-sm-9">Russia, USA, and Europe </dd>
                    </dl>
                    <hr />
                    <div className="row">
                      <div className="form-group col-md flex-grow-0">
                        <label>Quantity</label>
                        <div className="input-group mb-3 input-spinner">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-light"
                              type="button"
                              id="button-plus"
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={1}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-light"
                              type="button"
                              id="button-minus"
                            >
                              {" "}
                              −{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-md">
                        <label>Select size</label>
                        <div className="mt-2">
                          <label className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              name="select_size"
                              defaultChecked
                              className="custom-control-input"
                            />
                            <div className="custom-control-label">Small</div>
                          </label>
                          <label className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              name="select_size"
                              className="custom-control-input"
                            />
                            <div className="custom-control-label">Medium</div>
                          </label>
                          <label className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              name="select_size"
                              className="custom-control-input"
                            />
                            <div className="custom-control-label">Large</div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <a href="#" className="btn  btn-primary">
                      <span className="text">Add to cart</span>
                      <i className="fas fa-shopping-cart" />
                    </a>
                    {"   "}
                    <a href="#" class="btn  btn-light">
                      {" "}
                      <i class="fas fa-heart"></i>{" "}
                    </a>
                  </article>
                </main>
              </div>
            </div>
            <br />
            <br />
            <article class="card">
              <div class="card-body">
                <div class="row">
                  <aside class="col-md-6">
                    <h5>Parameters</h5>
                    <dl class="row">
                      <dt class="col-sm-3">Display</dt>
                      <dd class="col-sm-9">
                        13.3-inch LED-backlit display with IPS
                      </dd>
                      <dt class="col-sm-3">Processor</dt>
                      <dd class="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
                      <dt class="col-sm-3">Camera</dt>
                      <dd class="col-sm-9">720p FaceTime HD camera</dd>
                      <dt class="col-sm-3">Memory</dt>
                      <dd class="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                      <dt class="col-sm-3">Graphics</dt>
                      <dd class="col-sm-9">Intel Iris Plus Graphics 640</dd>
                    </dl>
                  </aside>
                  <aside class="col-md-6">
                    <h5>Features</h5>
                    <ul class="list-check">
                      <li>Best performance of battery</li>
                      <li>5 years warranty for this product</li>
                      <li>Amazing features and high quality</li>
                      <li>Best performance of battery</li>
                      <li>5 years warranty for this product</li>
                    </ul>
                  </aside>
                </div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-content padding-y bg">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <header className="section-heading">
                  <div className="rating-wrap">
                    <ul className="rating-stars stars-lg">
                      <li style={{ width: "80%" }} className="stars-active">
                        <img
                          src={starActiveIcon}
                          alt
                        />
                      </li>
                      <li>
                        <img
                          src={starInActiveIcon}
                          alt
                        />
                      </li>
                    </ul>
                    <strong className="label-rating text-lg">
                      {" "}
                      4.5 <span className="text-muted">| 112 reviews</span>
                    </strong>
                  </div>
                </header>
                <article className="box mb-3">
                  <div className="icontext w-100">
                    <img
                      src={avarter2}
                      className="img-xs icon rounded-circle"
                    />
                    <div className="text">
                      <span className="date text-muted float-md-right">
                        24.04.2020{" "}
                      </span>
                      <h6 className="mb-1">Mike John </h6>
                      <ul className="rating-stars">
                        <li style={{ width: "80%" }} className="stars-active">
                          <img
                            src={starActiveIcon}
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src={starInActiveIcon}
                            alt
                          />
                        </li>
                      </ul>
                      <span className="label-rating text-warning">Good</span>
                    </div>
                  </div>{" "}
                  <div className="mt-3">
                    <p>
                      Dummy comment Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                  </div>
                </article>
                <article className="box mb-3">
                  <div className="icontext w-100">
                    <img
                      src={avarter2}
                      className="img-xs icon rounded-circle"
                    />
                    <div className="text">
                      <span className="date text-muted float-md-right">
                        24.04.2020{" "}
                      </span>
                      <h6 className="mb-1">Alex Pushkin </h6>
                      <ul className="rating-stars">
                        <li style={{ width: "50%" }} className="stars-active">
                          <img
                            src={starActiveIcon}
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src={starInActiveIcon}
                            alt
                          />
                        </li>
                      </ul>
                      <span className="label-rating text-warning">Normal</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>
                      Not good item for dummy text item Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </article>
                <article className="box mb-3">
                  <div className="icontext w-100">
                    <img
                      src={avarter2}
                      className="img-xs icon rounded-circle"
                    />
                    <div className="text">
                      <span className="date text-muted float-md-right">
                        24.04.2020{" "}
                      </span>
                      <h6 className="mb-1">Muso Vosidov </h6>
                      <ul className="rating-stars">
                        <li style={{ width: "80%" }} className="stars-active">
                          <img
                            src={starActiveIcon}
                            alt
                          />
                        </li>
                        <li>
                          <img
                            src={starInActiveIcon}
                            alt
                          />
                        </li>
                      </ul>
                      <span className="label-rating text-warning">Good</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>
                      Dummy comment Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetails;
