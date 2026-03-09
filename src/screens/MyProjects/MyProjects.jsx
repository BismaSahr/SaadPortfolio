import React, { useRef, useEffect } from 'react';
import './MyProjects.css';
import project1 from '../../assets/img-portfolio-3-3.jpeg';
import project2 from '../../assets/img-portfolio-3-4.jpeg';
import project3 from '../../assets/img-portfolio-3-5.jpeg';
import project4 from '../../assets/img-portfolio-3-6.jpeg';
import project5 from '../../assets/img-portfolio-3-7.jpeg';
import project6 from '../../assets/portfolio1.jpeg';

const MyProjects = () => {
  const row1Images = [project1, project2, project3, project6];
  const row2Images = [project2, project6, project3, project1];

  const TickerRow = ({ images, directionClass }) => {
    const tickerRef = useRef(null);

    useEffect(() => {
      const slider = tickerRef.current;
      const list = slider.querySelector('.ticker-list');

      let isDown = false;
      let startX;
      let scrollLeft;

      const startDrag = (e) => {
        isDown = true;
        slider.classList.add('dragging');
        startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        list.style.animationPlayState = 'paused';
      };

      const endDrag = () => {
        isDown = false;
        slider.classList.remove('dragging');
        list.style.animationPlayState = 'running';
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

    return (
      <div ref={tickerRef} className={`ticker-container ${directionClass}`}>
        <div className="ticker-wrapper">
          <ul className="ticker-list">
            {[...images, ...images].map((src, index) => (
              <li key={index} className="ticker-item">
                <a href="#">
                  <img className="rounded-4 img-fluid" src={src} alt="project" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="projects-section py-5" id='projects'>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center mt-4">
            <span className="custom-primary custom-border text-uppercase rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block">
              Portfolio
            </span>
            <h2 className="display-5 fw-bold">
              My Featured Works
            </h2>
          </div>
        </div>
      </div>

      <div className="position-relative overflow-hidden mb-5">

        <TickerRow images={row1Images} directionClass="ticker-left" />

        <div className="mt-4 mt-lg-5">
          <TickerRow images={row2Images} directionClass="ticker-right" />
        </div>

        <h1 className="stroke-text">
          Creative Works
        </h1>

      </div>
    </section>
  );
};

export default MyProjects;