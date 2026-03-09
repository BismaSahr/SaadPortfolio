import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./FAQ.css";
import FaqImg from "../../assets/faq_img.png";
import CircularBadge from "../CircularBadge/CircularBadge";

const FAQ = () => {
    const faqData = [
        {
            question: "Do you offer consultancy before starting a project?",
            answer: "Yes. I offer technical and strategic consultancy to help businesses define their product roadmap, choose the right technologies, and plan scalable digital solutions before development begins."
        },
        {
            question: "Do you build custom websites or use CMS platforms?",
            answer: "Both. I develop fully custom websites as well as CMS-based solutions using platforms that allow easy content management. The approach depends on your business needs, scalability requirements, and budget."
        },
        {
            question: "Please Tell us which CMS-platform & custom build techstacks you use to develop websites?",
            answer: "For CMS I use WordPress, Shopify, Webflow, Wix, Squarespace and for the Custom build I use Javascript frameworks like ReactJs, NextJs for front-end and NodeJs, ExpressJs, NuxtJs for back-end. I use Firebase, MySQL, PostgreSQL, MongoDB as Database."
        },
        {
            question: "Can you develop mobile apps for both iOS and Android?",
            answer: "Yes. I build cross-platform apps as well as native applications for iOS and Android, depending on the project requirements and performance goals. For cross-platform I use React-Native or Flutter and for native iOS apps I use Swift and for native android apps i use kotlin."
        },
        {
            question: "What kind of AI solutions do you build?",
            answer: " I develop AI-powered chatbots, automation systems, and workflow integrations using modern tools and platforms like n8n, helping businesses automate processes, improve customer support, and increase efficiency"
        },
        {
            question: "Do you provide support after the project is completed?",
            answer: " Yes. I offer ongoing support, maintenance, and updates to ensure your website, app, or AI system continues to perform optimally."
        }
    ];

    return (
        <section className="faq-section py-5 bg-secondary-1" id="faqs">
            <Container>
                <Row className="align-items-center gy-5">
                    {/* Left Column: Text & Accordion */}
                    <Col lg={7}>
                        <div className="faq-content pe-lg-5">
                            <span className="custom-primary custom-border text-uppercase bg-white rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
                                FAQ Page
                            </span>
                            <h2 className="fhead fw-bold mb-5">
                                Get every single <br /> answer here
                            </h2>

                            <Accordion className="faq-accordion">
                                {faqData.map((item, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index} className="mb-4 accor-item">
                                        <Accordion.Header className="faq-header">
                                            {item.question}
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-body">
                                            <p> {item.answer}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Col>

                    {/* Right Column: Image & Badge */}
                    <Col lg={5}>
                        <div className="faq-image-wrapper position-relative">
                            <img
                                src={FaqImg}
                                alt="FAQ Desk Setup"
                                className="img-fluid rounded-4 faq-img shadow-lg"
                            />
                            <div className="faq-circular-badge">
                                <CircularBadge />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQ;
