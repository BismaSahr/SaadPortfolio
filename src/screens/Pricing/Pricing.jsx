import React from 'react';
import './Pricing.css';

const Pricing = () => {
    const pricingData = [
        {
            title: "For team",
            price: "49",
            description: "Elevate your presence with distinctive logos, color palettes, and brand.",
            isFeatured: false,
            features: [
                "Dedicated design solution",
                "Custom printing design",
                "100 Screen design",
                "Dedicated design solution",
                "Custom printing design"
            ]
        },
        {
            title: "Enterprise",
            price: "99",
            description: "Elevate your presence with distinctive logos, color palettes, and brand.",
            isFeatured: true,
            features: [
                "Dedicated design solution",
                "Custom printing design",
                "100 Screen design",
                "Dedicated design solution",
                "Custom printing design"
            ]
        },
        {
            title: "For team",
            price: "299",
            description: "Elevate your presence with distinctive logos, color palettes, and brand.",
            isFeatured: false,
            features: [
                "Dedicated design solution",
                "Custom printing design",
                "100 Screen design",
                "Dedicated design solution",
                "Custom printing design"
            ]
        }
    ];

    return (
        <section className="pricing-section py-5">
            <div className="container">

                <div className="container mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">

                            {/* The "Portfolio" Badge */}
                            <span className="custom-primary custom-border text-uppercase  bg-white rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block" style={{ fontSize: '14px' }}>
                                pricing
                            </span>

                            {/* The Main Heading */}
                            <h2 className="display-5 fw-bold text-dark mb-3">
                                My Pricing Plan
                            </h2>

                        </div>
                    </div>
                </div>

                <div className="pricing-grid">
                    {pricingData.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
                            <h3 className="plan-title">{plan.title}</h3>
                            <div className="plan-price">
                                <span className="currency">$</span>
                                <span className="amount">{plan.price}</span>
                                <span className="period">/monthly</span>
                            </div>
                            <hr className="divider" />
                            <p className="plan-description">{plan.description}</p>

                            <div className="plan-actions">
                                <button className="btn-primary-custom">Try For Free</button>
                                {plan.isFeatured && <button className="btn-secondary-custom">Get In Touch</button>}
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <span className="feature-text">{feature}</span>
                                        <span className="feature-check">✓</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;