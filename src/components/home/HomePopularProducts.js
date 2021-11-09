import React from "react";
import pp1 from "./../../assets/images/1.jpg";
import pp2_1 from "./../../assets/images/2_1.jpg";
import pp3 from "./../../assets/images/3.jpg";
import pp4 from "./../../assets/images/4.jpg";
import pp5 from "./../../assets/images/5.jpg";
import pp6 from "./../../assets/images/6.jpg";
import pp7 from "./../../assets/images/7.jpg";
import pp9 from "./../../assets/images/9.jpg";



class HomePopularProducts extends React.Component {
  render() {
    return (
      <section class="section-name padding-y-sm">
        <div class="container">
          <header class="section-heading">
            <a
              href="#/page-index-2.html#"
              class="btn btn-outline-primary float-right"
            >
              See all
            </a>
            <h3 class="section-title">Popular products</h3>
          </header>

          <div class="row">
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp1} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp2_1} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Some item name here
                  </a>
                  <div class="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp3} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Great product name here
                  </a>
                  <div class="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp4} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp5} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp6} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Some item name here
                  </a>
                  <div class="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp7} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Great product name here
                  </a>
                  <div class="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#/page-index-2.html#" class="img-wrap">
                  <img src={pp9} />
                </a>
                <figcaption class="info-wrap">
                  <a href="#/page-index-2.html#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePopularProducts;
