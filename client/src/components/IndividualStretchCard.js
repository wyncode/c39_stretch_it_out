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

  const handleClick = async (e) => {
    const path = `/stretch/${selectedStretch}`;
    try {
      setSelectedStretch({ id });

      setModalShow(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(selectedStretch);

  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img src={illustration} />
          <Button onClick={() => handleClick(id)} value={id}>
            {stretchName}
          </Button>
        </Card>
      </CardDeck>
    </div>
  );
};

export default IndividualStretchCard;
