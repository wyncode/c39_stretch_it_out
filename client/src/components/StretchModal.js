import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { Modal, Card, Button, Dropdown, CardColumns } from 'react-bootstrap';

const StretchModal = (props) => {
  const { stretchName, setStretchName } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>X Stretches</Modal.Title>
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
        <CardColumns>
          <Card>
            <Card.Img />
            <Button></Button>
          </Card>
          <Card>
            <Card.Img />
            <Button></Button>
          </Card>
          <Card>
            <Card.Img />
            <Button></Button>
          </Card>
          <Card>
            <Card.Img />
            <Button></Button>
          </Card>
          <Card>
            <Card.Img />
            <Button></Button>
          </Card>
          <Card>
            <Card.Img />
            <Button></Button>
          </Card>
        </CardColumns>
      </Modal.Body>
      <Modal.Footer>
        <Button>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StretchModal;
