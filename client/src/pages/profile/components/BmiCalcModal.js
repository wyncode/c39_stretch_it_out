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
      setBmi(response.data.bmi.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal {...props}>
        <Modal.Header className="bmi-modal-header" closeButton></Modal.Header>
        <div>
          <Modal.Body className="bmi-modal-body">
            <Form className="bmi-calc" onSubmit={fetchBmi}>
              <div className="height-input">
                <h5>Height in Inches:</h5>
                <Form.Control
                  id="height"
                  type="text"
                  name="height"
                  onChange={handleHeightChange}
                  required
                />
              </div>
              <br></br>
              <div className="weight-input">
                <h5>Weight in lbs:</h5>
                <Form.Control
                  id="weight"
                  type="text"
                  name="height"
                  onChange={handleWeightChange}
                  required
                />
              </div>

              <Form.Group>
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
            <h1 className="your-bmi-is">Your BMI is: {bmi}</h1>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default BmiCalcModal;
