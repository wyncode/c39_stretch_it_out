import React from 'react';
import { Container } from 'react-bootstrap';
import DevicesImg from '../images/responsive-devices.png';
import ReviewCards from '../images/customer-reviews.png';

const WhiteSpace3 = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div id="ws3Title">
        <h2 id="ws3Title">
          <span>Stretch </span> On Your Favorite Device
        </h2>
      </div>
      <div id="ws3DeviceImage">
        <img src={DevicesImg} alt="Image of smart watch, tablet and phone" />
      </div>
      <div id="ws3ReviewTitle">
        <h2>Check Out Some Customer Ratings on The APP Store</h2>
      </div>
      <div id="ws3ReviewCards">
        <img src={ReviewCards} alt="customer reviews" />
      </div>
    </div>
  );
};

export default WhiteSpace3;
