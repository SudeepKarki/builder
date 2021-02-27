import React from "react";
import "./footerTop.scss";
import { Button, Col, Container, Row } from "reactstrap";

import FT from "../../../../../assets/img/ft.png";

function FooterTop() {
  return (
    <section className="footer-top-section">
      <h2 className="text-center">We are the developers you want.</h2>
      <p className="text-center">
        Our team of Happiness Engineers works remotely from 58 countries
        providing
        <br /> customer support across multiple time zones.
      </p>
      <img src={FT} className="img-fluid" />
      <div className="contact-section">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col sm="9">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur{" "}
                <b>adipiscing elit. Nunc non turpis vel</b> enim volutpat
                hendrerit
              </p>
            </Col>
            <Col>
              <Button className="btn-custom outline">Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default FooterTop;
