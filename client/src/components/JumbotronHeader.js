import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            <Link to="/body-area">
              <Button variant="primary">Find a Stretch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumbotronHeader;
