// import React from "react";
// import CountUp from "react-countup";
// import { Container, Row, Col } from "react-bootstrap";
// import "./About.css";
// import SkillCard from "../../Components/SkillCard/SkillCard";

// const About = () => {
//   const handleMouseMove = (e) => {
//     const img = e.currentTarget.querySelector(".parallax-item");
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
//     img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
//   };

//   const handleMouseLeave = (e) => {
//     const img = e.currentTarget.querySelector(".parallax-item");
//     img.style.transform = "translate(0, 0) scale(1)";
//   };

//   return (
//     <Container fluid className="about-container px-lg-5 overflow-hidden">
//       <div className="container mb-5">
//         <div className="row justify-content-center">
//           <div className="col-12 text-center">

//             <span className="custom-primary custom-border text-uppercase  bg-white rounded-3 px-3 py-1 fw-medium mb-3 d-inline-block" style={{ fontSize: '14px' }}>
//               About us
//             </span>

//             <h2 className="display-5 fw-bold text-dark">
//               About Us
//             </h2>

//           </div>
//         </div>
//       </div>
//       <Row className="g-5 justify-content-center align-items-stretch mx-0">

//         <Col lg={6} className="d-flex flex-column pe-lg-5">
//           <div className="flex-grow-1 d-flex mb-4">
//             <div
//               className="zoom-img w-100 h-100"
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="parallax-item-wrap h-100"  data-aos="zoom-in">
//                 <div className="parallax-item h-100">
//                   <img
//                     src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-1.png"
//                     alt="about"
//                     className="img-fluid rounded-3 w-100 h-100 object-fit-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Row className="stats-section w-100 mx-0 g-4">
// <Col xs={12} sm={6} className="stat-col">
//     <div className="stat-card">
//       <div className="stat-title">(Projects Done)</div>
//       <h2 className="stats-number">
//         <span className="fw-bold display-5">
//           <CountUp end={200} duration={3} />
//         </span>
//         <span className="plus-style">+</span>
//       </h2>
//       <p className="stat-text">
//         Delivered scalable digital solutions with performance and precision.
//       </p>
//     </div>
//   </Col>

//   <Col xs={12} sm={6} className="stat-col">
//     <div className="stat-card">
//       <div className="stat-title">(Client Reviews)</div>
//       <h2 className="stats-number">
//         <span className="fw-bold display-5">
//           <CountUp end={200} duration={3} />
//         </span>
//         <span className="plus-style">+</span>
//       </h2>
//       <p className="stat-text">
//         Built lasting client relationships through reliability and clarity.
//       </p>
//     </div>
//   </Col>

//   <Col xs={12} sm={6} className="stat-col">
//     <div className="stat-card">
//       <div className="stat-title">(B2B / B2C)</div>
//       <h2 className="stats-number">
//         <span className="fw-bold display-5">
//           <CountUp end={180} duration={3} />
//         </span>
//         <span className="plus-style">+</span>
//       </h2>
//       <p className="stat-text">
//         Engineered growth-focused platforms for businesses and consumers.
//       </p>
//     </div>
//   </Col>

//   <Col xs={12} sm={6} className="stat-col">
//     <div className="stat-card">
//       <div className="stat-title">(AI Projects)</div>
//       <h2 className="stats-number">
//         <span className="fw-bold display-5">
//           <CountUp end={20} duration={3} />
//         </span>
//         <span className="plus-style">+</span>
//       </h2>
//       <p className="stat-text">
//         Developed automation systems powered by machine learning.
//       </p>
//     </div>
//   </Col>
//      <Col xs={12} className="border-top border-2 pt-3 mt-3 text-center" style={{ borderTopColor: '#8054FF' }} >
//                 <p className="mb-0">
//                   Hire me for your next project.{" "}
//                   <a href="/contact" className="fw-bold text-decoration-none custom-primary">
//                     Let’s Talk!
//                   </a>
//                 </p>
//               </Col>

//           </Row>
//         </Col>

//         <Col lg={6} className="d-flex flex-column px-3 px-lg-5 pt-lg-0 pt-5">
//           <div className="right-column-content d-flex flex-column h-100">
//             <div className="w-100">
//               <div className="custom-primary fw-normal text-uppercase text-decoration-underline small">About Me</div>
//               <h1 className="fw-bold  mt-2">Creative soul dedicated to transforming visions into premium assets.</h1>
//               <p className="mt-4 text-muted ">
//                 You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.
//               </p>
//             </div>

//             <div className="skills-grid mt-5 mb-4">
//               <SkillCard imgSrc="https://inexa-html-demos.vercel.app/assets/imgs/icon/figma.png" label="Design" percentage={99} />
//               <SkillCard imgSrc="https://inexa-html-demos.vercel.app/assets/imgs/icon/consultant.png" label="Consultancy" percentage={100} />
//               <SkillCard imgSrc="https://inexa-html-demos.vercel.app/assets/imgs/icon/figma.png" label="Development" percentage={97} />
//               <SkillCard imgSrc="https://inexa-html-demos.vercel.app/assets/imgs/icon/figma.png" label="AI" percentage={95} />
//             </div>

//             <div className="w-100 mt-auto">
//               <div className="zoom-img" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} data-aos="zoom-in">
//                 <div className="parallax-item-wrap">
//                   <div className="parallax-item">
//                     <img
//                       src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-2.png"
//                       alt="about-2"
//                       className="img-fluid rounded-3 w-100"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Col>

//       </Row>
//     </Container>
//   );
// };

// export default About;










import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";


const About = () => {

  const handleMouseMove = (e) => {
    const img = e.currentTarget.querySelector(".parallax-item");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector(".parallax-item");
    img.style.transform = "translate(0, 0) scale(1)";
  };

  return (
    <Container fluid className="about-container px-lg-5 ">
      <Row className="g-5 justify-content-center align-items-start">

        {/* Left Column */}
        <Col lg={6} className="d-flex flex-column align-items-center pe-lg-8">
          <Row className="mb-4 w-100 justify-content-center">
            <Col className="d-flex justify-content-center">
              <div
                className="zoom-img"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="parallax-item-wrap">
                  <div className="parallax-item">
                    <img
                      src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-1.png"
                      alt="about"
                      className="img-fluid rounded-3"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Left Stats */}
          <Row className="p-5 stats-section w-100 justify-content-center">
            <Col md={6} className="mb-4 text-center g-5">
              <div className="custom-primary text-uppercase small fw-medium text-decoration-underline">
                (projects done)
              </div>
              <h2 className="d-flex justify-content-center align-items-center stats-number">
                <span className="me-1">+</span>
                <span className="fw-bold display-5">25</span>
                <span className="ms-1 text-muted">k</span>
              </h2>
              <p className="text-muted">
                I've navigated 200+ projects, each a unique chapter in my journey of creative exploration.
              </p>
            </Col>
            <Col md={6} className="mb-4 text-center g-5">
              <div className="custom-primary text-uppercase small fw-medium text-decoration-underline">
                (client reviews)
              </div>
              <h2 className="d-flex justify-content-center align-items-center stats-number">
                <span className="me-1">+</span>
                <span className="fw-bold display-5">12</span>
                <span className="ms-1 text-muted">k</span>
              </h2>
              <p className="text-muted">
                My commitment exceeds limits—110% dedicated to the success and impact of every project.
              </p>
            </Col>
            <Col xs={12} className="border-top border-2 custom-border pt-3 mt-3 text-center">
              <p className="mb-0">
                Hire me for your next project.{" "}
                <a href="/contact" className="fw-bold text-decoration-none custom-primary">
                  Let’s Talk!
                </a>
              </p>
            </Col>
          </Row>
        </Col>

        {/* Right Column */}
        <Col lg={6} className="d-flex flex-column justify-content-center ps-lg-8 pt-lg-0 pt-5 align-items-center">
          <Row className="mb-5 w-100 m-lg-0 m-5">
            <Col className="text-start p-0">
              <div>
                <div className="custom-primary fw-normal text-uppercase text-decoration-underline small">
                  About Me
                </div>
                <h1 className="fw-bold display-5  mt-2" >
                  Creative soul dedicated to transforming visions into premium assets.
                </h1>
                <p className="mt-4 text-muted " style={{ maxWidth: "90%" }}>
                  Through strategic design, high-performance development, AI-powered solutions, and smart consultancy, I create digital systems that don’t just function instead they impress. Every decision is intentional, every detail is refined, and every solution is built to reflect a true WOW factor while driving efficiency, scalability, and long-term value.
                </p>
              </div>


            </Col>
          </Row>


          <Row className="mt-4 w-100 justify-content-start">
            <Col className="d-flex justify-content-start">
              <div
                className="zoom-img"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="parallax-item-wrap">
                  <div className="parallax-item">
                    <img
                      src="https://inexa-html-demos.vercel.app/assets/imgs/background/img-about-2.png"
                      alt="about-2"
                      className="img-fluid rounded-3"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default About;