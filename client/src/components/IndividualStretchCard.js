import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';

const IndividualStretchCard = (props) => {
  return (
    <div>
      <CardColumns>
        <Card>
          <Card.Img src={props.illustration} />
          <Button>{props.stretchName}</Button>
        </Card>
        <Card>
          <Card.Img />
          <Button></Button>
        </Card>
        <Card>
          <Card.Img />
          <Button></Button>
        </Card>
        <Card>
          <Card.Img />
          <Button></Button>
        </Card>
        <Card>
          <Card.Img />
          <Button></Button>
        </Card>
        <Card>
          <Card.Img />
          <Button></Button>
        </Card>
      </CardColumns>
    </div>
  );
};

export default IndividualStretchCard;
