import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import appleIcon from '../../../images/Dowload on App Store 1.png';
import googleIcon from '../../../images/google-play-badge 1.png';

const GetStartedFooter = () => {
  const history = useHistory();
  return (
    <>
      <div className="getStartedFooter">
        <div className="getStartedContainer">
          <h1 className="getStartedText">Get Started</h1>
          <div>
            <Link to="https://www.apple.com/app-store/">
              <img
                className="getStartedIcon"
                src={appleIcon}
                alt="apple store"
              />
            </Link>
            <Link to="https://play.google.com/store">
              <img
                className="getStartedIcon2"
                src={googleIcon}
                alt="google play"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartedFooter;
