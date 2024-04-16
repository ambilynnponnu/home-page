import React from "react";

function Footercomponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="card footer-card d-flex justify-content-center">
            <div class="card-body">
              <h2 class="card-title d-flex justify-content-center">
                Get Exclusive Offers on your Email
              </h2>
              <h6 class="card-subtitle mb-2 text-body-secondary d-flex justify-content-center">
                Subscribe to your news letter and stay updated
              </h6>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email id"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span  ><button className="btn subscribe-btn">subscribe</button></span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footercomponent;
