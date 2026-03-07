import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';
import logoImg from '../../assets/favicon.svg';
import dotMenuImg from '../../assets/dot-menu.png';

function NavBar() {
  const expand = 'lg';
  const { isDarkMode, toggleTheme } = useTheme();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTalkClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar key={expand} expand={expand} className="page-nav mb-3">
      <Container fluid className="px-3">

        <Navbar.Brand href="#home" className="brand d-flex align-items-center">
          <img src={logoImg} alt="Logo" className="logo-img me-2" />
          <span className="brand-text">Inexa</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center d-lg-none">
          <button
            className="theme-toggle-mobile me-3"
            onClick={toggleTheme}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-label="Toggle dark mode"
          >
            <i className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill"}></i>
          </button>

          <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0 shadow-none p-0">
            <div className="custom-toggle">
              <img src={dotMenuImg} alt="Menu" className="dot-menu-icon" />
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={show}
          onHide={handleClose}
          restoreFocus={false}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="brand d-flex align-items-center">
              <img src={logoImg} alt="Logo" className="logo-img me-2" style={{ height: '40px' }} />
              <span className="brand-text">Inexa</span>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="w-100 d-lg-flex align-items-center">
            <Form className="d-flex mb-3 d-lg-none sidebar-search">
              <div className="search-wrapper w-100">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2 search-input"
                  aria-label="Search"
                />
                <FaSearch className="search-icon" />
              </div>
            </Form>

            <Nav className="mx-auto nav-center">
              <Nav.Link href="#home" className="links" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link href="#about" className="links" onClick={handleClose}>About</Nav.Link>
              <Nav.Link href="#expertise" className="links" onClick={handleClose}>Expertise</Nav.Link>
              <Nav.Link href="#processes" className="links" onClick={handleClose}>Processes</Nav.Link>
              <Nav.Link href="#projects" className="links" onClick={handleClose}>Projects</Nav.Link>
              <Nav.Link href="#testimonals" className="links" onClick={handleClose}>Testimonials</Nav.Link>
              <Nav.Link href="#faqs" className="links" onClick={handleClose}>FAQs</Nav.Link>
              <Nav.Link href="#clients" className="links" onClick={handleClose}>Clients</Nav.Link>
              <Nav.Link href="#contact" className="links" onClick={handleClose}>Contact</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <button
                className="theme-toggle-desktop d-none d-lg-flex me-4"
                onClick={toggleTheme}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                aria-label="Toggle dark mode"
              >
                <i className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill"}></i>
              </button>
              <Button variant="outline-secondary text-black button-talk" onClick={handleTalkClick}>Let's Talk</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default NavBar;


