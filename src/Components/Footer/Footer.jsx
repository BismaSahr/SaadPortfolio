import React from 'react';
import './Footer.css';

const Footer = () => {
    const handleTalkClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer-section bg-primary-custom text-white pt-120">
      <div className="container">

        {/* Top Row */}
        <div className="row mb-5 align-items-start">

          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h5 className="brand-statement pe-lg-5">
              For more than 8 years, I have been experienced in Web, Mobile App Design & Development, AI Development as well as Consultancy for all of them. I have always keen to bring brands to life. 
            </h5>
          </div>

          {/* Right Column */}
          <div className="col-lg-5 offset-lg-1 my-auto">
            <h4 className="footer-title mb-4">Get in touch</h4>

            <a href="tel:+12345678900" className="linkCol d-flex mb-3 text-decoration-none">
              <i className="bi bi-telephone-fill me-3"></i>
              <span>+92 3201220638</span>
            </a>

            <a href="mailto:hello@inexa.com" className="linkCol d-flex mb-3 text-decoration-none">
              <i className="bi bi-envelope-paper-fill me-3"></i>
              <span>radat738@gmail.com</span>
            </a>

            <p className="d-flex mb-0">
              <i className="bi bi-geo-alt-fill me-3"></i>
              <span>
                Karachi, Sindh, Pakistan
              </span>
            </p>
          </div>
        </div>

        {/* Lets Talk Button Row */}
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <a onClick={handleTalkClick} className="lets-talk-btn">
              Let’s talk
            </a>
          </div>
        </div>

        {/* Huge Name */}
        <div className="position-relative py-5 mt-lg-5 text-center">
          <h1 className="huge-text mb-0">SAAD KHAN!</h1>
        </div>

        {/* Social Bar */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="social-bar rounded-4 overflow-hidden">

              <a href="#" className="social-item">
                Behance <i className="bi bi-behance ms-auto"></i>
              </a>

              <a href="#" className="social-item">
                Dribbble <i className="bi bi-dribbble ms-auto"></i>
              </a>

              <a href="https://github.com/saadk738" className="social-item">
                GitHub  <i className="bi bi-github ms-auto"></i>
              </a>

              <a href="#" className="social-item">
                Linkedin <i className="bi bi-linkedin ms-auto"></i>
              </a>

              <a href="#" className="social-item">
                Youtube <i className="bi bi-youtube ms-auto"></i>
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center py-5">
            <p className="small mb-0 text-white-50">
              © Copyrights 2026 <span className="text-white fw-bold">Saad Ullah Khan</span>. All Rights Reserved.

            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;