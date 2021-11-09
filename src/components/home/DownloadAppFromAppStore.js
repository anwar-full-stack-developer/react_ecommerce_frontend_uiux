import React from "react";
import appStoreImage from './../../assets/images/appstore.png';
import aplayStoreImage from './../../assets/images/playstore.png';


class DownloadAppFromAppStore extends React.Component {
    render (){

        return <section class="section-name padding-y bg">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Download app demo text</h3>
              <p>Get an amazing app to make Your life easy</p>
            </div>
            <div class="col-md-6 text-md-right">
              <a
                href="#/page-index-2.html#"
                ><img
                  src={aplayStoreImage}
                  height="50"
              /></a>
              <a
                href="#/page-index-2.html#"
                ><img
                  src={appStoreImage}
                  height="40"
              /></a>
            </div>
          </div>
        </div>
      </section>;
    }
  };
  
  export default DownloadAppFromAppStore;