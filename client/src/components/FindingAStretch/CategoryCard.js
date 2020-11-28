import React, { useContext, useEffect } from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import StretchModal from '../FindingAStretch/StretchModal';
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
} from '../../StretchImages/index.js';

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
      console.log(response);
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
      <h2>Upper Body Stretches</h2>
      <CardColumns>
        <Card>
          <Card.Img src={Neck} />
          <Button value="neck" onClick={handleClick}>
            Neck
          </Button>
        </Card>

        <Card value="Shoulder">
          <Card.Img src={Shoulder} />
          <Card.Title value="shoulder">Shoulder</Card.Title>
        </Card>

        <Card value="Upper Back">
          <Card.Img src={UpperBack} />
          <Card.Title>Upper Back</Card.Title>
        </Card>

        <Card value="Wrist">
          <Card.Img src={Wrist} />
          <Card.Title>Wrist</Card.Title>
        </Card>

        <Card value="Lower Back">
          <Card.Img src={LowerBack} />
          <Card.Title>Lower Back</Card.Title>
        </Card>
        <Card value="Chest">
          <Card.Img src={Chest} />
          <Card.Title>Chest</Card.Title>
        </Card>
      </CardColumns>
      <h2>Lower body Stretches</h2>
      <CardColumns>
        <Card value="Glutes">
          <Card.Img src={Glutes} />
          <Card.Title>Glutes</Card.Title>
        </Card>

        <Card value="Quads">
          <Card.Img src={Quads} />
          <Card.Title>Quads</Card.Title>
        </Card>

        <Card value="Hamstrings">
          <Card.Img src={Hamstrings} />
          <Card.Title>Hamstrings</Card.Title>
        </Card>

        <Card value="Knee">
          <Card.Img src={Knee} />
          <Card.Title>Knee</Card.Title>
        </Card>

        <Card value="Groin">
          <Card.Img src={Groin} />
          <Card.Title>Groin</Card.Title>
        </Card>

        <Card value="Calves">
          <Card.Img src={Calves} />
          <Card.Title>Calves</Card.Title>
        </Card>
      </CardColumns>
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
