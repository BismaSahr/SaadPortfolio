import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import "./Accordian.css";
import Process1 from "../../assets/process1.png";
import Process2 from "../../assets/process2.png";
import Process3 from "../../assets/process3.png";
import Process4 from "../../assets/process4.png"
const Accordian = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container fluid className="py-5 px-3 px-md-5 pt-4 processes-section">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center mt-4">
            <span className="custom-primary custom-border text-uppercase rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
              Processes
            </span>
            <h2 className="display-5 fw-bold">
              My Processes
            </h2>
          </div>
        </div>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="outer-header-custom mt-5" data-aos="slide-left">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">Web Design & Development</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 gx-5 mt-4">

                {/* LEFT → Inner Accordion */}
                {/* RIGHT → Image that auto-resizes */}
                <Col lg={6} className="d-flex">
                  <div className="img-wrapper w-100">
                    <img
                      src={Process3}
                      alt="Process"
                      className="coaching-img"
                      data-aos="zoom-in"
                    />
                  </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center ">
                  <h2 className="col-2-head">Building modern, responsive websites with custom solutions and CMS integration.</h2>
                  <p className="col-2-p mt-3 mb-4">With custom web development and optimized architecture, your website becomes faster, more scalable, and easier to manage delivering long-term value while reducing ongoing maintenance costs.</p>
                  <Button className="col-2-button w-25 mt-1" onClick={handleShow}>Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="outer-header-custom" data-aos="slide-left">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">Mobile App Design & Development</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 gx-5 mt-4">

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
                <Col lg={6} className="d-flex flex-column justify-content-center">
                  <h2 className="col-2-head">Designing and Developing Custom and Cross-Platform Mobile Apps</h2>
                  <p className="col-2-p mt-3 mb-4"> Developing high-performance native and cross-platform apps for iOS and Android with optimized architecture, smooth interactions, and long-term scalability.</p>
                  <Button className="col-2-button w-25 mt-1" onClick={handleShow}>Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className="outer-header-custom" data-aos="slide-left">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text"> AI Development </span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 gx-5 mt-4">

                {/* LEFT → Inner Accordion */}
                {/* RIGHT → Image that auto-resizes */}
                <Col lg={6} className="d-flex">
                  <div className="img-wrapper w-100">
                    <img
                      src={Process2}
                      alt="Process"
                      className="coaching-img"
                      data-aos="zoom-in"
                    />
                  </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center">
                  <h2 className="col-2-head">AI Solutions, Development & Automation</h2>
                  <p className="col-2-p mt-3 mb-4">Designing and implementing AI solutions such as custom chatbots, AI integrations, and automation workflows using tools like n8n to streamline processes and scale operations.</p>
                  <Button className="col-2-button w-25 mt-1" onClick={handleShow}>Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header className="outer-header-custom" data-aos="slide-left">
            <div className="d-flex align-items-center">
              <span className="outer-head-arrow"></span>
              <span className="massive-bubble-text">Consultancy</span>
            </div>
          </Accordion.Header>

          <Accordion.Body>
            <Container fluid >

              {/* Content Row */}
              <Row className="align-items-stretch gy-4 gx-5 mt-4">

                {/* LEFT → Inner Accordion */}
                {/* RIGHT → Image that auto-resizes */}
                <Col lg={6} className="d-flex">
                  <div className="img-wrapper w-100">
                    <img
                      src={Process4}
                      alt="Process"
                      className="coaching-img"
                      data-aos="zoom-in"
                    />
                  </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center">
                  <h2 className="col-2-head">Digital Transformation & Technical Consultancy For Web, App & AI</h2>
                  <p className="col-2-p mt-3 mb-4">Guiding businesses through the entire digital product journey defining strategy, selecting the right technologies, and building scalable web, app, and AI solutions that align with business goals and growth plans.</p>
                  <Button className="col-2-button w-25 mt-1" onClick={handleShow}>Hire Me Now</Button>
                </Col>

              </Row>

            </Container>
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>

      {/* WhatsApp Modal */}
      <Modal show={showModal} onHide={handleClose} centered className="whatsapp-modal">
        <Modal.Header closeButton className="border-0 pb-0">
        </Modal.Header>
        <Modal.Body className="text-center pt-0 pb-5 px-4">
          <div className="whatsapp-icon-circle mb-4">
            <i className="bi bi-whatsapp"></i>
          </div>
          <h3 className="modal-title fw-bold mb-3">Let's Work Together!</h3>
          <p className="modal-text mb-4">
            I'm ready to bring your ideas to life. Connect with me directly on WhatsApp for a quick chat:
          </p>
          <div className="whatsapp-number-box p-3 rounded-4 mb-4">
            <span className="fw-bold fs-4 text-primary">+92 3201220638</span>
          </div>
          <a
            href="https://wa.me/923201220638"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary whatsapp-btn rounded-pill px-5 py-3 fw-bold"
          >
            Chat on WhatsApp
          </a>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Accordian;