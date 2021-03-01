import React, { useState } from "react";
import "./testimonials.scss";
import { Col, Container, Row } from "reactstrap";

import C1 from "../../../../../assets/img/c1.png";
import C2 from "../../../../../assets/img/c2.png";
import C3 from "../../../../../assets/img/c3.png";
import C4 from "../../../../../assets/img/c4.png";

function Testimonials() {
  const [testimonial, setTestimonial] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices arcu. Nullam sed sollicitudin sapien."
  );
  const handleClick = (value) => {
    value.preventDefault();
    console.log(value.target.id);
    if (value.target.id == 1) {
      setTestimonial("First Testimonial");
    } else if (value.target.id == 2) {
      setTestimonial("Second Testimonial");
    } else if (value.target.id == 3) {
      setTestimonial("Third Testimonial");
    } else if (value.target.id == 4) {
      setTestimonial("Fourth Testimonial");
    } else if (value.target.id == 5) {
      setTestimonial("Fifth Testimonial");
    } else if (value.target.id == 6) {
      setTestimonial("Sixth Testimonial");
    }
  };
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
              <a href="/" onClick={handleClick}>
                <img id="1" alt="" src={C1} />
              </a>
              <a href="/" onClick={handleClick}>
                <img id="2" alt="" src={C2} />
              </a>
              <a href="/" onClick={handleClick}>
                <img id="3" alt="" src={C3} />
              </a>
              <a href="/" onClick={handleClick}>
                <img id="4" alt="" src={C4} />
              </a>
              <a href="/" onClick={handleClick}>
                <img id="5" alt="" src={C2} />
              </a>
              <a href="/" onClick={handleClick}>
                <img id="6" alt="" src={C3} />
              </a>
            </div>
            <div className="client-text">
              <p className="text-center">{testimonial}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
