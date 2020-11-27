import React, { useState, useContext, useEffect } from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import StretchModal from '../components/StretchModal';
import axios from 'axios';

const CategoryCard = () => {
  const [modalShow, setModalShow] = useState(false);
  const {
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
      <CardColumns>
        <Card>
          {/* <Card.Img src={}/> */}
          <Button value="neck" onClick={handleClick}>
            Neck
          </Button>
        </Card>

        <Card value="Shoulder">
          {/* <Card.Img src={}/> */}
          <Card.Title>Shoulder</Card.Title>
        </Card>

        <Card value="Upper Back">
          {/* <Card.Img src={}/> */}
          <Card.Title>Upper Back</Card.Title>
        </Card>

        <Card value="Wrist">
          {/* <Card.Img src={}/> */}
          <Card.Title>Wrist</Card.Title>
        </Card>

        <Card value="Lower Back">
          {/* <Card.Img src={}/> */}
          <Card.Title>Lower Back</Card.Title>
        </Card>
        <Card value="Chest">
          {/* <Card.Img src={}/> */}
          <Card.Title>Chest</Card.Title>
        </Card>
      </CardColumns>

      <CardColumns>
        <Card value="Glutes">
          {/* <Card.Img src={}/> */}
          <Card.Title>Glutes</Card.Title>
        </Card>

        <Card value="Quads">
          {/* <Card.Img src={}/> */}
          <Card.Title>Quads</Card.Title>
        </Card>

        <Card value="Hamstrings">
          {/* <Card.Img src={}/> */}
          <Card.Title>Hamstrings</Card.Title>
        </Card>

        <Card value="Knee">
          {/* <Card.Img src={}/> */}
          <Card.Title>Knee</Card.Title>
        </Card>

        <Card value="Groin">
          {/* <Card.Img src={}/> */}
          <Card.Title>Groin</Card.Title>
        </Card>

        <Card value="Calves">
          {/* <Card.Img src={}/> */}
          <Card.Title>Calves</Card.Title>
        </Card>
      </CardColumns>
      <StretchModal
        stretch={stretchNames}
        target={targetArea}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CategoryCard;
