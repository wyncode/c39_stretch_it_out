import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { Modal, Card, Button, Dropdown, CardColumns } from 'react-bootstrap';
import IndividualStretchCard from './IndividualStretchCard';

const StretchModal = (props) => {
  const {
    stretchNames,
    setStretchNames,
    targetArea,
    setTargetArea
  } = useContext(AppContext);

  //   const handleClick = async (e) => {
  //     e.preventDefault();
  //     console.log(targetArea);
  //     console.log(stretchNames);
  //     try {
  //       const response = await axios.get(`/api/stretches/${targetArea}`);
  //       const stretches = response.data.filter((bodyPart) => {
  //         return bodyPart.stretchName;
  //       });
  //       console.log(stretches);
  //     } catch {
  //       console.log('whoppps');
  //     }
  //   };
  console.log('props', props);

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
