import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import AnonPic from '../pages/Profile/images/AnonPic.png';
import Logout from './Logout';
import LoginModal from './LoginModal';

const Navigation = () => {
  const { currentUser, handleLogin } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="container-fluid vw-100" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Find a Stretch
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item className="mr-2">Stretches</Nav.Item>
          <Nav.Item as={Link} to="/benefits">
            Benefits
          </Nav.Item>
          <Nav.Item>Blog</Nav.Item>

          <Nav.Item>
            <Dropdown drop="down" className="mr-1">
              <Dropdown.Toggle variant="">
                <Image
                  src={currentUser?.avatar ? currentUser?.avatar : AnonPic}
                  height={50}
                  width={50}
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={handleShow}>
                  Log In
                </Dropdown.Item>
                <Logout />
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item as={Link} to="/sign-up">
            Start Trial
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <LoginModal show={show} hide={handleClose} />
    </Navbar>
  );
};

export default Navigation;
