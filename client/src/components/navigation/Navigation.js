import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image, NavItem, Dropdown, Navbar } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import { Logo, StartTrial } from '../../images/index';
import AnonPic from '../../pages/profile/images/AnonPic.png';
import Logout from '../Logout';
import { LoginModal } from '../login';

import './Navigation.css';

const Navigation = () => {
  const { currentUser, handleLogin } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand className="nav-logo">
          <Link to="/">
            <Image className="logo" src={Logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="row justify-content-around nav">
            <div className="stretches-benefits-nav">
              <Nav.Item>
                <Nav.Link href="/body-area" className="nav-link">
                  Stretches
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/benefits" className="nav-link">
                  Benefits
                </Nav.Link>
              </Nav.Item>
            </div>

            <div className="profile-trial-nav">
              <Dropdown as={NavItem}>
                <Dropdown.Toggle variant="" className="profile-dropdown-nav">
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
              <Link to="/sign-up" className="start-trial-link">
                <Image src={StartTrial} />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginModal show={show} hide={handleClose} />
    </div>
  );
};

export default Navigation;
