import React, { useContext } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const IndividualStretchCard = (props) => {
  const { selectedStretch, setSelectedStretch } = useContext(AppContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/stretch/${props.id}`);
      const stretch = response.data.filter((bodyPart) => {
        return bodyPart.stretchName;
      });
      console.log(stretch);
    } catch {
      console.log('whoppps');
    }
  };
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img src={props.illustration} />
          <Button onClick={handleClick}>{props.stretchName}</Button>
        </Card>
      </CardDeck>
    </div>
  );
};

export default IndividualStretchCard;
