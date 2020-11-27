import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import NeckPain from '../images/neck-pain-card.png';
import LowerBack from '../images/lower-back-card.png';
import AllAround from '../images/all-around-pain-card.png';

const CardGroup1 = () => {
  return (
    <div className="painContainer">
      <h2>Target Your Pain Areas</h2>
      <div className="painCards">
        <img src={NeckPain} alt="Woman with neck pain" />
        <img src={LowerBack} alt="Man with back pain" />
        <img src={AllAround} alt="Woman with pain all around" />
      </div>
    </div>
  );
};

export default CardGroup1;
