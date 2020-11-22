import React, { useState } from 'react';
import SubmitForward from './components/SubmitForward';
import SkipButton from './components/SkipButton';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import PreviousButton from './components/PreviousButton';

import { emptyFormData, schema } from './Schema';
import swal from 'sweetalert';

const Quiz = ({ show, hide }) => {
  const [formData, setFormData] = useState(emptyFormData);
  const [activeSchema, setActiveSchema] = useState(schema.description);
  const history = useHistory();
  // const initForm = () => {
  //   setActiveSchema(schema.description);
  // };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextForm = activeSchema?.next;

    if (nextForm) {
      setActiveSchema(schema[nextForm]);
      //This is setting the state of activeSchema to one of the schema objects in Schema.js
      return;
    }
    console.log(formData);
    swal('Success!', "You've started your trial", 'success');
    setFormData(emptyFormData);
    history.push('/profile');
  };

  const handlePrevious = () => {
    setActiveSchema(schema[activeSchema.previous]);
  };
  const handleSkip = () => {
    setActiveSchema(schema[activeSchema.next]);
    return;
  };

  const ActiveForm = activeSchema.form;

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
          <ActiveForm formData={formData} handleChange={handleChange} />
          <SubmitForward activeSchema={activeSchema} />
          <SkipButton handleSkip={handleSkip} activeSchema={activeSchema} />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Quiz;
