import React, { useEffect } from "react";
import MyAccountNevLeft from "./MyAccountNavLeft";

class MyWishlist extends React.Component {
  render() {
    return (
      <>
        <section className="section-content padding-y bg">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <MyAccountNevLeft navActive="myaccount-wishlist" />
              </aside>
              <main className="col-md-9">
                <article className="card">
                  <header className="card-header"> My wishlist </header>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <figure className="itemside mb-4">
                          <div className="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/1.jpg"
                              className="border img-md"
                            />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title">
                              Some name of item goes here nice
                            </a>
                            <p className="price mb-2">$1280</p>
                            <a href="#" className="btn btn-primary btn-sm">
                              {" "}
                              Add to cart{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              data-toggle="tooltip"
                              title
                              data-original-title="Remove from wishlist"
                            >
                              {" "}
                              <i className="fa fa-times" />{" "}
                            </a>
                          </figcaption>
                        </figure>
                      </div>{" "}
                      {/* col.// */}
                      <div className="col-md-4">
                        <figure className="itemside mb-4">
                          <div className="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/2.jpg"
                              className="border img-md"
                            />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title">
                              Great product name should be here
                            </a>
                            <p className="price mb-2">$1280</p>
                            <a href="#" className="btn btn-primary btn-sm">
                              {" "}
                              Add to cart{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              data-toggle="tooltip"
                              title
                              data-original-title="Remove from wishlist"
                            >
                              {" "}
                              <i className="fa fa-times" />{" "}
                            </a>
                          </figcaption>
                        </figure>
                      </div>{" "}
                      {/* col.// */}
                      <div className="col-md-4">
                        <figure className="itemside mb-4">
                          <div className="aside">
                            <img
                              src="bootstrap-ecommerce-html/images/items/3.jpg"
                              className="border img-md"
                            />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title">
                              Another name of item goes here{" "}
                            </a>
                            <p className="price mb-2">$1280</p>
                            <a href="#" className="btn btn-primary btn-sm">
                              {" "}
                              Add to cart{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              data-toggle="tooltip"
                              title
                              data-original-title="Remove from wishlist"
                            >
                              {" "}
                              <i className="fa fa-times" />{" "}
                            </a>
                          </figcaption>
                        </figure>
                      </div>{" "}
                      {/* col.// */}
                    </div>{" "}
                    {/* row .//  */}
                  </div>
                </article>
              </main>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyWishlist;
