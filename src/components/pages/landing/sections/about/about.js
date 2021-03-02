import React from "react";
import "./about.scss";
import { Button, Col, Container, Row } from "reactstrap";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import A1 from "../../../../../assets/img/a1.jpg";
import A2 from "../../../../../assets/img/a2.jpg";

function About() {
  return (
    <section className="about-section">
      <Container fluid className="mt-4">
        <Row className="align-items-center item">
          <Col sm={{ size: 3, offset: 2 }}>
            <LazyLoadImage
              effect="blur"
              className="img-fluid img-1"
              src={A1}
              alt=""
            />
          </Col>
          <Col sm="4">
            <h3 className="text-white">Construct for World Business</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
              turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum
              sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices
              arcu. Nullam sed sollicitudin sapien.
            </p>
            <Button className="btn-custom">Read the Documentation</Button>
          </Col>
        </Row>
        <Row className="align-items-center item">
          <Col sm={{ size: 4, offset: 3 }}>
            <h3 className="text-white">
              The road to Development is through us
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
              turpis vel enim volutpat hendrerit pretium vitae ipsum. In dictum
              sed quam nec fermentum. Donec vitae pulvinar quam, vel ultrices
              arcu. Nullam sed sollicitudin sapien.
            </p>
            <Button className="btn-custom">Read the Documentation</Button>
          </Col>
          <Col sm={{ size: 3 }}>
            <LazyLoadImage
              effect="blur"
              className="img-fluid img-2"
              src={A2}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
