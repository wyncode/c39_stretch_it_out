import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Submit from './components/Submit';
import SkipButton from './components/SkipButton';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import PreviousButton from './components/PreviousButton';
import Continue from './components/Continue';
import axios from 'axios';
import { schema, emptyFormData } from './Schema';
import swal from 'sweetalert';

const Quiz = ({ show, hide, setShow }) => {
  const [formData, setFormData] = useState(emptyFormData);
  const [activeSchema, setActiveSchema] = useState(schema.description);
  const [checked, setChecked] = useState(false);
  const { setLoading, setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // console.log(formData);

  const handlePrevious = () => {
    setActiveSchema(schema[activeSchema.previous]);
  };

  const handleSkip = () => {
    setActiveSchema(schema[activeSchema.next]);

    const nextForm = activeSchema?.next;

    if (nextForm) {
      setActiveSchema(schema[nextForm]);
      //This is setting the state of activeSchema to one of the schema objects in Schema.js
      return;
    }
    return;
  };

  const ActiveForm = activeSchema.form;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('this is working');
    if (
      formData.password.toLowerCase().includes('password') ||
      formData.password.length < 6
    ) {
      swal(
        'Enter a harder password!',
        "Passwords cannot contain 'password' and must be longer than 5 characters",
        'warning'
      );
      return;
    }
    if (!checked) {
      swal(
        "You must agree to Stretch It Out's Terms of Use and Privacy Policy",
        'danger'
      );
      return;
    }

    try {
      console.log(formData);
      const response = await axios.post('/api', formData);
      console.log(response);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      setShow(false);
      swal('Success!', "You've started your trial", 'success');

      setLoading(false);
      // setFormData(null);
      history.push('/profile');
    } catch (error) {
      swal('Oh no!', 'something went wrong', 'warning');
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={hide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <PreviousButton
            activeSchema={activeSchema}
            handlePrevious={handlePrevious}
          />
          <ActiveForm
            formData={formData}
            handleChange={handleChange}
            // handleCheckBox={handleCheckBox}
            checked={checked}
            setChecked={setChecked}
          />
          <Continue handleSkip={handleSkip} activeSchema={activeSchema} />
          <SkipButton handleSkip={handleSkip} activeSchema={activeSchema} />
          <Submit handleSubmit={handleSubmit} activeSchema={activeSchema} />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Quiz;
