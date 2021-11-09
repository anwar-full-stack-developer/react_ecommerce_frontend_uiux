import { event } from "jquery";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { listProducts } from "../../actions/productActions";

import pp1 from "./../../assets/images/1.jpg";
import pp2_1 from "./../../assets/images/2_1.jpg";
import pp3 from "./../../assets/images/3.jpg";
import pp4 from "./../../assets/images/4.jpg";
import pp5 from "./../../assets/images/5.jpg";
import pp6 from "./../../assets/images/6.jpg";
import pp7 from "./../../assets/images/7.jpg";
import pp9 from "./../../assets/images/9.jpg";
import paymentsImg from "./../../assets/images/payments.png";

class Checkout extends React.Component {
  render() {
    return (
      <>
        <section class="section-content padding-y bg">
          <div class="container">
            <div class="row">
              <main class="col-md-8">
                <article class="card mb-4">
                  <div class="card-body">
                    <h4 class="card-title mb-4">Review cart</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <figure class="itemside  mb-4">
                          <div class="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/1.jpg"
                              class="border img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <p>Apple iPad (2019) 32Gb Wi-Fi gold </p>
                            <span class="text-muted">2x = $560 </span>
                          </figcaption>
                        </figure>
                      </div>
                      <div class="col-md-6">
                        <figure class="itemside  mb-4">
                          <div class="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/2.jpg"
                              class="border img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <p>Apple iPad (2019) 32Gb Wi-Fi gold </p>
                            <span class="text-muted">2x = $560 </span>
                          </figcaption>
                        </figure>
                      </div>
                      <div class="col-md-6">
                        <figure class="itemside mb-4">
                          <div class="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/3.jpg"
                              class="border img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <p>Apple iPad (2019) 32Gb Wi-Fi gold </p>
                            <span class="text-muted">2x = $560 </span>
                          </figcaption>
                        </figure>
                      </div>
                      <div class="col-md-6">
                        <figure class="itemside  mb-4">
                          <div class="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/4.jpg"
                              class="border img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <p>Apple iPad (2019) 32Gb Wi-Fi gold </p>
                            <span class="text-muted">2x = $560 </span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  
                <article class="card-body border-top">
                  <dl class="row">
                    <dt class="col-sm-10">
                      Subtotal:{" "}
                      <span class="float-right text-muted">2 items</span>
                    </dt>
                    <dd class="col-sm-2 text-right">
                      <strong>$1,568</strong>
                    </dd>

                    <dt class="col-sm-10">
                      Discount:{" "}
                      <span class="float-right text-muted">10% offer</span>
                    </dt>
                    <dd class="col-sm-2 text-danger text-right">
                      <strong>$29</strong>
                    </dd>

                    <dt class="col-sm-10">
                      Delivery charge:{" "}
                      <span class="float-right text-muted">
                        Express delivery
                      </span>
                    </dt>
                    <dd class="col-sm-2 text-right">
                      <strong>$120</strong>
                    </dd>

                    <dt class="col-sm-10">
                      Tax: <span class="float-right text-muted">5%</span>
                    </dt>
                    <dd class="col-sm-2 text-right text-success">
                      <strong>$7</strong>
                    </dd>

                    <dt class="col-sm-10">Total:</dt>
                    <dd class="col-sm-2 text-right">
                      <strong class="h5 text-dark">$1,650</strong>
                    </dd>
                  </dl>
                </article>
                </article>

                <article class="card mb-4">
                  <div class="card-body">
                    <h4 class="card-title mb-4">Contact info</h4>
                    <form action="">
                      <div class="row">
                        <div class="form-group col-sm-6">
                          <label>Frst name</label>
                          <input
                            type="text"
                            placeholder="Type here"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label>Last name</label>
                          <input
                            type="text"
                            placeholder="Type here"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label>Phone</label>
                          <input
                            type="text"
                            value="+998"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-6">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="example@gmail.com"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </article>

                <article class="card mb-4">
                  <div class="card-body">
                    <h4 class="card-title mb-4">Delivery info</h4>
                    <form action="">
                      <div class="row">
                        <div class="form-group col-sm-6">
                          <label class="js-check box">
                            <input
                              type="radio"
                              name="dostavka"
                              value="option1"
                              checked=""
                            />
                            <h6 class="title">Delivery</h6>
                            <p class="text-muted">
                              We will deliver by DHL Kargo
                            </p>
                          </label>
                        </div>
                        <div class="form-group col-sm-6">
                          <label class="js-check box active">
                            <input
                              type="radio"
                              name="dostavka"
                              value="option1"
                            />
                            <h6 class="title">Pick-up</h6>
                            <p class="text-muted">
                              Come to our office to somewhere{" "}
                            </p>
                          </label>
                        </div>
                      </div>

                      <div class="row">
                        <div class="form-group col-sm-6">
                          <label>City*</label>
                          <select name="" class="form-control">
                            <option value="">Tashkent</option>
                            <option value="">Buxoro</option>
                            <option value="">Samarqand</option>
                          </select>
                        </div>
                        <div class="form-group col-sm-6">
                          <label>Area*</label>
                          <input
                            type="text"
                            placeholder="Type here"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-8">
                          <label>Street*</label>
                          <input
                            type="text"
                            placeholder="Type here"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-4">
                          <label>Building</label>
                          <input
                            type="text"
                            placeholder=""
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-4">
                          <label>House</label>
                          <input
                            type="text"
                            placeholder="Type here"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-4">
                          <label>Postal code</label>
                          <input
                            type="text"
                            placeholder=""
                            class="form-control"
                          />
                        </div>
                        <div class="form-group col-sm-4">
                          <label>Zip</label>
                          <input
                            type="text"
                            placeholder=""
                            class="form-control"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </article>

                <article class="accordion" id="accordion_pay">
                  <div class="card">
                    <header class="card-header">
                      <img
                        src="bootstrap-ecommerce-html/images/misc/payment-paypal.png"
                        class="float-right"
                        height="24"
                      />
                      <label
                        class="form-check collapsed"
                        data-toggle="collapse"
                        data-target="#pay_paynet"
                      >
                        <input
                          class="form-check-input"
                          name="payment-option"
                          checked=""
                          type="radio"
                          value="option2"
                        />
                        <h6 class="form-check-label">Paypal</h6>
                      </label>
                    </header>
                    <div
                      id="pay_paynet"
                      class="collapse show"
                      data-parent="#accordion_pay"
                    >
                      <div class="card-body">
                        <p class="text-center text-muted">
                          Connect your PayPal account and use it to pay your
                          bills. You'll be redirected to PayPal to add your
                          billing information.
                        </p>
                        <p class="text-center">
                          <a href="#">
                            <img
                              src="bootstrap-ecommerce-html/images/misc/btn-paypal.png"
                              height="32"
                            />
                          </a>
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <header class="card-header">
                      <img
                        src="bootstrap-ecommerce-html/images/misc/payment-card.png"
                        class="float-right"
                        height="24"
                      />
                      <label
                        class="form-check"
                        data-toggle="collapse"
                        data-target="#pay_payme"
                      >
                        <input
                          class="form-check-input"
                          name="payment-option"
                          type="radio"
                          value="option2"
                        />
                        <h6 class="form-check-label"> Credit Card </h6>
                      </label>
                    </header>
                    <div
                      id="pay_payme"
                      class="collapse"
                      data-parent="#accordion_pay"
                    >
                      <div class="card-body">
                        <p class="alert alert-success">
                          Some information or instruction
                        </p>
                        <form class="form-inline">
                          <input
                            type="text"
                            class="form-control mr-2"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            name=""
                          />
                          <input
                            type="text"
                            class="form-control mr-2"
                            placeholder="dd/yy"
                            name=""
                          />
                          <input
                            type="number"
                            maxlength="3"
                            class="form-control mr-2"
                            placeholder="cvc"
                            name=""
                          />
                          <button class="btn btn btn-success">Button</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <header class="card-header">
                      <img
                        src="bootstrap-ecommerce-html/images/misc/payment-bank.png"
                        class="float-right"
                        height="24"
                      />
                      <label
                        class="form-check"
                        data-toggle="collapse"
                        data-target="#pay_card"
                      >
                        <input
                          class="form-check-input"
                          name="payment-option"
                          type="radio"
                          value="option1"
                        />
                        <h6 class="form-check-label"> Bank Transfer </h6>
                      </label>
                    </header>
                    <div
                      id="pay_card"
                      class="collapse"
                      data-parent="#accordion_pay"
                    >
                      <div class="card-body">
                        <p class="text-muted">
                          Some instructions about how to pay{" "}
                        </p>
                        <p>
                          Bank of America, Account number: 12345678912346 <br />
                          IBAN: 12345, SWIFT: 987654
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <header class="card-header">
                      
                      <label
                        class="form-check"
                        data-toggle="collapse"
                        data-target="#cash_on_delivery"
                      >
                        <input
                          class="form-check-input"
                          name="payment-option"
                          type="radio"
                          value="option1"
                        />
                        <h6 class="form-check-label"> Cash on Delivery </h6>
                      </label>
                    </header>
                    <div
                      id="cash_on_delivery"
                      class="collapse"
                      data-parent="#accordion_pay"
                    >
                      <div class="card-body">
                        <p class="text-muted">
                          Some instructions about how to pay{" "}
                        </p>
                        <p>
                          Bank of America, Account number: 12345678912346 <br />
                          IBAN: 12345, SWIFT: 987654
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </main>
              <aside class="col-md-4">
                <div class="card shadow">
                  <div class="card-body">
                    <h4 class="mb-3">Overview</h4>
                    <dl class="dlist-align">
                      <dt class="text-muted">Delivery:</dt>
                      <dd>Pick-up</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt class="text-muted">Delivery type:</dt>
                      <dd>Standart</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt class="text-muted">Payment method:</dt>
                      <dd>Cash</dd>
                    </dl>
                    <hr />
                    <dl class="dlist-align">
                      <dt>Total:</dt>
                      <dd class="h5">$300.50</dd>
                    </dl>
                    <hr />
                    <p class="small mb-3 text-muted">
                      By clicking you are agree with terms of condition{" "}
                    </p>
                    <a href="#" class="btn btn-primary btn-block">
                      
                      Confirm Checkout
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Checkout;
