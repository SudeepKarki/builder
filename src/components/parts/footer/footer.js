import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.scss";

import I1 from "../../../assets/img/i1.png";
import I2 from "../../../assets/img/i2.png";
import I3 from "../../../assets/img/i3.png";

import S1 from "../../../assets/img/s1.png";
import S2 from "../../../assets/img/s2.png";
import S3 from "../../../assets/img/s3.png";
import S4 from "../../../assets/img/s4.png";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-up">
          <Row className="justify-content-center">
            <Col>
              <p>
                <img alt="" src={I1} />
                <span>
                  7 day project qutation for <b>the project</b>
                </span>
              </p>
            </Col>
            <Col>
              <p>
                <img alt="" src={I2} />
                <span>
                  <b>Support </b>teams across the world
                </span>
              </p>
            </Col>
            <Col>
              <p>
                <img alt="" src={I3} />
                <span>
                  Easy to <b>talk and build for company</b>
                </span>
              </p>
            </Col>
          </Row>
          <h2 className="mt-5 mb-5 text-center text-white">Logo</h2>
        </div>
        <div className="footer-navs">
          <Row className="justify-content-center">
            <Col sm="9">
              <Row>
                <Col>
                  <h4>Who we Are</h4>
                  <div className="footer-nav-links">
                    <a href="/">About</a>
                    <a href="/">Team</a>
                    <a href="/">Work With Us</a>
                  </div>
                </Col>
                <Col>
                  <h4>Woocommerce</h4>
                  <div className="footer-nav-links">
                    <a href="/">Features</a>
                    <a href="/">Payments</a>
                    <a href="/">Marketing</a>
                    <a href="/">Shipping</a>
                    <a href="/">Extension Store</a>
                    <a href="/">eCommerce blog</a>
                    <a href="/">Development blog</a>
                    <a href="/">Ideas board</a>
                    <a href="/">Mobile App</a>
                    <a href="/">Community</a>
                    <a href="/">Style Guide</a>
                    <a href="/">Email Newsletter</a>
                  </div>
                </Col>
                <Col>
                  <h4>Other products</h4>
                  <div className="footer-nav-links">
                    <a href="/">Storefront</a>
                    <a href="/">WooSlider</a>
                    <a href="/">Sensei</a>
                    <a href="/">Sensei Extensions</a>
                  </div>
                </Col>
                <Col>
                  <h4>Support</h4>
                  <div className="footer-nav-links">
                    <a href="/">Documentation</a>
                    <a href="/">Customizations</a>
                    <a href="/">Support Policy</a>
                    <a href="/">Contact</a>
                    <a href="/">COVID-19 Resources</a>
                    <a href="/">Privacy Notice for</a>
                    <a href="/">California Users</a>
                  </div>
                </Col>
                <Col>
                  <h4>We recommend</h4>
                  <div className="footer-nav-links">
                    <a href="/">WooExperts</a>
                    <a href="/">Hosting Solutions</a>
                    <a href="/">Pre-sales FAQ</a>
                    <a href="/">Success Stories</a>
                    <a href="/">Design Feedback Group</a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col>
              <div className="footer-social">
                <a href="/">
                  <img alt="" src={S1} />
                </a>
                <a href="/">
                  <img alt="" src={S2} />
                </a>
                <a href="/">
                  <img alt="" src={S3} />
                </a>
                <a href="/">
                  <img alt="" src={S4} />
                </a>
              </div>
            </Col>
            <Col>
              <div className="terms">
                <a href="/">TERMS & CONDITIONS PRIVACY POLICY</a>
              </div>
            </Col>
            <Col>
              <div className="design">
                Designed by <a href="/">Saga Innovation</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
export default Footer;
