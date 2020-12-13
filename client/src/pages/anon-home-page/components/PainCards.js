import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { cards } from '../Constants';

const CardGroup1 = () => {
  return (
    <div className="painContainer">
      <h2>Target Your Pain Areas</h2>
      <div className="painCards">
        <CardDeck>
          {cards.map((card) => (
            <Card className="pain-card">
              <Card.Img
                fluid
                variant="top"
                src={card.Picture}
                alt={card.Desc}
              />
              <Card.Title className="card-title">{card.Title}</Card.Title>
              <Card.Text className="card-text">{card.Text}</Card.Text>
            </Card>
          ))}
        </CardDeck>
      </div>
    </div>
  );
};

export default CardGroup1;
