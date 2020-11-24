import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AnonHomePage from '../../AnonHomePage';
import StretchIcon from '../images/StretchIcon.png';

const Welcome = () => {
  return (
    <div>
      <img src={StretchIcon} />
      <h3>Welcome To Stretch It Out</h3>
      <p>
        We’re so happy you decided to take stretching to the next level! Help us
        get to know you more by answering the following 3 questions.{' '}
      </p>
      <Link to={AnonHomePage}>No Thanks</Link>
      {/* <Button onClick={initForm}>Sounds Good</Button> */}
    </div>
  );
};

export default Welcome;
