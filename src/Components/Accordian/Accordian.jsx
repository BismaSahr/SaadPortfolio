import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Accordian.css";
import Process1 from "../../assets/process1.png";

const Accordian = () => {
  return (
    <Container fluid className="p-5 pt-4">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center mt-4">
            <span className="custom-primary custom-border text-uppercase bg-white rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
              Processes
            </span>
            <h2 className="display-5 fw-bold text-dark">
              My Processes
            </h2>
          </div>
        </div>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="outer-header-custom mt-5">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">UI & UX Design</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 mt-4">

                {/* LEFT → Inner Accordion */}
                {/* RIGHT → Image that auto-resizes */}
                <Col lg={6} className="d-flex">
                  <div className="img-wrapper w-100">
                    <img
                      src={Process1}
                      alt="Process"
                      className="coaching-img"
                      data-aos="zoom-in"
                    />
                  </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center ">
                  <h2 className="fw-bold col-2-head">Website Design: Crafting attractive, user-friendly layouts</h2>
                  <p className="col-2-p mt-3 mb-4">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
                  <Button className="col-2-button w-25 mt-1">Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="outer-header-custom">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">4D Animations</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 mt-4">

                {/* LEFT → Inner Accordion */}
                {/* RIGHT → Image that auto-resizes */}
                <Col lg={6} className="d-flex">
                  <div className="img-wrapper w-100">
                    <img
                      src={Process1}
                      alt="Process"
                      className="coaching-img"
                      data-aos="zoom-in"
                    />
                  </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center ">
                  <h2 className="fw-bold col-2-head">Website Design: Crafting attractive, user-friendly layouts</h2>
                  <p className="col-2-p mt-3 mb-4">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
                  <Button className="col-2-button w-25 mt-1">Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className="outer-header-custom">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">Motion Graphics</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 mt-4">

                {/* LEFT → Inner Accordion */}
                {/* RIGHT → Image that auto-resizes */}
                <Col lg={6} className="d-flex">
                  <div className="img-wrapper w-100">
                    <img
                      src={Process1}
                      alt="Process"
                      className="coaching-img"
                      data-aos="zoom-in"
                    />
                  </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center ">
                  <h2 className="fw-bold col-2-head">Website Design: Crafting attractive, user-friendly layouts</h2>
                  <p className="col-2-p mt-3 mb-4">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
                  <Button className="col-2-button w-25 mt-1">Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>



      </Accordion>
    </Container>
  );
};

export default Accordian;