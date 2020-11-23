import React from 'react';
import { Container } from 'react-bootstrap';
import YogaGirl from '../images/ws2-picture.png';

const Whitespace = () => {
  return (
    <Container>
      <div className="ws-title">
        <h2>Transform your body and Mind</h2>
        <h2>Stretch By Stretch</h2>
      </div>
      <div className="ws">
        <ul className="ws-text">
          <li>Pick your pain area</li>
          <li>Quick and on-the-go</li>
          <li>Daily reminders</li>
          <li>Track progress</li>
        </ul>
        <div>
          <img
            className="ws-img"
            src={YogaGirl}
            alt="woman doing yoga stretch"
          />
        </div>
      </div>
    </Container>
  );
};

export default Whitespace;
