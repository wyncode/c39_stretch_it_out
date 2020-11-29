import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

const ProfilePref = ({ show, hide, setCurrentUser }) => {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.put(
        '/api/users/update',
        {
          stretchingLevel: formData.stretchingLevel,
          timeDedicated: formData.timeDedicated
        },
        { withCredentials: true }
      );
      setCurrentUser(data);
      swal('Your preferences have been updated!');
    } catch (error) {
      swal('Unable to update');
    }
  };
  return (
    <Modal
      className="profile-modal"
      size="sm"
      show={show}
      onHide={hide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="modal-div">
            <h3 className="preferences-header">Level</h3>
            <div className="form-group">
              <div>
                <input
                  type="radio"
                  id="personType1"
                  name="stretchingLevel"
                  onChange={handleChange}
                  value="Beginner"
                />
                <label for="personType1">Beginner</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="personType2"
                  name="stretchingLevel"
                  onChange={handleChange}
                  value="Intermediate"
                />
                <label for="personType2">Intermediate</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="personType3"
                  name="stretchingLevel"
                  onChange={handleChange}
                  value="Advanced"
                />
                <label for="personType3">Advanced</label>
              </div>
            </div>
            <h3 className="preferences-header">Duration</h3>
            <div className="form-group">
              <div>
                <input
                  type="radio"
                  name="timeDedicated"
                  id="timeDedicated1"
                  onChange={handleChange}
                  value="Under 10 minutes"
                />
                <label for="timeDedicated1">Under 10 minutes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="timeDedicated"
                  id="timeDedicated2"
                  onChange={handleChange}
                  value="10-20 minutes"
                />
                <label for="timeDedicated1">10-20 minutes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="timeDedicated3"
                  name="timeDedicated"
                  onChange={handleChange}
                  value="More than 20 minutes"
                />
                <label for="timeDedicated3">More than 20 minutes</label>
              </div>
            </div>
            <Button className="modal-button" type="submit">
              Submit Updates
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ProfilePref;
