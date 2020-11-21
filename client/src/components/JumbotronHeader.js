import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
//import HeaderImg from '../images/Hero Image.png';

const JumbotronHeader = () => {
  return (
    <Jumbotron className="jumboHeader" background->
      <h1>Easy Stretches For</h1>
      <h1>Everyone to Enjoy!</h1>
      <p>Explore Quick Stretches</p>
      <p>From Your Desk to the Gym</p>
      <p>
        <Button variant="primary">Find a Stretch</Button>
      </p>
    </Jumbotron>
  );
};

export default JumbotronHeader;
