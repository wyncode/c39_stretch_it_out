import React from 'react';
import Back from '../images/Back.png';
import Image from 'react-bootstrap/Image';

const PreviousButton = ({ activeSchema, handlePrevious }) =>
  activeSchema.previous ? (
    <div onClick={handlePrevious} className="previous">
      <Image src={Back} alt="back-arrow" />
    </div>
  ) : null;

export default PreviousButton;
