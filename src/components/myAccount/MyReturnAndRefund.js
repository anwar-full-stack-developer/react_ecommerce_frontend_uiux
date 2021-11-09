import React, { useEffect } from "react";
import MyAccountNevLeft from "./MyAccountNavLeft";

class MyReturnAndRefund extends React.Component {
  render() {
    return (
      <>
        <section className="section-content padding-y bg">
          <div className="container">
            <div className="row">
              <aside className="col-md-3">
                <MyAccountNevLeft navActive="myaccount-return-refund" />
              </aside>
              <main className="col-md-9">
                <article className="card">
                  <header className="card-header"> My Return and Refund </header>
                  <div className="card-body">
                   ---Under constraction ---
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

export default MyReturnAndRefund;
