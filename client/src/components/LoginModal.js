import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useHistory, Link } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const LoginModal = ({ show, hide }) => {
  const { setCurrentUser, setLoading } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const history = useHistory();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/profile');
      swal('Welcome', "Let's Stretch it Out", 'success');
    } catch (error) {
      swal('Oops!', 'login error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      className="login"
      size="sm"
      show={show}
      onHide={hide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="login-modal-header" closeButton></Modal.Header>
      <Modal.Body className="login-modal">
        <Form className="login-form" onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              type="text"
              name="email"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="login-button-div">
            <Button className="login-button" block type="submit">
              Log In
            </Button>
          </Form.Group>
        </Form>
        <Link to="/sign-up"> Don't have an account?</Link>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
