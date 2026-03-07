
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./About.css";


const About = () => {

  const handleMouseMove = (e) => {
    const img = e.currentTarget.querySelector(".parallax-item");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector(".parallax-item");
    img.style.transform = "translate(0, 0) scale(1)";
  };

  return (
    <Container fluid className="about-container px-lg-5 bg-theme-main">
      <Row className="g-5 justify-content-center align-items-start">

        {/* Left Column */}
        <Col lg={6} className="d-flex flex-column align-items-center pe-lg-8">
          <Row className="mb-2 w-100 justify-content-center">
            <Col className="d-flex justify-content-center">
              <div
                className="zoom-img"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="parallax-item-wrap">
                  <div className="parallax-item">
                    <img
                      src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-1.png"
                      alt="about"
                      className="img-fluid rounded-3"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Left Stats */}
          <Row className="p-5 stats-section w-100 justify-content-center">
            <Col md={6} className="mb-4 text-center g-5">
              <div className="custom-primary text-uppercase small fw-medium text-decoration-underline">
                (projects done)
              </div>
              <h2 className="d-flex justify-content-center align-items-center stats-number">
                {/* <span className="webkit-text">+</span> */}
                <span className="fw-bold display-5 text-theme-main">
                  <CountUp end={200} duration={4} />
                </span>
                <span className="webkit-text">+</span>
              </h2>
              <p className="text-theme-secondary">
                I've done 200+ projects, each a unique chapter in my journey of creative exploration.
              </p>
            </Col>
            <Col md={6} className="mb-4 text-center g-5">
              <div className="custom-primary text-uppercase small fw-medium text-decoration-underline">
                (client reviews)
              </div>
              <h2 className="d-flex justify-content-center align-items-center stats-number">
                {/* <span className="webkit-text">+</span> */}
                <span className="fw-bold display-5 text-theme-main">
                  <CountUp end={200} duration={4} />
                </span>
                <span className="webkit-text">+</span>
              </h2>
              <p className="text-theme-secondary">
                My commitment exceeds limits 110% dedicated to the success and impact of every project.
              </p>
            </Col>
            <Col xs={12} className="border-top border-2 custom-border pt-3 mt-3 text-center">
              <p className="mb-0 text-theme-main">
                Hire me for your next project.{" "}
                <a href="#contact" className="fw-bold text-decoration-none custom-primary">
                  Let’s Talk!
                </a>
              </p>
            </Col>
          </Row>
        </Col>

        {/* Right Column */}
        <Col lg={6} className="d-flex flex-column justify-content-center ps-lg-8 pt-lg-0 pt-5 align-items-center">
          <Row className="mb-5 w-100 m-lg-0 m-5">
            <Col className="text-start p-0">
              <div>
                <div className="custom-primary fw-normal text-uppercase text-decoration-underline small">
                  About Me
                </div>
                <h1 className="fw-bold display-5  mt-2 text-theme-main" >
                  Freelancer dedicated to transforming ideas into powerful digital experiences.
                </h1>
                <p className="mt-4 text-theme-secondary " style={{ maxWidth: "90%" }}>
                  By combining strategic thinking, modern design, and advanced technology, I help turn ideas into powerful digital products that attract users, improve engagement, and support long-term growth.     </p>
              </div>


            </Col>
          </Row>


          <Row className="mt-5 w-100 justify-content-start">
            <Col className="d-flex justify-content-start">
              <div
                className="zoom-img"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="parallax-item-wrap">
                  <div className="parallax-item">
                    <img
                      src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-2.png"
                      alt="about-2"
                      className="img-fluid rounded-3"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default About;