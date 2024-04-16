import React from "react";
import mango from "../../images/mango.jpg";
import tomato from "../../images/tomato.jpg";
import apricoat from "../../images/apricoat.jpg";
import { FaRupeeSign } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Bestsellercomponent() {
  return (
    <div>
      <div class="container py-5">
        <div class="text-center mx-auto mb-5">
          <h1 class="display-4">Bestseller Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
        <div class="row g-4">
          <div class="col-lg-6 col-xl-4">
            <div class="p-4 rounded bg-light">
              <div class="row align-items-center">
                <div class="col-6">
                  <img
                    src={mango}
                    class="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div class="col-6">
                  <h4>Organic Tomato</h4>
                  <div class="d-flex my-3">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4 class="mb-3">
                    <FaRupeeSign />
                    100{" "}
                  </h4>
                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="p-4 rounded bg-light">
              <div class="row align-items-center">
                <div class="col-6">
                  <img
                    src={mango}
                    class="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div class="col-6">
                  <h4>Organic Tomato</h4>
                  <div class="d-flex my-3">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4 class="mb-3">
                    <FaRupeeSign />
                    100{" "}
                  </h4>
                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-4">
            <div class="p-4 rounded bg-light">
              <div class="row align-items-center">
                <div class="col-6">
                  <img
                    src={mango}
                    class="img-fluid rounded-circle w-100"
                    alt=""
                  />
                </div>
                <div class="col-6">
                  <h4>Organic Tomato</h4>
                  <div class="d-flex my-3">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4 class="mb-3">
                    <FaRupeeSign />
                    100{" "}
                  </h4>
                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>{" "}
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
