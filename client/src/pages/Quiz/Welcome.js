import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// import AnonHomePage from '../AnonHomePage';
import Quiz from './Quiz';
import StretchIcon from './images/StretchIcon.png';

const Welcome = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img src={StretchIcon} />
      <h3>Welcome To Stretch It Out</h3>
      <p>
        We’re so happy you decided to take stretching to the next level! Help us
        get to know you more by answering the following 3 questions.{' '}
      </p>
      <Link to="/">No Thanks</Link>
      <Button onClick={handleShow}>Sounds Good</Button>
      <Quiz show={show} hide={handleClose} />
    </div>
  );
};

export default Welcome;
