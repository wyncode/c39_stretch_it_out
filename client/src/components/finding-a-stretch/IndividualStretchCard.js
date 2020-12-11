import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';

const IndividualStretchCard = ({ id, stretchName, illustration }) => {
  const { setModalShow } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/stretch/${id}`);
    setModalShow(false);
  };

  return (
    <Card className="stretch-modal-cards" onClick={() => handleClick(id)}>
      <Card.Img src={illustration} />
      <h4 className="stretch-modal-card-title">{stretchName}</h4>
    </Card>
  );
};

export default IndividualStretchCard;
