import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import IndividualStretchCard from './IndividualStretchCard';

const StretchModal = (props) => {
  const { targetArea } = useContext(AppContext);

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{targetArea} Stretches</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown>
          <Dropdown.Toggle>Time</Dropdown.Toggle>
          <Dropdown.Item>5 minutes</Dropdown.Item>
          <Dropdown.Item>10 minutes</Dropdown.Item>
          <Dropdown.Item>15 minutes</Dropdown.Item>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle>Intensity</Dropdown.Toggle>
          <Dropdown.Item>Beginner</Dropdown.Item>
          <Dropdown.Item>Intermediate</Dropdown.Item>
          <Dropdown.Item>Advanced</Dropdown.Item>
        </Dropdown>
        <div>
          {props.stretch &&
            props.stretch.map((stretch) => {
              return (
                <IndividualStretchCard
                  key={stretch._id}
                  stretchName={stretch.stretchName}
                  illustration={stretch.illustration}
                />
              );
            })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StretchModal;
