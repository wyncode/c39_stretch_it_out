import React from 'react';
import { Container } from 'react-bootstrap';
import appleIcon from '../images/Dowload on App Store 1.png';
import googleIcon from '../images/google-play-badge 1.png';

const GetStartedFooter = () => {
  return (
    <>
      <div className="getStartedFooter">
        <div className="getStartedContainer">
          <h1 className="getStartedText">Get Started</h1>
          <div>
            <img className="getStartedIcon" src={appleIcon} alt="apple store" />
            <img
              className="getStartedIcon2"
              src={googleIcon}
              alt="google play"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedFooter;
