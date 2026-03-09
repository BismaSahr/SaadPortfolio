import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Testimonials.css';

const row1Reviews = [
  {
    title: "Completely satisfied and highly recommend",
    text: `"Completely satisfied….. Third straight year with Saad and will continue working on our AI product with him next year as well."`,
    user: "@Mark P.",
    date: "Dec 31, 2025"
  },
  {
    title: "Worth every penny",
    text: `"He is an absolute WordPress Expert, absolutely wonderful to have him in the team and continuing work year after year. "`,
    user: "@ Folakemi A.",
    date: "Feb 27, 2023"
  },
  {
    title: "EASY",
    text: `"Saad was super easy and fast. Questions were all answered. Good price."`,
    user: "@Mohammed K.",
    date: "June 02, 2019"
  },
  {
    title: "Easy To Communicate",
    text: `"Saad guides you through with ease. His consultancy is way more good than what we expected. Making sure you don’t miss anything. Highly recommend. "`,
    user: "@Erica M.",
    date: "Nov 19, 2021"
  },
  {
    title: "Great — Easy To Work With",
    text: `"Great - - - Saad is very easy to work with all the time. He approaches the app coding in a very unique way."`,
    user: "@Scott D.",
    date: "Oct 21, 2018"
  }
];

const row2Reviews = [
  {
    title: "Easy to use",
    text: `"I have been using Saad’s consultancy skills since 2017 whenever I need to clarification in my business and very happy with it. He knows the trend, the strategies very well. Highly recommended Saad to everyone out there."`,
    user: "@Mark, Founder Deephow",
    date: "Feb 21, 2026"
  },
  {
    title: "AI Automation",
    text: `"Saad build a voice agent for us which was very easy to use and adapt. We have used this for years and I would recommend it to anyone. Great work Saad…."`,
    user: "@SkipperD",
    date: "May 04, 2022"
  },
  {
    title: "Website Expert",
    text: `"I thought at first it would be just consultancy but later on realized Saad is a person having design and development skills as well. He is an expert throughout the areas he is in. Highly recommended."`,
    user: "@Allen P.",
    date: "Aug 14, 2016"
  },
  {
    title: "Faster and easy",
    text: `"I hired Saad for my mobile app design and now every year he makes changes to it and have already got that converting big and I will not change him for sure. I’m loving my app and his skillset."`,
    user: "@Poncho I.",
    date: "Sept 16, 2025"
  },
  {
    title: "Great E-commerce Store (Shopify) Skills",
    text: `"My wife and I hired Saad couple of months back for our E-commerce store on Shopify and this took a button in couple of weeks and Saad is definitely someone who made it simple and perfect. No confusion. We love it!"`,
    user: "@Bob & Emma",
    date: "April 07, 2024"
  }
];

const TickerRow = ({ reviews, directionClass }) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const slider = tickerRef.current;
    if (!slider) return;

    const list = slider.querySelector('.testimonial-ticker-list');

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
      isDown = true;
      slider.classList.add('dragging');
      startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      if (list) list.style.animationPlayState = 'paused';
    };

    const endDrag = () => {
      isDown = false;
      slider.classList.remove('dragging');
      if (list) list.style.animationPlayState = 'running';
    };

    const onDrag = (e) => {
      if (!isDown) return;
      const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('touchstart', startDrag);

    slider.addEventListener('mouseleave', endDrag);
    slider.addEventListener('mouseup', endDrag);
    slider.addEventListener('touchend', endDrag);

    slider.addEventListener('mousemove', onDrag);
    slider.addEventListener('touchmove', onDrag);

    return () => {
      slider.removeEventListener('mousedown', startDrag);
      slider.removeEventListener('touchstart', startDrag);
      slider.removeEventListener('mouseleave', endDrag);
      slider.removeEventListener('mouseup', endDrag);
      slider.removeEventListener('touchend', endDrag);
      slider.removeEventListener('mousemove', onDrag);
      slider.removeEventListener('touchmove', onDrag);
    };
  }, []);

  // Duplicate items for continuous scrolling
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div ref={tickerRef} className={`testimonial-ticker-container ${directionClass}`}>
      <div className="testimonial-ticker-wrapper">
        <ul className="testimonial-ticker-list">
          {duplicatedReviews.map((review, index) => (
            <li key={index} className="testimonial-ticker-item">
              <div className="testimonial-card">
                <div className="testimonial-card-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h5 className="testimonial-card-title">{review.title}</h5>
                <p className="testimonial-card-text">{review.text}</p>
                <div className="testimonial-card-footer mt-5">
                  <span className="testimonial-card-user ">{review.user}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-section" id='testimonals'>
      <Container className="mb-5">
        <div className="container  mb-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-4">
              <span className="custom-primary custom-border text-uppercase rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
                Testimonals
              </span>
              <h2 className="display-5 fw-bold">
                My Testimonals
              </h2>
            </div>
          </div>
        </div>
        <Row className="justify-content-center">
          <Col lg={9} xl={8} xs={10} className="d-flex flex-column justify-content-center">
            <div className="testimonials-header mt-3">
              <Row>
                <Col md={6} xs={12} className="d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0">
                  <h2 className="testimonials-title">We’re not the only ones<br className="d-none d-md-block" /> who love TaxAct®.</h2>
                  <p className="testimonials-subtitle pe-md-4">See what real filers have to say about their experience with TaxAct—and why so many trust us year after year.</p>
                </Col>
                <Col md={6} xs={12}>
                  <div className="rating-box d-flex flex-column justify-content-center align-items-center">
                    <div className="rating-score text-center">4.4/5</div>
                    <div className="rating-stars text-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <div className="rating-reviews-link text-center">
                      <a href="#">32,429+ Reviews</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="position-relative overflow-hidden pt-4">
        {/* Top Row - Scrolls Left */}
        <TickerRow reviews={row1Reviews} directionClass="testimonial-ticker-left" />

        {/* Bottom Row - Scrolls Right */}
        <TickerRow reviews={row2Reviews} directionClass="testimonial-ticker-right" />
      </div>
    </section>
  );
};

export default Testimonials;
