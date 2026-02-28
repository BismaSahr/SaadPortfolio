import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MyExpertise.css';

const expertiseData = [
    {
        id: '01',
        title: 'Branding',
        description: 'Elevate your presence with distinctive logos, color palettes, and brand guidelines that leave a lasting impression.',
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-7.png'
    },
    {
        id: '02',
        title: 'Consultancy',
        description: 'Elevate your presence with distinctive logos, color palettes, and brand guidelines that leave a lasting impression.',
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-8.png'
    },
    {
        id: '03',
        title: 'Product design',
        description: 'Elevate your presence with distinctive logos, color palettes, and brand guidelines that leave a lasting impression.',
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-9.png'
    },
    {
        id: '04',
        title: 'Development',
        description: 'Elevate your presence with distinctive logos, color palettes, and brand guidelines that leave a lasting impression.',
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-7.png'
    }
];

const MyExpertise = () => {
    return (
        <Container fluid className="expertise-section px-lg-5" style={{ backgroundColor: '#f0f4e9' }}>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4">
                        <span className="custom-primary custom-border text-uppercase bg-white rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
                            services
                        </span>
                        <h2 className="display-5 fw-bold text-dark">
                            My Expertise
                        </h2>
                    </div>
                </div>
            </div>

            <Row className="g-4 justify-content-center mx-0">
                {expertiseData.map((item, index) => (
                    <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                        <a href="#" className="experti p-4 bg-white rounded-4 hover-up position-relative z-1 shadow text-decoration-none">
                            <img src={item.icon} alt={item.title} />
                            <h3 className="position-relative z-1">{item.title}</h3>
                            <p className="text-secondary position-relative z-1">{item.description}</p>
                            <span className="stroke_light_xl position-absolute top-0 end-0 lh-1 z-0">{item.id}</span>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MyExpertise;
