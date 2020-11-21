import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';

const CardGroup1 = () => {
  return (
    <div className="cgDiv">
      <h2 className="cg1title">Target Your Pain Areas</h2>
      <CardGroup className="cardGroup1">
        <Card className="cards1">
          <Card.Img
            variant="top"
            src="https://www.independent.ie/incoming/79502/36159716.ece/AUTOCROP/w1240h700/backp.jpg"
          />
          <Card.Body>
            <Card.Title>Neck Pain</Card.Title>
            <Card.Text>
              Is there a constant throbbing in your neck? Does it hurt to turn
              your head?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards1">
          <Card.Img
            variant="top"
            src="https://www.independent.ie/incoming/79502/36159716.ece/AUTOCROP/w1240h700/backp.jpg"
          />
          <Card.Body>
            <Card.Title>Lower Back Pain</Card.Title>
            <Card.Text>
              Pain from sitting or standing for too long? Do you have nagging
              lower back pain?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cards1">
          <Card.Img
            variant="top"
            src="https://www.independent.ie/incoming/79502/36159716.ece/AUTOCROP/w1240h700/backp.jpg"
          />
          <Card.Body>
            <Card.Title>All-Around Pain</Card.Title>
            <Card.Text>
              Does everything hurt? Do you have low physical energy and feel
              mentally drained?
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* <Button className="cg1btn" variant="info">
        Stretch It Out
      </Button> */}
    </div>
  );
};

export default CardGroup1;
