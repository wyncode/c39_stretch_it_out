import React, { useContext } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';

const IndividualStretchCard = ({ id, stretchName, illustration }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/stretch/${id}`);
  };

  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img src={illustration} />
          <Button onClick={() => handleClick(id)}>{stretchName}</Button>
        </Card>
      </CardDeck>
    </div>
  );
};

export default IndividualStretchCard;
