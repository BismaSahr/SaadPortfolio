import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Testimonials.css';

const row1Reviews = [
  {
    title: "Completely satisfied and highly recommend",
    text: `"Completely satisfied.... Third straight year with TaxAct and will be back again next year."`,
    user: "@HappyFiler",
    date: "Feb 27, 2026"
  },
  {
    title: "Worth every penny",
    text: `"This is an intuitive, user-friendly tax filing product - absolutely wonderful to way to file year after year."`,
    user: "@Guinness",
    date: "Feb 27, 2026"
  },
  {
    title: "EASY",
    text: `"Super easy and fast. Questions were all answered. Good price."`,
    user: "@Sanhenry",
    date: "Feb 27, 2026"
  },
  {
    title: "Easy to use",
    text: `"The program guides you through with ease. Making sure you don't miss anything. Highly recommend."`,
    user: "@MikeCR",
    date: "Feb 27, 2026"
  },
  {
    title: "Great — Easy to read questions",
    text: `"Great --- Easy to read questions and E-file was easy....."`,
    user: "@arkfatboy",
    date: "Feb 27, 2026"
  }
];

const row2Reviews = [
  {
    title: "Easy to use",
    text: `"I have been using tax act since 2012 and very happy with it"`,
    user: "@Jib72",
    date: "Feb 27, 2026"
  },
  {
    title: "Taxes",
    text: `"Very easy to use. We have used this for years and I would recommend it to anyone."`,
    user: "@SkipperD",
    date: "Feb 27, 2026"
  },
  {
    title: "Great ease",
    text: `"Thought it would be free file but still like the service"`,
    user: "@Mark R",
    date: "Feb 27, 2026"
  },
  {
    title: "Faster and easy",
    text: `"I use taxAc every year and I don't change it, I love it"`,
    user: "@Poncho",
    date: "Feb 27, 2026"
  },
  {
    title: "great app",
    text: `"My wife did our taxes took a button in an hour and tax act is definitely the way simple, no confusion.I love it."`,
    user: "@tax25",
    date: "Feb 27, 2026"
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
