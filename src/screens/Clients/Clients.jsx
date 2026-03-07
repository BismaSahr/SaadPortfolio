import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Clients.css';
import clientLogo1 from '../../assets/clientlogo1.png';
import clientLogo2 from '../../assets/clientlogo2.png';
import clientLogo3 from '../../assets/clientlogo3.png';
import clientLogo4 from '../../assets/clientlogo4.png';
import clientLogo5 from '../../assets/clientlogo5.png';
import clientLogo6 from '../../assets/clientlogo6.png';
import clientLogo7 from '../../assets/clientlogo7.png';
import clientLogo8 from '../../assets/clientlogo8.png';
import partnerlogo from '../../assets/partnerlogo.png';



import partnerlogo1 from '../../assets/partnerlogo1.png';
import partnerlogo2 from '../../assets/partnerlogo2.png';
import partnerlogo3 from '../../assets/partnerlogo3.png';
import partnerlogo4 from '../../assets/partnerlogo4.png';
import partnerlogo5 from '../../assets/partnerlogo5.png';
import partnerlogo6 from '../../assets/partnerlogo6.png';
import partnerlogo7 from '../../assets/partnerlogo7.png';
import partnerlogo8 from '../../assets/partnerlogo8.png';

const Clients = () => {
    const [activeTab, setActiveTab] = useState('clients');

    return (
        <Container fluid className="clients-section px-lg-5" id='clients'>
            <div className="container mb-5 mt-3">
                <Row className="align-items-start mb-5 pb-3">
                    <Col lg={6} md={12} className="mb-4 mb-lg-0">
                        <h2 className="display-6 clients-heading">
                            My <span>Clients</span><br />
                            That Trust Me
                        </h2>
                    </Col>
                    <Col lg={6} md={12} className="d-flex flex-column align-items-start">
                        <p className="clients-desc text-muted mb-4">
                            I have made a digital family in past years, ensuring digital excellence and
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
                                <img src={clientLogo1} alt="Client 1" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={clientLogo2} alt="Client 2" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={clientLogo3} alt="Client 3" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={clientLogo4} alt="Client 4" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={clientLogo5} alt="Client 5" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={clientLogo6} alt="Client 6" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={clientLogo7} alt="Client 7" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={clientLogo8} alt="Client 8" className="client-icon" />
                            </div>
                        </Col>
                    </Row>
                )}

                {activeTab === 'partners' && (
                    <Row className="g-4">
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={partnerlogo1} alt="Partner 1" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={partnerlogo2} alt="Partner 2" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={partnerlogo3} alt="Partner 3" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={partnerlogo4} alt="Partner 4" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="0">
                                <img src={partnerlogo5} alt="Partner 5" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="100">
                                <img src={partnerlogo6} alt="Partner 6" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="200">
                                <img src={partnerlogo7} alt="Partner 7" className="client-icon" />
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6} xs={12}>
                            <div className="client-card" data-aos="fade-up" data-aos-delay="300">
                                <img src={partnerlogo8} alt="Partner 8" className="client-icon" />
                            </div>
                        </Col>
                    </Row>
                )}
            </div>
        </Container>
    );
};

export default Clients;
