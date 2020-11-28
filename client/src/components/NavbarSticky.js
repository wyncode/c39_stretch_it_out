import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import { AppContext } from '../context/Appcontext';
import Logout from '../components/Logout';

const NavbarSticky = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
        Find a Stretch
      </Navbar.Brand>
      <Navbar.toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item className="mr-2">Stretches</Nav.Item>
          <Nav.Item>Benefits</Nav.Item>
          <Nav.Item>Blog</Nav.Item>
          <Nav.Item>Log In</Nav.Item>
          <Nav.Item>
            <Dropdown drop="down" className="mr-1">
              <Dropdown.Toggle variant="">
                <Image
                  scr={currentUser?.avatar ? currentUser.avatar : 'image.jpg'}
                  height={50}
                  width={50}
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Logout />
              </Dropdown.menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>Start Trial</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarSticky;
