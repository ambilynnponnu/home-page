import React, { useState, useEffect } from "react";
import Navbar from "./navbar.component";
import { FiShare } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import axios from "axios";
import { useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { FaRupeeSign } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa6";
function ProductDetailscomponent() {
  const { productId } = useParams();
  const [products, setProducts] = useState(null);
  const [showFullDisclaimer, setShowFullDisclaimer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Fetch product details using productId
    axios
      .get(`/productDetails?productId=${7}`)
      .then((res) => {
        setProducts(res.data); // Set products to res.data
      })
      .catch((err) => {
        console.error(err);
        // Handle error as needed
      });
  }, [productId]); // Run effect when productId changes
  const handleToggleDisclaimer = () => {
    setShowFullDisclaimer(!showFullDisclaimer);
  };
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Navbar />
      {products.map((product, index) => (
        <div className="row mt-5" key={index}>
          <div className="col" style={{ position: "sticky", top: 0 }}>
            <div className="card mt-5">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                {/* <h5 className="card-title">{product.name}</h5> */}
              </div>
              <button
                type="button"
                className="btn cart-btn btn-primary mt-3 me-2"
              >
                Add to Cart
              </button>{" "}
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
                  <div className="col-2">
                    <button
                      type="button"
                      className="btn cart-btn btn-primary  me-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <StarRatings
                  rating={2.5}
                  starDimension="20px"
                  starSpacing="2px"
                  starEmptyColor='rgb(109, 122, 130)'
                  starRatedColor='#ede609'
                />
                <p>M.R.P:<FaRupeeSign /><strong>{product.price}</strong>(Incl. of all taxes)</p>
                <hr />
                <h2>Deliver to</h2>
                <strong><p className="instock">In stock<FaGripLinesVertical /></p> </strong>        
                <hr />
                <h2>Sold By</h2>
                <p>Reliance Retail</p>
                <hr />
                <p className="card-text">{product.description}</p>
                <h2 className="card-title">Disclaimer:</h2>
                <p className="card-text">
                  {showFullDisclaimer
                    ? product.Disclaimer
                    : `${product.Disclaimer.slice(0, 100)}...`}
                </p>
                <button
                  type="button"
                  className={`btn more-btn fw-bold ${
                    isHovered ? "hovered" : ""
                  }`}
                  onClick={handleToggleDisclaimer}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {showFullDisclaimer ? "Less Details" : "More Details"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetailscomponent;
