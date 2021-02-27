import React from "react";
import "./projects.scss";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import P1 from "../../../../../assets/img/p1.png";
import P2 from "../../../../../assets/img/p2.png";
import P3 from "../../../../../assets/img/p3.png";

function Projects() {
  return (
    <sectin className="projects-section">
      <Container fluid className=" mt-4">
        <h2 className="section-title">Projects</h2>
        <Row>
          <Col sm="4">
            <Card className="border-0">
              <CardImg top width="100%" src={P1} alt="" />
              <CardBody>
                <CardTitle tag="h5">All You Need to Start</CardTitle>
                <CardText>
                  Add WooCommerce plugin to any WordPress site and set up a new
                  store in minutes.
                </CardText>
                <Button>Ecommerce for Wordpress ›</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card className="border-0">
              <CardImg top width="100%" src={P2} alt="" />
              <CardBody>
                <CardTitle tag="h5">Customize and Extend</CardTitle>
                <CardText>
                  From subscriptions to gym classes to luxury cars, WooCommerce
                  is fully customizable.
                </CardText>
                <Button>Browse Extensions ›</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card className="border-0">
              <CardImg top width="100%" src={P3} alt="" />
              <CardBody>
                <CardTitle tag="h5">Active Community</CardTitle>
                <CardText>
                  WooCommerce is one of the fastest-growing eCommerce
                  communities.
                </CardText>
                <Button>Check our Forums ›</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </sectin>
  );
}

export default Projects;
