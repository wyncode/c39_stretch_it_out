import React from 'react';
import Navigation from '../components/Navigation/Navigation';
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
  return (
    <div className="d-flex flex-column align-items-center">
      <Navigation />
      <JumbotronHeader />
      <WhiteSpace />
      <CardGroup1 />
      <WhiteSpace2 />
      <VideoCarousel />
      <BlogSpace />
      <WhiteSpace3 />
      <GetStartedFooter />
      <ContactFooter />
    </div>
  );
};

export default AnonHomePage;
