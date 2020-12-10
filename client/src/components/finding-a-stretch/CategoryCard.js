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
          <Card.Title>Neck</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Shoulder')}>
          <Card.Img src={Shoulder} />
          <Card.Title>Shoulder</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Upper Back')}>
          <Card.Img src={UpperBack} />
          <Card.Title>Upper Back</Card.Title>
        </Card>
      </CardDeck>

      <CardDeck>
        <Card className="category-card" onClick={handleClick('Wrist')}>
          <Card.Img src={Wrist} />
          <Card.Title>Wrist</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Lower Back')}>
          <Card.Img src={LowerBack} />
          <Card.Title>Lower Back</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Chest')}>
          <Card.Img src={Chest} />
          <Card.Title>Chest</Card.Title>
        </Card>
      </CardDeck>

      <h2 className="body-area">Lower Body Stretches</h2>

      <CardDeck>
        <Card className="category-card" onClick={handleClick('Glutes')}>
          <Card.Img src={Glutes} />
          <Card.Title>Glutes</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Quads')}>
          <Card.Img src={Quads} />
          <Card.Title>Quads</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Hamstrings')}>
          <Card.Img src={Hamstrings} />
          <Card.Title>Hamstrings</Card.Title>
        </Card>
      </CardDeck>

      <CardDeck className="card-deck">
        <Card className="category-card" onClick={handleClick('Knee')}>
          <Card.Img src={Knee} />
          <Card.Title>Knee</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Groin')}>
          <Card.Img src={Groin} />
          <Card.Title>Groin</Card.Title>
        </Card>

        <Card className="category-card" onClick={handleClick('Calves')}>
          <Card.Img src={Calves} />
          <Card.Title>Calves</Card.Title>
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
