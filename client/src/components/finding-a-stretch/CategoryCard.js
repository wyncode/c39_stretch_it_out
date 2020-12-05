import React, { useContext, useEffect } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
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

  const handleClick = async (e) => {
    setTargetArea(e.target.value);
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
        <Card className="category-card ">
          <Card.Img src={Neck} />
          <Button
            value="Neck"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Neck
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={Shoulder} />
          <Button
            value="Shoulder"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Shoulder
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={UpperBack} />
          <Button
            value="UpperBack"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Upper Back
          </Button>
        </Card>
      </CardDeck>

      <CardDeck>
        <Card className="category-card">
          <Card.Img src={Wrist} />
          <Button
            value="Wrist"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Wrist
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={LowerBack} />
          <Button
            value="LowerBack"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Lower Back
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={Chest} />
          <Button
            value="Chest"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Chest
          </Button>
        </Card>
      </CardDeck>

      <h2 className="body-area">Lower Body Stretches</h2>

      <CardDeck>
        <Card className="category-card">
          <Card.Img src={Glutes} />
          <Button
            value="Glutes"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Glutes
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={Quads} />
          <Button
            value="Quads"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Quads
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={Hamstrings} />
          <Button
            value="Hamstrings"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Hamstrings
          </Button>
        </Card>
      </CardDeck>

      <CardDeck className="card-deck">
        <Card className="category-card">
          <Card.Img src={Knee} />
          <Button
            value="Knee"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Knee
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={Groin} />
          <Button
            value="Groin"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Groin
          </Button>
        </Card>

        <Card className="category-card">
          <Card.Img src={Calves} />
          <Button
            value="Calves"
            onClick={handleClick}
            className="category-card-button"
            variant="outline-dark"
          >
            Calves
          </Button>
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
