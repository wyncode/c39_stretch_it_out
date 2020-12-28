import React from 'react';
import YogaGirl from '../../../images/ws2-picture.png';

const Whitespace = () => {
  return (
    <>
      <div className="wsContainer">
        <h2>
          Transform your body and mind <br /> Stretch By Stretch
        </h2>
        <div className="wsWrapper row">
          <div className="wsText col">
            <ul className="wsList">
              <li>Pick your pain area</li>
              <li>Quick and on-the-go</li>
              <li>Daily reminders</li>
              <li>Track progress</li>
            </ul>
          </div>
          <img
            className="yoga-girl"
            src={YogaGirl}
            alt="woman doing yoga stretch"
          />
        </div>
      </div>
    </>
  );
};

export default Whitespace;
