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

        <Card>
          <Card.Img src={Shoulder} />
          <Button value="Shoulder" onClick={handleClick}>
            Shoulder
          </Button>
        </Card>

        <Card>
          <Card.Img src={UpperBack} />
          <Button value="Upper Back" onClick={handleClick}>
            Upper Back
          </Button>
        </Card>

        <Card>
          <Card.Img src={Wrist} />
          <Button value="Wrist" onClick={handleClick}>
            Wrist
          </Button>
        </Card>

        <Card>
          <Card.Img src={LowerBack} />
          <Button value="Lower Back" onClick={handleClick}>
            Lower Back
          </Button>
        </Card>

        <Card>
          <Card.Img src={Chest} />
          <Button value="Chest" onClick={handleClick}>
            Chest
          </Button>
        </Card>
      </CardColumns>

      <h2>Lower body Stretches</h2>

      <CardColumns>
        <Card>
          <Card.Img src={Glutes} />
          <Button value="Glutes" onClick={handleClick}>
            Glutes
          </Button>
        </Card>

        <Card>
          <Card.Img src={Quads} />
          <Button value="Quads" onClick={handleClick}>
            Quads
          </Button>
        </Card>

        <Card>
          <Card.Img src={Hamstrings} />
          <Button value="Hamstrings" onClick={handleClick}>
            Hamstrings
          </Button>
        </Card>

        <Card>
          <Card.Img src={Knee} />
          <Button value="Knee" onClick={handleClick}>
            Knee
          </Button>
        </Card>

        <Card>
          <Card.Img src={Groin} />
          <Button value="Groin" onClick={handleClick}>
            Groin
          </Button>
        </Card>

        <Card>
          <Card.Img src={Calves} />
          <Button value="Calves" onClick={handleClick}>
            Calves
          </Button>
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
