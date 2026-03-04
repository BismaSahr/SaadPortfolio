import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Clients.css';
import clientLogo from '../../assets/myclientsectionlogo.png';
import partnerlogo from '../../assets/partnerlogo.png';

const Clients = () => {
    const [activeTab, setActiveTab] = useState('clients');

    return (
        <Container fluid className="clients-section px-lg-5" id='clients'>
            <div className="container mb-5 mt-3">
                <Row className="align-items-start mb-5 pb-3">
                    <Col lg={6} md={12} className="mb-4 mb-lg-0">
                        <h2 className="display-6 clients-heading">
                            Our <span>Clients</span><br />
                            That Trust Us
                        </h2>
                    </Col>
                    <Col lg={6} md={12} className="d-flex flex-column align-items-start">
                        <p className="clients-desc text-muted mb-4">
                            We have made a digital family in past years, ensuring digital excellence and
                            delivering what we deem the best for you.
                        </p>
                        <div className="clients-toggle">
                            <button
                                className={`toggle-btn ${activeTab === 'clients' ? 'active' : ''}`}
                                onClick={() => setActiveTab('clients')}
                            >
                                Clients
                            </button>
                            <button
                                className={`toggle-btn ${activeTab === 'partners' ? 'active' : ''}`}
                                onClick={() => setActiveTab('partners')}
                            >
                                Partners
                            </button>
                        </div>
                    </Col>
                </Row>

                {activeTab === 'clients' && (
                    <Row className="g-4">
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={clientLogo} alt="Client 1" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={clientLogo} alt="Client 2" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={clientLogo} alt="Client 3" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={clientLogo} alt="Client 4" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={clientLogo} alt="Client 5" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={clientLogo} alt="Client 6" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={clientLogo} alt="Client 7" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={clientLogo} alt="Client 8" className="client-icon" />
                            </div>
                        </Col>
                    </Row>
                )}

                {activeTab === 'partners' && (
                    <Row className="g-4">
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={partnerlogo} alt="Partner 1" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={partnerlogo} alt="Partner 2" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={partnerlogo} alt="Partner 3" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={clientLogo} alt="Partner 4" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={clientLogo} alt="Partner 5" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={clientLogo} alt="Partner 6" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={clientLogo} alt="Partner 7" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={clientLogo} alt="Partner 8" className="client-icon" />
                            </div>
                        </Col>
                    </Row>
                )}
            </div>
        </Container>
    );
};

export default Clients;
