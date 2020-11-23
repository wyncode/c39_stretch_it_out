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

const Quiz = ({ show, hide }) => {
  const [formData, setFormData] = useState(emptyFormData);
  const [activeSchema, setActiveSchema] = useState(schema.description);
  const [checked, setChecked] = useState(false);
  const { setLoading, setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // const handleCheckBox = (e) => {
  //   // debugger;
  //   setFormData({ ...formData, agreeToTerms: e.target.checked });
  //   setChecked (e.target.checked)
  // };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

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
    setLoading(true);
    // const nextForm = activeSchema?.next;

    // if (nextForm) {
    //   setActiveSchema(schema[nextForm]);
    //   //This is setting the state of activeSchema to one of the schema objects in Schema.js
    //   return;
    // }
    try {
      const response = await axios({
        method: 'POST',
        url: '/api',
        withCredentials: true,
        data: formData
      });
      setCurrentUser(response.data.user);
      sessionStorage.setItem('user', response.data);
      setFormData(null);
      setLoading(false);
    } catch (error) {
      swal('Oh no!', 'something went wrong', 'danger');
    }
    swal('Success!', "You've started your trial", 'success');
    // setFormData(null);
    history.push('/profile');
  };

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
          <Submit activeSchema={activeSchema} />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Quiz;
