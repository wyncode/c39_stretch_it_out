import React from 'react';
import { Container } from 'react-bootstrap';
import DevicesImg from '../images/responsive-devices.png';
import ReviewCards from '../images/customer-reviews.png';

const WhiteSpace3 = () => {
  return (
    <Container>
      <div>
        <h2 id="ws3-title">Stretch On Your Favorite Device</h2>
      </div>
      <div id="ws3-deviceImage">
        <img src={DevicesImg} alt="Image of smart watch, tablet and phone" />
      </div>
      <div>
        <h2 id="ws3-reviewTitle">
          Check Out Some Customer Ratings on The APP Store
        </h2>
      </div>
      <div id="ws3-reviews">
        <img src={ReviewCards} alt="customer reviews" />
      </div>
    </Container>
  );
};

export default WhiteSpace3;
