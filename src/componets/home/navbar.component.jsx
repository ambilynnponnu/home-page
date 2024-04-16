import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-home ms-4 me-4 fixed-top mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Vegetables
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navbar-main justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link" href="/fruits">
                Fruits
              </a>
              <a class="nav-link" href="/vegetables">
                Vegetables
              </a>
            </div>
            <div class="navbar-nav">
              {/* <a class="nav-link" href="/signup">
                Signup
              </a> */}
              <a class="nav-link" href="/login">
                Login
              </a>
              <a class="nav-link">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
