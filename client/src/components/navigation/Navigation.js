import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  Navbar,
  Nav,
  NavItem,
  Dropdown,
  FormControl
} from 'react-bootstrap';
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar
        className="row justify-content-between align-self-baseline nav"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="brand">
          <Link to="/">
            <Image className="logo" src={Logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="stretches-benefits-nav">
              <Link to="/body-area" className="nav-link">
                Stretches
              </Link>

              <Link to="/benefits" className="nav-link">
                Benefits
              </Link>
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
