import React, { useEffect } from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section class="section-conten padding-y">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="card mx-auto">
              <div class="card-body">
                <h4 class="card-title mb-4">Sign in</h4>
                <form>
                  <Link to="/forgot-password" class="btn btn-facebook btn-block mb-2">
                    {" "}
                    <i class="fab fa-facebook-f"></i> &nbsp; Sign in with
                    Facebook
                  </Link>
                  <Link to="/forgot-password" class="btn btn-google btn-block mb-4">
                    {" "}
                    <i class="fab fa-google"></i> &nbsp; Sign in with Google
                  </Link>
                  <div class="form-group">
                    <input
                      name=""
                      class="form-control"
                      placeholder="Username"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name=""
                      class="form-control"
                      placeholder="Password"
                      type="password"
                    />
                  </div>

                  <div class="form-group">
                    <Link to="/forgot-password" class="float-right">
                      Forgot password?
                    </Link>
                    <label class="float-left custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        checked=""
                      />
                      <div class="custom-control-label"> Remember </div>
                    </label>
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

export default Login;
