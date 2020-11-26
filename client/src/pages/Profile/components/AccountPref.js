import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AccountPref = ({ show, hide }) => {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('/api/users/update', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    });
    swal('Your account details have been updated!');

    return (
      <Modal
        size="sm"
        show={show}
        onHide={hide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                id="lastName"
                type="text"
                name="lastName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Button block type="submit"></Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };
};

export default AccountPref;
