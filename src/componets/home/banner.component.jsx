import React from "react";
import fruitbox from "../../images/fruitbox.jpg";
function Bannercomponent() {
  return (
    <div>
      {" "}
      <div class="container-fluid banner my-5 banner-main">
        <div class="container py-5">
          <div class="row g-4 align-items-center">
            <div class="col-lg-6">
              <div class="py-4">
                <h1 class="display-3 text-white">Fresh Exotic Fruits</h1>
                <p class="fw-normal display-3 text-dark mb-4">in Our Store</p>
                <p class="mb-4 text-dark">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <a
                  href="#"
                  class="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                >
                  BUY
                </a>
              </div>
            </div>
            <div class="col-lg-6 position-relative">
              <img src={fruitbox} class="img-fluid w-100 rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannercomponent;
