import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
//import HeaderImg from '../images/Hero Image.png';

const JumbotronHeader = () => {
  return (
    <div className="jumboHeader">
      <div className="headerText">
        <h1>Easy Stretches For</h1>
        <h1>Everyone to Enjoy!</h1>
      </div>
      <div className="headerBtnText">
        <p>Explore Quick Stretches</p>
        <p>From Your Desk to the Gym</p>
        <div>
          <Button variant="primary">Find a Stretch</Button>
        </div>
      </div>
    </div>
  );
};

export default JumbotronHeader;
