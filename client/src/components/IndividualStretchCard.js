import React, { useContext, useEffect } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';

const IndividualStretchCard = ({ id, stretchName, illustration }) => {
  const { setModalShow, selectedStretch, setSelectedStretch } = useContext(
    AppContext
  );
  const history = useHistory();

  console.log(id);
  const handleClick = () => {
    history.push(`/stretch/${id}`);
    setModalShow(false);
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
