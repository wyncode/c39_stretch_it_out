import React from 'react';
import {
  Container,
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  ButtonGroup
} from 'react-bootstrap';
import IndividualStretchCard from './IndividualStretchCard';

const StretchModal = (props) => {
  const slicedArray = props.stretch.slice(0, 3);

  return (
    <Modal {...props} size="xl">
      <Modal.Header closeButton className="stretch-modal-header">
        <Modal.Title className="stretch-modal-title">
          {props.target} Stretches
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex">
        <Container className="dropdowns">
          <Dropdown as={ButtonGroup} className="dropdown-button">
            <Dropdown.Toggle variant="outline-dark">Time</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-item">
              <Dropdown.Item>5 minutes</Dropdown.Item>
              <Dropdown.Item>10 minutes</Dropdown.Item>
              <Dropdown.Item>15 minutes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <DropdownButton
            title="Intensity"
            variant="outline-dark"
            className="dropdown-button"
          >
            <Dropdown.Item>Beginner</Dropdown.Item>
            <Dropdown.Item>Intermediate</Dropdown.Item>
            <Dropdown.Item>Advanced</Dropdown.Item>
          </DropdownButton>
        </Container>
        <div className="stretch-card-container">
          {props.stretch &&
            slicedArray.map((stretch) => {
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
    </Modal>
  );
};

export default StretchModal;
