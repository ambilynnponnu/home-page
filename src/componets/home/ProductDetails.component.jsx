import React from "react";
import Navbar from "./navbar.component";
import { FiShare } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
function ProductDetailscomponent({ productsDetails }) {
  console.log("eeeee",productsDetails)
  return (
    <div className="container">
      <div>
        <Navbar />
        <div className="row  mt-5">
          <div className="col">
            <div class="card mt-5">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="row d-flex justify-content-between">
              <div className="col-3">
                <div className="row">
                  <div className="col-2">
                    <FiShare />
                  </div>
                  <div className="col-2">
                    <FiMoreHorizontal />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">
                  {/* <div className="col-2">
                    <FiShare />
                  </div> */}
                  <div className="col-2">
                    <button type="button" className="btn cart-btn btn-primary  me-2">
                      Save
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card mt-5">
                <div className="card-body">
                  <h2 className="card-title">Card title</h2>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-secondary me-2">
                    Secondary
                  </button>

                  <button type="button" className="btn btn-secondary  me-2">
                    Secondary
                  </button>

                  <button type="button" className="btn btn-secondary  me-2">
                    Secondary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailscomponent;
