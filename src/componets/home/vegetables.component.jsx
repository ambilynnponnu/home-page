import React, { useState, useEffect } from "react";
import {  FaLock, FaRupeeSign } from "react-icons/fa";
import axios from "axios";
import Navbar from "./navbar.component";
import { useNavigate } from "react-router-dom";

function Vegetablescomponent() {
  const [products, setProducts] = useState([]);
  const [productsDeatails, setProductsDeatails] = useState([]);


  const navigate = useNavigate();


  
  useEffect(() => {
    const filter = {
      category: "vegetable"
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

  // const handleSubmit = (event) => {
  //   // event.preventDefault();

  // }
  const handleSubmit = (productId, quantity) => {
    const data = {
      id: productId,
    };
  
    axios
      .post("/productDetails", data)
      .then((res) => {
        console.log(res);
        setProductsDeatails(res)
        navigate("/detailsPage");
        // Redirect or handle success as needed
      })
      .catch((err) => {
        console.error(err);
        // Handle error as needed
      });
  };
  
  
  
  return (
    <div>
      <Navbar />
      <div className="p-4 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center">
        <div className="mb-3 mb-lg-0">
          <h className="sub-Head p-2">Our Natural Vegetables</h>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mb-4">
            {products.map((vegetable, index) => (
              <div className="col-4" key={index}>
                <div className="card veg-card mb-4"  onClick={() => handleSubmit(vegetable.id,)}>
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
                    {/* <a  class="btn btn-primary" onClick={() => handleSubmit(vegetable.id,1)}>
                      <span className="pe-2">
                        <FaLock />
                      </span>
                      Add to Cart
                    </a> */}
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

export default Vegetablescomponent;
