import React from 'react';
import {
  Container,
  Modal,
  Button,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import IndividualStretchCard from './IndividualStretchCard';

const StretchModal = (props) => {
  return (
    <Modal {...props} className="stretch-modal">
      <Modal.Header closeButton className="stretch-modal-header">
        <Modal.Title className="stretch-modal-title">
          {props.target} Stretches
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <DropdownButton title="Time">
            <Dropdown.Item>5 minutes</Dropdown.Item>
            <Dropdown.Item>10 minutes</Dropdown.Item>
            <Dropdown.Item>15 minutes</Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="Intensity">
            <Dropdown.Item>Beginner</Dropdown.Item>
            <Dropdown.Item>Intermediate</Dropdown.Item>
            <Dropdown.Item>Advanced</Dropdown.Item>
          </DropdownButton>
        </Container>
        <div>
          {props.stretch &&
            props.stretch.map((stretch) => {
              return (
                <IndividualStretchCard
                  key={stretch._id}
                  id={stretch._id}
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
