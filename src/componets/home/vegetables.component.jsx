import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fruit from "../../images/stroberry.jpg";
import { FaLock } from "react-icons/fa";
import coconut from "../../images/COCONUT.jpg";
import tomato from "../../images/tomato.jpg";
import { FaRupeeSign } from "react-icons/fa";
import beans from "../../images/download.jpeg"
import cabbage from "../../images/Cabbage-2.jpeg"
import carrot from "../../images/carrot-img.jpg"
import img1 from "../../images/beetroot-img.jpg"
import img2 from "../../images/potato.jpg"
import img3 from "../../images/drumstick.jpg"


function Vegetablescomponent() {
  return (
    <div>
      <div className="p-4 d-flex flex-column flex-lg-row justify-content-lg-between align-items-center">
        <div className="mb-3 mb-lg-0">
          <h className="sub-Head p-2">Our Natural Vegetables</h>
        </div>
      </div>
      <div>
        <Container>
          <Row className="mb-4">
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={img1}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Stroberry</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={carrot}
                  className="img-fruit rounded-top"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Mango</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={cabbage}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Apricoat</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={tomato}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Tomato</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={beans}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Beans</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>
                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={coconut}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Coconut</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={tomato}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Tomato</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ overflow: "hidden", transition: "transform 0.3s" }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={img2}
                  className="img-fluid img-fruit rounded-top w-100"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-center">Tomato</h4>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <p>
                    <strong>
                      <FaRupeeSign />
                      300 / kg
                    </strong>
                  </p>

                  <Button variant="primary" className="cart-btn">
                    {" "}
                    <span className="pe-2">
                      <FaLock />
                    </span>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Vegetablescomponent;
