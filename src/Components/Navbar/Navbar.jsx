import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
import logoImg from '../../assets/favicon.svg';
import dotMenuImg from '../../assets/dot-menu.png';

function NavBar() {
  const expand = 'lg'; 

  return (
    <Navbar key={expand} expand={expand} className="page-nav mb-3">
      <Container fluid className="px-3">

        <Navbar.Brand href="#home" className="brand d-flex align-items-center">
          <img src={logoImg} alt="Logo" className="logo-img me-2" />
          <span className="brand-text">Inexa</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center d-lg-none">
          <div className="theme-toggle-mobile me-3">
            <i className="bi bi-moon-stars-fill"></i>
          </div>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0 shadow-none p-0">
            <div className="custom-toggle">
              <img src={dotMenuImg} alt="Menu" className="dot-menu-icon" />
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
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
              <Nav.Link href="#home" className="links">Home</Nav.Link>
              <Nav.Link href="#portfolio" className="links">About</Nav.Link>
              <Nav.Link href="#blog" className="links">Processes</Nav.Link>
              <Nav.Link href="#faqs" className="links">Projects</Nav.Link>
              <Nav.Link href="#contact" className="links">Contact</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <div className="theme-toggle-desktop d-none d-lg-flex me-4">
                <i className="bi bi-moon-stars-fill"></i>
              </div>
              <Button variant="outline-secondary text-black button-talk">Let's Talk</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default NavBar;


