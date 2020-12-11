import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BmiCalcModal from './BmiCalcModal';

const BmiCalc = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    console.log(show);
  };

  return (
    <div>
      <Button className="get-your-bmi" onClick={handleClick}>
        Get Your BMI
      </Button>
      <BmiCalcModal show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default BmiCalc;
