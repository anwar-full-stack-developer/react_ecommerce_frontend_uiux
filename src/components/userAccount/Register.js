import { event } from "jquery";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { listProducts } from "../../actions/productActions";

class Register extends React.Component {
  render() {
    return (
      <section class="section-content padding-y">
      <div class="container">
        <div class="row">
        <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="card">
              <article class="card-body">
                <header class="mb-4">
                  <h4 class="card-title">Sign up</h4>
                </header>
                <form class="block-register">
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">I am a</label>
                    <div class="col-sm-9 pt-1">
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          checked=""
                          type="radio"
                          name="account_type"
                          value="option1"
                        />
                        <span class="custom-control-label"> Buyer </span>
                      </label>
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="account_type"
                          value="option2"
                        />
                        <span class="custom-control-label"> Seller </span>
                      </label>
                      <label class="custom-control custom-radio custom-control-inline">
                        <input
                          class="custom-control-input"
                          type="radio"
                          name="account_type"
                          value="option3"
                        />
                        <span class="custom-control-label"> Both </span>
                      </label>
                    </div>
                  </div>
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">Full name</label>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">Phone</label>
                    <div class="col-9">
                      <div class="input-group">
                        <select class="custom-select">
                          <option selected="">UZ +971</option>
                          <option value="1">AE +971</option>
                          <option value="2">US +1</option>
                          <option value="3">RU +7</option>
                        </select>
                        <input
                          name=""
                          class="form-control"
                          placeholder="Phone number"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Ex. john@gmail.com"
                      />
                    </div>
                  </div>

                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">Gender</label>
                    <div class="col-sm-9 pt-2">
                      
                    <label class="custom-control custom-radio custom-control-inline">
                      <input
                        class="custom-control-input"
                        checked=""
                        type="radio"
                        name="gender"
                        value="option1"
                      />
                      <span class="custom-control-label"> Male </span>
                    </label>
                    <label class="custom-control custom-radio custom-control-inline">
                      <input
                        class="custom-control-input"
                        type="radio"
                        name="gender"
                        value="option2"
                      />
                      <span class="custom-control-label"> Female </span>
                    </label>
                  </div>
                  </div>
                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">Address</label>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div class="col">
                      <select class="custom-select form-control">
                        <option>Country</option>
                        <option>United states</option>
                        <option>Germany</option>
                        <option>Canada</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group form-row">
                    <label class="col-md-3"> </label>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Street, Building"
                      />
                    </div>
                  </div>

                  <div class="form-group form-row">
                    <label class="col-md-3 col-form-label">Password</label>
                    <div class="col-6">
                      <input
                        type="password"
                        class="form-control mb-3"
                        placeholder="Create password"
                      />
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Repeat password"
                      />
                    </div>
                  </div>

                  <div class="form-group form-row">
                    <div class="col-sm-9 offset-sm-3">
                      <label class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck1"
                        />
                        <div class="custom-control-label" for="customCheck1">
                          I agree with{" "}
                          <a href="#" target="_blank">
                            terms and conditions
                          </a>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div class="form-row mb-2">
                    <div class="col-sm-9 offset-sm-3">
                      <button type="submit" class="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </article>
              <div class="card-footer text-center">
                Have an account? <Link to="/login">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default Register;
