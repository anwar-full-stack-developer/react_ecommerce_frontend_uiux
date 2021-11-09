import { event } from "jquery";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { listProducts } from "../../actions/productActions";
import MyAccountNevLeft from "./MyAccountNavLeft";


class MyOrderHistory extends React.Component {
  render() {
    return (
      <>
        <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <MyAccountNevLeft navActive="myaccount-order-history" />
            </aside>
            <main className="col-md-9">
              <article className="card">
                <header className="card-header">
                  <strong className="d-inline-block mr-3">Order ID: 6123456789</strong>
                  <span>Order Date: 16 December 2018</span>
                </header>
                <div className="card-body">
                  <div className="row"> 
                    <div className="col-md-8">
                      <h6 className="text-muted">Delivery to</h6>
                      <p>Michael Jackson <br />  
                        Phone +1234567890 Email: myname@pixsellz.com <br />
                        Location: Home number, Building name, Street 123,  Tashkent, UZB <br /> 
                        P.O. Box: 100123
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h6 className="text-muted">Payment</h6>
                      <span className="text-success">
                        <i className="fab fa-lg fa-cc-visa" />
                        Visa  **** 4216  
                      </span>
                      <p>Subtotal: $356 <br />
                        Shipping fee:  $56 <br /> 
                        <span className="b">Total:  $456 </span>
                      </p>
                    </div>
                  </div> {/* row.// */}
                </div> {/* card-body .// */}
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody><tr>
                        <td width={65}>
                          <img src="bootstrap-ecommerce-html/images/items/1.jpg" className="img-xs border" />
                        </td>
                        <td> 
                          <p className="title mb-0">Product name goes here </p>
                          <var className="price text-muted">USD 145</var>
                        </td>
                        <td> Seller <br /> Nike clothing </td>
                        <td width={250}> <a href="#" className="btn btn-outline-primary">Track order</a> <a href="#" className="btn btn-light"> Details </a> </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="bootstrap-ecommerce-html/images/items/2.jpg" className="img-xs border" />
                        </td>
                        <td> 
                          <p className="title mb-0">Another name goes here </p>
                          <var className="price text-muted">USD 15</var>
                        </td>
                        <td> Seller <br /> ABC shop </td>
                        <td> <a href="#" className="btn btn-outline-primary">Track order</a> <a href="#" className="btn btn-light"> Details </a> </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="bootstrap-ecommerce-html/images/items/3.jpg" className="img-xs border" />
                        </td>
                        <td> 
                          <p className="title mb-0">The name of the product  goes here </p>
                          <var className="price text-muted">USD 145</var>
                        </td>
                        <td> Seller <br /> Wallmart </td>
                        <td> <a href="#" className="btn btn-outline-primary">Track order</a> <a href="#" className="btn btn-light"> Details </a> </td>
                      </tr>
                    </tbody></table>
                </div> {/* table-responsive .end// */}
              </article> {/* order-group.// */} 
            </main>
          </div>
          <br /> <br />
          

        </div>
      </section>      
      </>
    );
  }
}

export default MyOrderHistory;
