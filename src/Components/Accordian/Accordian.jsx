import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Accordian.css";
import Process1 from "../../assets/process1.png";

const Accordian = () => {
  return (
    <Container fluid className="p-5">
       <div className="container mb-1">
  <div className="row justify-content-center">
    <div className="col-12 text-center">
      
      {/* The "Portfolio" Badge */}
      <span className="custom-primary custom-border text-uppercase  bg-white rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block" style={{ fontSize: '14px' }}>
        processes
      </span>

      {/* The Main Heading */}
      <h2 className="display-5 fw-bold text-dark">
        My Processes
      </h2>
      
    </div>
  </div>
</div>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header className="outer-header-custom">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">UI & UX Design</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Heading Row */}
              <Row className="align-items-center mb-4">
                <Col lg={10}>
                  <h2 className="coaching-head">
                    <span className="my-coaching-text">My Coaching</span> Process, Simplified
                  </h2>
                </Col>

                <Col lg={2} className="text-lg-end mt-3 mt-lg-0">
                  <Button className="text-white fs-6 rounded-5 coaching-button d-flex align-items-center justify-content-center gap-3">
                    Learn More <span className="btn-arrow"></span>
                  </Button>
                </Col>
              </Row>

              {/* Content Row */}
              <Row className="align-items-stretch gy-4">

                {/* LEFT → Inner Accordion */}
                <Col lg={6}>
                  <Accordion defaultActiveKey="0" flush className="inner-accordion" data-aos="flip-left">

                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Research</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h4 className="m-0">Desktop</h4>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Wireframing</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h3 className="m-0">Wireframing</h3>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>Low & High fidelity wireframes using Figma.</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Prototyping</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h3 className="m-0">Prototyping</h3>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>Interactive prototypes & usability testing.</p>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </Col>

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

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" data-aos="flip-left">
          <Accordion.Header className="outer-header-custom">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">UI & UX Design</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Heading Row */}
              <Row className="align-items-center mb-4">
                <Col lg={10}>
                  <h2 className="coaching-head">
                    <span className="my-coaching-text">My Coaching</span> Process, Simplified
                  </h2>
                </Col>

                <Col lg={2} className="text-lg-end mt-3 mt-lg-0">
                  <Button className="text-white fs-6 rounded-5 coaching-button d-flex align-items-center justify-content-center gap-3">
                    Learn More <span className="btn-arrow"></span>
                  </Button>
                </Col>
              </Row>

              {/* Content Row */}
              <Row className="align-items-stretch gy-4">

                {/* LEFT → Inner Accordion */}
                <Col lg={6}>
                  <Accordion defaultActiveKey="0" flush className="inner-accordion">

                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Research</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h4 className="m-0">Desktop</h4>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Wireframing</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h3 className="m-0">Wireframing</h3>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>Low & High fidelity wireframes using Figma.</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Prototyping</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h3 className="m-0">Prototyping</h3>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>Interactive prototypes & usability testing.</p>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </Col>

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

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" data-aos="flip-left">
          <Accordion.Header className="outer-header-custom">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">UI & UX Design</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Heading Row */}
              <Row className="align-items-center mb-4">
                <Col lg={10}>
                  <h2 className="coaching-head">
                    <span className="my-coaching-text">My Coaching</span> Process, Simplified
                  </h2>
                </Col>

                <Col lg={2} className="text-lg-end mt-3 mt-lg-0">
                  <Button className="text-white fs-6 rounded-5 coaching-button d-flex align-items-center justify-content-center gap-3">
                    Learn More <span className="btn-arrow"></span>
                  </Button>
                </Col>
              </Row>

              {/* Content Row */}
              <Row className="align-items-stretch gy-4">

                {/* LEFT → Inner Accordion */}
                <Col lg={6}>
                  <Accordion defaultActiveKey="0" flush className="inner-accordion">

                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Research</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h4 className="m-0">Desktop</h4>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Wireframing</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h3 className="m-0">Wireframing</h3>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>Low & High fidelity wireframes using Figma.</p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Prototyping</Accordion.Header>
                      <Accordion.Body className="inner-acc-body">
                        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                          <h3 className="m-0">Prototyping</h3>
                          <span className="custom-arrow white-arrow"></span>
                        </div>
                        <p>Interactive prototypes & usability testing.</p>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </Col>

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

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>



      </Accordion>
    </Container>
  );
};

export default Accordian;