import { Container, Row, Col, Button } from "react-bootstrap"
import './Home.css'
import NavBar from "../../Components/Navbar/Navbar"
import HeroSection from "../../Components/Hero/Hero"
import About from "../About/About"
import MyExpertise from "../MyExpertise/MyExpertise"
import Clients from "../Clients/Clients"
import CustomCursor from "../../Components/CustomCursor/CustomCursor"
import Process from "../Processes/Process"
import CircularBadge from "../../Components/CircularBadge/CircularBadge"
import MyProjects from "../MyProjects/MyProjects"
import Testimonials from "../Testimonials/Testimonials"
import FAQ from "../../Components/FAQ/FAQ"
import Pricing from "../Pricing/Pricing"
import Contact from "../Contact/Contact"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
    return (
        <Container fluid className="home-container">
            <CustomCursor />
            <section className="hero-section">
                <header>
                    <NavBar />
                </header>
                <HeroSection />
            </section>
            <About />
            <MyExpertise />
            <Clients />

            <Process />

            <CircularBadge />

            <MyProjects />
            <Testimonials />
            <FAQ />
            {/* <Pricing /> */}
            <Contact />
            <Footer />


        </Container>
    )
}
export default Home