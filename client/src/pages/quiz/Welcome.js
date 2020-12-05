import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Quiz from './Quiz';
import StretchIcon from './images/StretchIcon.png';

const Welcome = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="welcome-div">
      <img src={StretchIcon} />
      <h3>Welcome To Stretch It Out</h3>
      <div className="welcome-paragraph">
        <p>We’re so happy you decided to take stretching to the next level! </p>
        <p>
          {' '}
          Help us get to know you more by answering the following 3 questions.
        </p>
      </div>
      <div className="welcome-button-div">
        <Link class="no-thanks-link" to="/">
          No Thanks
        </Link>
        <Button className="sounds-good-button" onClick={handleShow}>
          Sounds Good
        </Button>
      </div>
      <Quiz show={show} hide={handleClose} setShow={setShow} />
    </div>
  );
};

export default Welcome;
