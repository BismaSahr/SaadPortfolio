import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import './Contact.css';
import contactImg from '../../assets/img-contactme.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/radat738@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Inquiry from ${formData.name}`
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setStatus('');
                }, 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <Container fluid className="contact-section" id='contact'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
                        <div className="zoom-img rounded-4 d-inline-flex w-100">
                            <img src={contactImg} alt="Contact Office" className="contact-img" />
                        </div>
                    </Col>
                    <Col lg={6} className="px-lg-5" data-aos="fade-left">
                        <div className="custom-primary fw-normal text-uppercase text-decoration-underline small mb-3">
                            Contact Me
                        </div>
                        <h1 className="fw-bold display-5 mb-3">Need Help With Project?</h1>
                        <p className="mb-5 text-muted">
                            Plese feel free to type in your description about the project and I’ll reach out to you within 0-4 hours of time.
                        </p>

                        <Form onSubmit={handleSubmit}>
                            <Row className="g-3">
                                <Col md={6}>
                                    <InputGroup>
                                        <div className="contact-icon-wrapper">
                                            <i className="bi bi-person-fill"></i>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            className="contact-input contact-bg-input py-3"
                                            placeholder="Your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <InputGroup>
                                        <div className="contact-icon-wrapper">
                                            <i className="bi bi-envelope-open-fill"></i>
                                        </div>
                                        <Form.Control
                                            type="email"
                                            className="contact-input contact-bg-input py-3"
                                            placeholder="Your email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={12}>
                                    <InputGroup className="mt-2">
                                        <div className="contact-textarea-wrapper">
                                            <i className="bi bi-pencil-fill mt-1"></i>
                                        </div>
                                        <Form.Control
                                            as="textarea"
                                            className="contact-textarea contact-bg-input py-3"
                                            placeholder="Describe Your Project in Short"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={12} className="mt-4">
                                    <Button type="submit" className="contact-btn" disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending...' : 'Submit'}
                                    </Button>

                                    {status === 'success' && (
                                        <div className="alert alert-success mt-3 py-2" role="alert">
                                            Message sent successfully!
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="alert alert-danger mt-3 py-2" role="alert">
                                            Failed to send message. Please try again later.
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Contact;
