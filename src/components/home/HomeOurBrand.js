import React from "react";
import logo1 from "./../../assets/images/brand/logo1.png";
import logo2 from "./../../assets/images/brand/logo2.png";
import logo3 from "./../../assets/images/brand/logo3.png";
import logo4 from "./../../assets/images/brand/logo4.png";
import logo5 from "./../../assets/images/brand/logo5.png";



class HomeOurBrand extends React.Component {
  render() {
    return (
      <section class="section-name bg padding-y-sm">
      <div class="container">
      <header class="section-heading">
        <h3 class="section-title">Our Brands</h3>
      </header>

      <div class="row">
        <div class="col-md-2 col-6">
          <figure class="box item-logo">
            <a href="#"><img src={logo1} /></a>
            <figcaption class="border-top pt-2">36 Products</figcaption>
          </figure>
        </div>
        <div class="col-md-2  col-6">
          <figure class="box item-logo">
            <a href="#"><img src={logo2} /></a>
            <figcaption class="border-top pt-2">980 Products</figcaption>
          </figure>
        </div> 
        <div class="col-md-2  col-6">
          <figure class="box item-logo">
            <a href="#"><img src={logo3} /></a>
            <figcaption class="border-top pt-2">25 Products</figcaption>
          </figure>
        </div> 
        <div class="col-md-2  col-6">
          <figure class="box item-logo">
            <a href="#"><img src={logo4} /></a>
            <figcaption class="border-top pt-2">72 Products</figcaption>
          </figure>
        </div> 
        <div class="col-md-2  col-6">
          <figure class="box item-logo">
            <a href="#"><img src={logo5} /></a>
            <figcaption class="border-top pt-2">41 Products</figcaption>
          </figure> 
        </div> 
        <div class="col-md-2  col-6">
          <figure class="box item-logo">
            <a href="#"><img src={logo2} /></a>
            <figcaption class="border-top pt-2">12 Products</figcaption>
          </figure> 
        </div>
      </div>
      </div>
      </section>
    );
  }
}

export default HomeOurBrand;
