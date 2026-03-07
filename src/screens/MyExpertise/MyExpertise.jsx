import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MyExpertise.css';

const expertiseData = [
    {
        id: '01',
        title: 'Web Design & Development',
        description: <>Modern, responsive websites built with <strong className="fw-bold">custom development or CMS platforms</strong>, designed for performance, scalability, and easy management</>,
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-7.png'
    },
    {
        id: '02',
        title: 'App Design & Development',
        description: <>Designing and developing <strong className="fw-bold">cross-platform</strong> and native apps for <strong className="fw-bold">iOS & Android</strong>, built for performance, scalability, and seamless user experience.</>,
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-8.png'
    },
    {
        id: '03',
        title: 'AI Development',
        description: <>Building intelligent AI-powered solutions including <strong className="fw-bold">custom chatbots, automation systems, and workflow integrations using tools like n8n,</strong> designed to streamline processes and improve business efficiency.</>,
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-9.png'
    },
    {
        id: '04',
        title: 'Consultancy',
        description: <>Helping businesses plan, design, and implement <strong className="fw-bold">websites, apps, and AI solutions</strong> with strategic advice that maximizes efficiency, growth, and ROI.</>,
        icon: 'https://inexa-html-demos.vercel.app/assets/imgs/icon/icon-7.png'
    }
];

const MyExpertise = () => {
    return (
        <Container id="expertise" fluid className="expertise-section px-lg-5 bg-theme-secondary text-theme-main" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container mb-2">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4">
                        <span className="custom-primary custom-border text-uppercase bg-theme rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
                            services
                        </span>
                        <h2 className="display-5 fw-bold text-theme-main">
                            My Expertise
                        </h2>
                    </div>
                </div>
            </div>

            <Row className="g-4 justify-content-center mx-0">
                {expertiseData.map((item, index) => (
                    <Col lg={3} md={6} sm={12} key={index} className="mb-4">
                        <div className="experti p-4 bg-theme rounded-4 hover-up position-relative z-1 shadow text-decoration-none">
                            <img src={item.icon} alt={item.title} />
                            <h3 className="position-relative z-1 text-theme-main">{item.title}</h3>
                            <p className="text-theme-secondary position-relative z-1">{item.description}</p>
                            <span className="stroke_light_xl position-absolute top-0 end-0 lh-1 z-0">{item.id}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MyExpertise;