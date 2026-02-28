import React from "react";
import "./SkillCard.css";

const SkillCard = ({ imgSrc, label, percentage }) => {
  return (
    <div className="product_item w-100 d-flex justify-content-center" data-aos="zoom-in">
      <div className="border card-lift bg-custom-1 text-center skill-pill-container">
        <div className="icon-shape mx-auto">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={imgSrc} alt={label} className="skill-img" />
            </div>
            <div className="flip-card-back">
              <img src={imgSrc} alt={label} className="skill-img" />
            </div>
          </div>
        </div>

        <p className="text-uppercase mb-0 mt-3 text-secondary skill-label" title={label}>
          {label}
        </p>

        <h2 className="fw-bold percentage-text">
          {percentage}
          <span className="per-symbol">%</span>
        </h2>
      </div>
    </div>
  );
};

export default SkillCard;