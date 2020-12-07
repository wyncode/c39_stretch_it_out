import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const BmiCalc = () => {
  const [bmi, setBmi] = useState('');
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchBmi = async () => {
    try {
      const response = await axios.get(`/api/user/bmi`);
      console.log(response);
      setBmi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBmi();
  }, [bmi]);

  return (
    <div>
      <Form className="bmi-calc" onSubmit={fetchBmi}>
        <Form.Group>
          <Form.Label>Height</Form.Label>
          <Form.Control
            id="height"
            type="text"
            name="height"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            id="weight"
            type="text"
            name="height"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="bmi-calc-div">
          <Button className="bmi-calc-button" block type="submit">
            Get Your BMI
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default BmiCalc;
