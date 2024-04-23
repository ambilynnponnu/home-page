import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
function Navbar() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
        // Handle error as needed
      });
  }, []);
  const handleVegetableClick = (vegetables) => {
    // Check if the category is vegetables and then navigate to the vegetables page
    // You can replace this condition with your actual logic to check the category
    if (vegetables.some((vegetable) => vegetable.category === "vegetable")) {
      window.location.href = "/vegetables";
    }
  };

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
            <div>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  className="form-control me-5"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div class="navbar-nav">
              <a class="nav-link" href="/fruits">
                Fruits
              </a>
              <a
                className="nav-link"
                onClick={() => handleVegetableClick(products)}
              >
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
