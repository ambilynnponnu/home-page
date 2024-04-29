import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FaLock } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import Navbar from "./navbar.component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductsComponent() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const filter = {
      category: "Fruit",
    };

    // Convert the filter object to a query string
    const queryString = new URLSearchParams(filter).toString();
    axios
      .get(`/products?${queryString}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
        // Handle error as needed
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center">
        <div className="mb-3 mb-lg-0">
          <h className="sub-Head p-2">Our Natural Fruits</h>
        </div>
        <div>
          <Button className="all-product me-2 mb-2 mb-lg-0">
            All Products
          </Button>{" "}
          <Button className="all-product me-2 mb-2 mb-lg-0">Fruits</Button>{" "}
          <Button className="all-product me-2 mb-2 mb-lg-0">Vegetables</Button>{" "}
          <Button className="all-product mb-2 mb-lg-0">Meat</Button>{" "}
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mb-4">
            {products.map((vegetable, index) => (
              <div className="col-4" key={index}>
                <div className="card veg-card mb-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={vegetable.image}
                      className=" img-fruit"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"> {vegetable.name}</h5>
                    {/* <p className="card-text">{vegetable.description}</p> */}
                    <p>
                      <strong>
                        <FaRupeeSign />
                        {vegetable.price} / kg
                      </strong>
                    </p>
                    <p>Free Delivery</p>
                    <a
                      class="btn btn-primary"
                      onClick={() => navigate("/addtocart")}
                    >
                      <span className="pe-2">
                        <FaLock />
                      </span>
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
