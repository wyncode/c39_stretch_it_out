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
          <Button value="Neck" onClick={handleClick}>
            Neck
          </Button>
        </Card>

        <Card value="Shoulder">
          <Card.Img src={Shoulder} />
          <Button value="Shoulder">Shoulder</Button>
        </Card>

        <Card value="Upper Back">
          <Card.Img src={UpperBack} />
          <Button>Upper Back</Button>
        </Card>

        <Card value="Wrist">
          <Card.Img src={Wrist} />
          <Button>Wrist</Button>
        </Card>

        <Card value="Lower Back">
          <Card.Img src={LowerBack} />
          <Button>Lower Back</Button>
        </Card>
        <Card value="Chest">
          <Card.Img src={Chest} />
          <Button>Chest</Button>
        </Card>
      </CardColumns>
      <h2>Lower body Stretches</h2>
      <CardColumns>
        <Card value="Glutes">
          <Card.Img src={Glutes} />
          <Button>Glutes</Button>
        </Card>

        <Card value="Quads">
          <Card.Img src={Quads} />
          <Button>Quads</Button>
        </Card>

        <Card value="Hamstrings">
          <Card.Img src={Hamstrings} />
          <Button>Hamstrings</Button>
        </Card>

        <Card value="Knee">
          <Card.Img src={Knee} />
          <Button>Knee</Button>
        </Card>

        <Card value="Groin">
          <Card.Img src={Groin} />
          <Button>Groin</Button>
        </Card>

        <Card value="Calves">
          <Card.Img src={Calves} />
          <Button>Calves</Button>
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
