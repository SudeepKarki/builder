import React from "react";
import "./banner.scss";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import BannerImage from "../../../../../assets/img/banner-bg.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Banner() {
  return (
    <section className="banner-section">
      <Container fluid className="mt-4">
        <Row className="align-items-center">
          <Col sm={{ size: 7 }}>
            <div className="banner-content">
              <h1>
                Building the Projects the empowers the next Global Progress
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non turpis vel enim volutpat hendrerit pretium vitae ipsum. In
                dictum sed quam nec fermentum.
              </p>
              <div className="banner-btn-group">
                <Button className="btn-custom">VIew Projects</Button>
                or
                <Link to="">Contact Us</Link>
              </div>
            </div>
          </Col>
          <Col sm="5" className="pr-0 pl-0">
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src={BannerImage}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
