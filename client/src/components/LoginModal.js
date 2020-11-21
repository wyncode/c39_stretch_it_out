import React from 'react';

const LoginModal = () => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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
          <Form.Group>
            <Button type="submit">Log In</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Link to="/sign-up"> Don't have an account?</Link>
    </Modal>
  );
};

export default LoginModal;
