import React, { useEffect } from "react";
import MyAccountNevLeft from "./MyAccountNavLeft";

class MyOrderTracking extends React.Component {
  render() {
    return (
      <>
        <section className="section-content padding-y bg">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <MyAccountNevLeft navActive="myaccount-order-tracking" />
              </aside>
              <main className="col-md-9">
                <article className="card">
                  <header className="card-header">
                    {" "}
                    My Orders / Tracking{" "}
                  </header>
                  <div className="card-body">
                    <h6>Order ID: 09876545678</h6>
                    <article className="card">
                      <div className="card-body row no-gutters">
                        <div className="col">
                          <strong>Delivery Estimate time:</strong> <br />
                          16:40, 12 nov 2018
                        </div>
                        <div className="col">
                          <strong>Shipping company:</strong> <br /> Fedex, |{" "}
                          <i className="fa fa-phone" /> +123467890
                        </div>
                        <div className="col">
                          <strong>Status:</strong> <br /> Picked by the courier
                        </div>
                        <div className="col">
                          <strong>Tracking #:</strong> <br /> 98765432123
                        </div>
                      </div>
                    </article>
                    <div className="tracking-wrap">
                      <div className="step active">
                        <span className="icon">
                          {" "}
                          <i className="fa fa-check" />{" "}
                        </span>
                        <span className="text">Order confirmed</span>
                      </div>{" "}
                      {/* step.// */}
                      <div className="step active">
                        <span className="icon">
                          {" "}
                          <i className="fa fa-user" />{" "}
                        </span>
                        <span className="text"> Picked by courier</span>
                      </div>{" "}
                      {/* step.// */}
                      <div className="step">
                        <span className="icon">
                          {" "}
                          <i className="fa fa-truck" />{" "}
                        </span>
                        <span className="text"> On the way </span>
                      </div>{" "}
                      {/* step.// */}
                      <div className="step">
                        <span className="icon">
                          {" "}
                          <i className="fa fa-box" />{" "}
                        </span>
                        <span className="text">Ready for pickup</span>
                      </div>{" "}
                      {/* step.// */}
                    </div>
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
                              Just name of title or <br /> some name goes here
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
                              Great demo product title <br /> or name goes here
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
                              Another demo product title <br /> or name goes
                              here
                            </p>
                            <span className="text-muted">$145 </span>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                    <p>
                      <strong>Note: </strong>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                    <a href="#" className="btn btn-light">
                      {" "}
                      <i className="fa fa-chevron-left" /> Back to orders
                    </a>
                  </div>{" "}
                  {/* card-body.// */}
                </article>
              </main>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyOrderTracking;
