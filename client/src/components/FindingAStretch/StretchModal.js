import React, { useState } from 'react';
import { Container, Modal, Dropdown, ButtonGroup } from 'react-bootstrap';
import IndividualStretchCard from './IndividualStretchCard';

const StretchModal = (props) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (field, val) => {
    setFilters({ ...filters, [field]: val.toLowerCase() });
  };

  const filteredStretches = props.stretch.filter((stretch) => {
    const levelFilter = filters.level
      ? stretch.level?.toLowerCase().includes(filters.level)
      : true;
    const lengthFilter = filters.length
      ? stretch.length?.toLowerCase().includes(filters.length)
      : true;
    return levelFilter && lengthFilter;
  });

  const slicedArray = filteredStretches.slice(0, 3);

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
            <Dropdown.Menu className="dropdown-menu" align="right">
              {['5 minutes', '10 minutes', '15 minutes'].map((len) => (
                <Dropdown.Item
                  onClick={() => handleFilterChange('length', len)}
                >
                  {len}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup} className="dropdown-button">
            <Dropdown.Toggle variant="outline-dark">Intensity</Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu" align="right">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <Dropdown.Item
                  onClick={() => handleFilterChange('level', level)}
                >
                  {level}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
