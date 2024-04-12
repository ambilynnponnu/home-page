import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import fruitbox from "../../images/fruitbox.jpg"
function Bestsellercomponent() {
  return (
    <div>
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
            <div class="col-lg-6">
              <div class="position-relative">
                <img src={fruitbox} class="img-fluid w-100 rounded" alt=""/>
                <div class="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute">
                  <h1>1</h1>
                  <div class="d-flex flex-column">
                    <span class="h2 mb-0">
                      50 <FaRupeeSign />
                    </span>
                    <span class="h4 text-muted mb-0">kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestsellercomponent;
