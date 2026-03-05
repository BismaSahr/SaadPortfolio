import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./FAQ.css";
import FaqImg from "../../assets/faq_img.png";
import CircularBadge from "../CircularBadge/CircularBadge";

const FAQ = () => {
    const faqData = [
        {
            question: "What is the main focus of your portfolio?",
            answer: "You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much."
        },
        {
            question: "Will you include a blog or other written content?",
            answer: "Yes, I plan to integrate a blog section to share insights on UI/UX trends, development tips, and project case studies to provide more value to visitors."
        },
        {
            question: "How frequently will you update your portfolio?",
            answer: "I aim to update my portfolio at least once a month with new projects, experiments, and updated case studies to reflect my latest skills and growth."
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
                            <h2 className="fhead fw-bold text-dark mb-5">
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
