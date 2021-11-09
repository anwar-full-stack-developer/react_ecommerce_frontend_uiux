import React, { useEffect } from "react";
import { Link } from "react-router-dom";

class ForgotPassword extends React.Component {
  render() {
    return (
      <section class="section-conten padding-y">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="card mx-auto">
              <div class="card-body">
                <h4 class="card-title mb-4">Forgot Password</h4>
                <form>
                  <div class="form-group">
                    <input
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      type="text"
                    />
                  </div>

                  <div class="form-group">
                    <div class="float-right">
                      <Link to="/register">Register</Link>
                      <span> | </span>
                      <Link to="/login">Sign in</Link>
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">
                      {" "}
                      Login{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <p class="text-center mt-4">
              Don't have account? <Link to="/register">Sign up</Link>
            </p>
            <br />
            <br />
          </div>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
