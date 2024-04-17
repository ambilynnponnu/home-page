import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaLock, FaRupeeSign } from "react-icons/fa";
import axios from 'axios';

function Vegetablescomponent() {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    // fetchVegetables();
    handleSubmit();
  }, []);

  const handleSubmit = (event) => {
    // event.preventDefault();
    

    axios.post('/vegetables')
      .then(res => {
        console.log(res);
        // Redirect or handle success as needed
      })
      .catch(err => {
        console.error(err);
        // Handle error as needed
      });
  }



 

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
            {vegetables.map((vegetable, index) => (
              <Col key={index}>
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
                    src={vegetable.image}
                    className="img-fluid img-fruit rounded-top w-100"
                  />
                  <Card.Body>
                    <h4 className="d-flex justify-content-center">{vegetable.name}</h4>
                    <Card.Text>{vegetable.description}</Card.Text>
                    <p>
                      <strong>
                        <FaRupeeSign />
                        {vegetable.price} / kg
                      </strong>
                    </p>
                    <Button variant="primary" className="cart-btn">
                      <span className="pe-2">
                        <FaLock />
                      </span>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Vegetablescomponent;
