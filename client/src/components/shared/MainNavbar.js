import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = () => (
  <>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to='/'>
          <Navbar.Brand>DrAppts</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"> 
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to='/'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/users'>
                  Users
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/doctors'>
                  Doctors
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </>
)

export default MainNavbar;