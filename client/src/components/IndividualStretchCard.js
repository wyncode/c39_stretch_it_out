import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card, CardColumns, Button } from 'react-bootstrap';
import axios from 'axios';

const IndividualStretchCard = () => {
  const {
    stretchNames,
    setStretchNames,
    targetArea,
    setTargetArea
  } = useContext(AppContext);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(targetArea);
    console.log(stretchNames);
    try {
      const response = await axios.get(`/api/stretches/${targetArea}`);
      const stretches = response.data.filter((bodyPart) => {
        return bodyPart.stretchName;
      });
      console.log(stretches);
    } catch {
      console.log('whoppps');
    }
  };
  return (
    <div>
      <CardColumns>
        <Card>
          <Card.Img />
          <Button onClick={handleClick}></Button>
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
