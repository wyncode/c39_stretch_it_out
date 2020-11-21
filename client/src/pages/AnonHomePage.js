import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';
import Navbar from '../components/Navbar';
import WhiteSpace from '../components/WhiteSpace';
import CardGroup1 from '../components/PainCards';
import WhiteSpace2 from '../components/WhiteSpace2';
import VideoCarousel from '../components/VideoCarousel';
import GetStartedFooter from '../components/GetStartedFooter';
import JumbotronHeader from '../components/JumbotronHeader';
import ContactFooter from '../components/ContactFooter';
import WhiteSpace3 from '../components/WhiteSpace3';
import BlogSpace from '../components/BlogSpace';
import './AnonHomePage.css';

const AnonHomePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1>This is home</h1>
      <button onClick={handleShow}>Log In</button>
      <LoginModal show={show} hide={handleClose} />
      <Navbar />
      <JumbotronHeader />
      <WhiteSpace />
      <CardGroup1 />
      <WhiteSpace2 />
      <VideoCarousel />
      <WhiteSpace3 />
      <BlogSpace />
      <GetStartedFooter />
      <ContactFooter />
    </div>
  );
};

export default AnonHomePage;
