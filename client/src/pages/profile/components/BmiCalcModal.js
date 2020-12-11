import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';

const BmiCalcModal = (props) => {
  const [bmi, setBmi] = useState('');
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const fetchBmi = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/users/bmi`,
        { height, weight },
        { withCredentials: true }
      );
      console.log(response);
      setBmi(response.data.bmi.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal {...props}>
        <Modal.Header closeButton></Modal.Header>
        <div className="bmi-calc-div">
          <Modal.Body>
            <Form className="bmi-calc" onSubmit={fetchBmi}>
              <Form.Label>Height in Inches</Form.Label>
              <Form.Control
                id="height"
                type="text"
                name="height"
                onChange={handleHeightChange}
                required
              />

              <Form.Label>Weight in lb</Form.Label>
              <Form.Control
                id="weight"
                type="text"
                name="height"
                onChange={handleWeightChange}
                required
              />

              <Form.Group className="bmi-calc-div">
                <Button
                  className="bmi-calc-button"
                  block
                  type="submit"
                  onSubmit={fetchBmi}
                >
                  Get Your BMI
                </Button>
              </Form.Group>
            </Form>
            <div>Your BMI is: {bmi}</div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default BmiCalcModal;
