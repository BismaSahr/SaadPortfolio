

import { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import './Hero.css';
import heroImg from '../../assets/heroImg.png'

const HeroSection = () => {

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const uiuxX = useTransform(scrollYProgress, [0, 0.7], [200, -550]);

    const alsonX = useTransform(scrollYProgress, [0.6, 1], [-100, 200]);

    return (
        <section id="home" ref={targetRef} style={{ position: "relative", overflow: "hidden", padding: "20px 0px 0px clamp(15px, 6vw, 60px)" }}>
            <Container>
                <motion.p
                    style={{ x: uiuxX }}
                    className="stroke_light_lg lh-1"
                    data-aos="zoom-in"
                >
                    Freelancer
                </motion.p>
                <img src={heroImg} className="heroImg" data-aos="zoom-in" />
                <motion.div
                    className="hero-tag"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <p className="fs-5 fw-bold">Freelancer</p>
                    <p className="fs-5 fw-bold">Expert Web Designer, Developer & Consultant</p>
                </motion.div>

                {/* <motion.div
                    className="hero-button"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Button variant=" text-white button-cv">Download CV</Button>
                </motion.div> */}

                <motion.p
                    style={{ x: alsonX }}
                    className="stroke_dark_lg lh-1"
                    data-aos="zoom-in"
                >
                    SAAD ULLAH KHAN
                </motion.p>

            </Container>
        </section>
    );
};

export default HeroSection;