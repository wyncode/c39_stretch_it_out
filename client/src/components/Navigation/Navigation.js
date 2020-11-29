import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Image, NavItem, Dropdown } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import { Logo, StartTrial } from '../../images/index';
import AnonPic from '../../pages/Profile/images/AnonPic.png';
import Logout from '../Logout';
import LoginModal from '../LoginModal';

import './Navigation.css';

const Navigation = () => {
  const { currentUser, handleLogin } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav className="row justify-content-between">
        <div className="nav-logo">
          <Link to="/">
            <Image src={Logo} />
          </Link>
        </div>

        <div className="stretches-benefits-nav">
          <Nav.Item className="nav-items">
            <Nav.Link href="/body-area">Stretches</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-items">
            <Nav.Link href="/benefits">Benefits</Nav.Link>
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

      <LoginModal show={show} hide={handleClose} />
    </div>
  );
};

export default Navigation;
