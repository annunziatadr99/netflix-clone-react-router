import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";

const MyNav = () => (
  <Navbar expand="lg" variant="dark" className="bg-dark">
    <Container fluid>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          alt="logo netflix"
          height={80}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#TV Shows" className="nav-link text-light">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#Movies" className="nav-link text-light">
            Movies
          </Nav.Link>
          <Nav.Link href="#Recently Added" className="nav-link text-light">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#My List" className="nav-link text-light">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="d-flex align-items-center">
          <Nav.Link href="#home" className="nav-link text-light">
            <Search />
          </Nav.Link>
          <Nav.Link href="#link" className="nav-link text-light">
            KIDS
          </Nav.Link>
          <Nav.Link href="#home" className="nav-link text-light">
            <BellFill />
          </Nav.Link>
          <NavDropdown title={<PersonFill />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
