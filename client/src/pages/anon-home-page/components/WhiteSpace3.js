import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import DevicesImg from '../../../images/responsive-devices.png';
import { reviews } from '../Constants';
import Stars from '../../../images/five-star-review.png';

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
      <CardDeck id="ws3ReviewCards">
        {reviews.map((review) => (
          <Card className="border-0 shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Card.Title className="review-name">{review.name}</Card.Title>
              <Card.Img className="star-review" src={Stars} />
              <Card.Text>{review.text}</Card.Text>
              <footer>{review.footer}</footer>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};

export default WhiteSpace3;
