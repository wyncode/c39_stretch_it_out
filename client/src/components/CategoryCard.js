import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import StretchModal from '../components/StretchModal';

const CategoryCard = () => {
  const [modalShow, setModalShow] = useState(false);
  const { targetArea, setTargetArea } = useContext(AppContext);

  const handleClick = (e) => {
    console.log(e.target.value);
    setModalShow(true);
    setTargetArea(e.target.value);
    console.log(modalShow);
  };

  return (
    <div>
      <div>
        <Card>
          {/* <Card.Img src={}/> */}
          <Button value="Neck" onClick={handleClick}>
            Neck
          </Button>
        </Card>

        <Card value="Shoulder">
          {/* <Card.Img src={}/> */}
          <Button>Shoulder</Button>
        </Card>

        <Card value="Upper Back">
          {/* <Card.Img src={}/> */}
          <Button>Upper Back</Button>
        </Card>

        <Card value="Wrist">
          {/* <Card.Img src={}/> */}
          <Button>Wrist</Button>
        </Card>

        <Card value="Lower Back">
          {/* <Card.Img src={}/> */}
          <Button>Lower Back</Button>
        </Card>
        <Card value="Chest">
          {/* <Card.Img src={}/> */}
          <Button>Chest</Button>
        </Card>
      </div>
      <div>
        <Card value="Glutes">
          {/* <Card.Img src={}/> */}
          <Button>Glutes</Button>
        </Card>

        <Card value="Quads">
          {/* <Card.Img src={}/> */}
          <Button>Quads</Button>
        </Card>

        <Card value="Hamstrings">
          {/* <Card.Img src={}/> */}
          <Button>Hamstrings</Button>
        </Card>

        <Card value="Knee">
          {/* <Card.Img src={}/> */}
          <Button>Knee</Button>
        </Card>

        <Card value="Groin">
          {/* <Card.Img src={}/> */}
          <Button>Groin</Button>
        </Card>

        <Card value="Calves">
          {/* <Card.Img src={}/> */}
          <Button>Calves</Button>
        </Card>
      </div>
      <div>
        <Card>
          {/* <Card.Img src={}/> */}
          <Button></Button>
        </Card>

        <Card>
          {/* <Card.Img src={}/> */}
          <Button></Button>
        </Card>

        <Card>
          {/* <Card.Img src={}/> */}
          <Button></Button>
        </Card>

        <Card>
          {/* <Card.Img src={}/> */}
          <Button></Button>
        </Card>

        <Card>
          <Card.Img />
          <Button></Button>
        </Card>
      </div>
      <StretchModal
        target={targetArea}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default CategoryCard;
