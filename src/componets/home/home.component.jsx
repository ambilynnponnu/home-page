import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "../../images/veg-img2.jpg";
import img4 from "../../images/veg-img6.jpg";
import img1 from "../../images/veg-img1.jpg";
import img2 from "../../images/veg-img3.jpg";

import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div className="bg-img mt-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h className="main-Head fw-bold p-5">
              Pure Organic Vegetables & <br />{" "}
              <span className="main-Head1 fw-bold  p-5">Fruits</span>
            </h>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="carosel ps-5">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={img1}
                    alt="First slide"
                    // style={{ objectFit: "cover", height: "400px" }} // Adjust the height as needed
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={img3}
                    alt="Second slide"
                    // style={{ objectFit: "cover", height: "400px" }} // Adjust the height as needed
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={img4}
                    alt="Third slide"
                    // style={{ objectFit: "cover", height: "400px" }} // Adjust the height as needed
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
