import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';
import Navbar from '../components/Navbar';

const AnonHomePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1>This is home</h1>
      <button onClick={handleShow}>Log In</button>
      <LoginModal show={show} hide={handleClose} />
      <Navbar />
    </>
  );
};

export default AnonHomePage;
