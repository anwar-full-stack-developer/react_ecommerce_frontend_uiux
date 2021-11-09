import React, { useEffect } from "react";
import MyAccountNevLeft from "./MyAccountNavLeft";

class MyTransactionHistory extends React.Component {
  render() {
    return (
      <>
        <section className="section-content padding-y bg">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <MyAccountNevLeft navActive="myaccount-transaction-history" />
              </aside>
              <div className="col-md-9">
                <article className="card order-group">
                  <header className="card-header">
                    <b className="d-inline-block mr-3">
                      Transaction ID: 6123456789
                    </b>
                    <span>Date: 16 December 2018</span>
                  </header>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="text-muted">Payment</h6>
                        <span className="text-success">
                          <i className="fab fa-lg fa-cc-visa" />
                          Visa **** 4216
                        </span>
                        <p>
                          Subtotal: $356 <br />
                          Shipping fee: $56 <br />
                          <span className="b">Total: $456 </span>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="text-muted">Contact</h6>
                        <p>
                          Michael Jackson <br /> +1234567890 <br />{" "}
                          somename@gmail.com
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="text-muted">Shipping address</h6>
                        <p>
                          {" "}
                          Home 123, Building name, Street abcd, Tashkent
                          Uzbekistan
                        </p>
                      </div>
                    </div>{" "}
                    {/* row.// */}
                    <hr />
                    <ul className="row">
                      <li className="col-md-4">
                        <figure className="itemside  mb-3">
                          <div className="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/1.jpg"
                              className="img-sm border"
                            />
                          </div>
                          <figcaption className="info align-self-center">
                            <p className="title">
                              Just name of title or name goes here
                            </p>
                            <span className="text-muted">$145 </span>
                          </figcaption>
                        </figure>
                      </li>
                      <li className="col-md-4">
                        <figure className="itemside  mb-3">
                          <div className="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/2.jpg"
                              className="img-sm border"
                            />
                          </div>
                          <figcaption className="info align-self-center">
                            <p className="title">
                              Just name of title or name goes here
                            </p>
                            <span className="text-muted">$250 </span>
                          </figcaption>
                        </figure>
                      </li>
                      <li className="col-md-4">
                        <figure className="itemside mb-3">
                          <div className="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/3.jpg"
                              className="img-sm border"
                            />
                          </div>
                          <figcaption className="info align-self-center">
                            <p className="title">
                              Just name of title or name goes here
                            </p>
                            <span className="text-muted">$145 </span>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* card-body .// */}
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyTransactionHistory;
