import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import my from "../assets/dp.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import post from "../assets/postman.png";
import node from "../assets/nodejs (1).jpg";
import aws from "../assets/aws.png";
import mongo from "../assets/mongo.png";

const Home = () => {
  return (
    <>
      <Container>
        <Row className=" m-5 justify-content-center align-items-center">
          <Col className=" md={4} lg={6}">
            <p>
              I am a Professional Web Developer. Have exposure with multiple
              technologies using with multiple core projects like SASS Products,
              Web application projects
            </p>
          </Col>
          <Col className=" justify-content-center">
            <Image
              src={my}
              style={{ width: "250px", height: "240px" }}
              roundedCircle
            />
          </Col>
        </Row>
        <hr />
        <h3 className="justify-content-center">Skills</h3>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col >
            <Card >
              <Image variant="top" src={html} />
            </Card>
          </Col>
          <Col>
            <Card >
              <Image variant="top" src={css} />
            </Card>
          </Col>
          <Col>
            <Card >
              <Image variant="top" src={js} />
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={post} />
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={node} />
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={aws} />
            </Card>
          </Col>
          <Col>
            <Card >
              <Card.Img variant="top" src={mongo} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
