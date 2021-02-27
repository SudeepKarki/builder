import React from "react";
import "./testimonials.scss";
import { Button, Col, Container, Row } from "reactstrap";

import C1 from "../../../../../assets/img/c1.png";
import C2 from "../../../../../assets/img/c2.png";
import C3 from "../../../../../assets/img/c3.png";
import C4 from "../../../../../assets/img/c4.png";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <Container fluid className="mt-4">
        <h2 className="section-title">
          Listen from our <br />
          Clients
        </h2>
        <Row className="justify-content-center">
          <Col sm="6">
            <div className="client-list">
              <a href="#">
                <img src={C1} />
              </a>
              <a href="#">
                <img src={C2} />
              </a>
              <a href="#">
                <img src={C3} />
              </a>
              <a href="#">
                <img src={C4} />
              </a>
              <a href="#">
                <img src={C2} />
              </a>
              <a href="#">
                <img src={C3} />
              </a>
            </div>
            <div className="client-text">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non turpis vel enim volutpat hendrerit pretium vitae ipsum. In
                dictum sed quam nec fermentum. Donec vitae pulvinar quam, vel
                ultrices arcu. Nullam sed sollicitudin sapien.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
