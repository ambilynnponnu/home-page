import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import nature from '../../images/nature.jpg'
import nature1 from '../../images/nature1.jpg'

import nature2 from '../../images/natur2.jpg'

function Home() {
  return (
    <div className="bg-img">
      <div>
        <div class="container text-center mt-5">
          <div class="row">
            <div className="col-4">
              <div class="card">
                <div class="imgBx">
                  <img src={nature2} alt="images" />
                </div>
                <div class="details">
                  <h2>
                    SomeOne Famous
                    <br />
                    <span>Director</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card">
                <div class="imgBx">
                  <img src={nature1} alt="images" />
                </div>
                <div class="details">
                  <h2>
                    SomeOne Famous
                    <br />
                    <span>Producer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card">
                <div class="imgBx">
                  <img src={nature} alt="images" />
                </div>
                <div class="details">
                  <h2>
                    SomeOne Famous
                    <br />
                    <span>Actor</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
