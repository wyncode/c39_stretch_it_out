import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
//import HeaderImg from '../images/Hero Image.png';

const JumbotronHeader = () => {
  return (
    <div className="jumboHeader">
      <div className="headerWrapper">
        <div className="headerText">
          <h1>
            Easy Stretches For <br /> Everyone to Enjoy!
          </h1>
        </div>
        <div className="headerBtnText">
          <p>
            Explore Quick Stretches
            <br />
            From Your Desk to the Gym
          </p>
          <div>
            <Button variant="primary">Find a Stretch</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronHeader;
