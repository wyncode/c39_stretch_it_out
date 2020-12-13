import React, { useContext, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import StretchModal from './StretchModal';
import axios from 'axios';
import {
  Neck,
  Shoulder,
  UpperBack,
  Wrist,
  LowerBack,
  Chest,
  Glutes,
  Quads,
  Hamstrings,
  Knee,
  Groin,
  Calves
} from '../../stretchimages/index.js';

const CategoryCard = () => {
  const {
    modalShow,
    setModalShow,
    targetArea,
    setTargetArea,
    stretchNames,
    setStretchNames
  } = useContext(AppContext);

  const handleClick = (field) => (e) => {
    setTargetArea(field);
    setModalShow(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/stretches/${targetArea}`);
      setStretchNames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [targetArea]);

  return (
    <div>
      <h2 className="body-area">Upper Body Stretches</h2>

      <CardDeck>
        <Card className="category-card" onClick={handleClick('Neck')}>
          <Card.Img src={Neck} />
          <h4 className="stretch-card-title">NECK</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Shoulder')}>
          <Card.Img src={Shoulder} />
          <h4 className="stretch-card-title">SHOULDER</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Upper Back')}>
          <Card.Img src={UpperBack} />
          <h4 className="stretch-card-title">UPPER BACK</h4>
        </Card>
      </CardDeck>

      <CardDeck>
        <Card className="category-card" onClick={handleClick('Wrist')}>
          <Card.Img src={Wrist} />
          <h4 className="stretch-card-title">WRIST</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Lower Back')}>
          <Card.Img src={LowerBack} />
          <h4 className="stretch-card-title">LOWER BACK</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Chest')}>
          <Card.Img src={Chest} />
          <h4 className="stretch-card-title">CHEST</h4>
        </Card>
      </CardDeck>

      <h2 className="body-area">Lower Body Stretches</h2>

      <CardDeck>
        <Card className="category-card" onClick={handleClick('Glutes')}>
          <Card.Img src={Glutes} />
          <h4 className="stretch-card-title">GLUTES</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Quads')}>
          <Card.Img src={Quads} />
          <h4 className="stretch-card-title">QUADS</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Hamstrings')}>
          <Card.Img src={Hamstrings} />
          <h4 className="stretch-card-title">HAMSTRINGS</h4>
        </Card>
      </CardDeck>

      <CardDeck className="card-deck">
        <Card className="category-card" onClick={handleClick('Knee')}>
          <Card.Img src={Knee} />
          <h4 className="stretch-card-title">KNEE</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Groin')}>
          <Card.Img src={Groin} />
          <h4 className="stretch-card-title">GROIN</h4>
        </Card>

        <Card className="category-card" onClick={handleClick('Calves')}>
          <Card.Img src={Calves} />
          <h4 className="stretch-card-title">CALVES</h4>
        </Card>
      </CardDeck>

      <StretchModal
        stretch={stretchNames && stretchNames}
        target={targetArea}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CategoryCard;
