import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AppContext } from '../../../context/AppContext';
import axios from 'axios';

import swal from 'sweetalert';

const UploadPic = ({ show, hide, preview, setPreview }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [image, setImage] = useState(null);

  const handleImageSelect = async (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      swal('Error', 'OOps, something went wrong.');
    }
  };

  return (
    <Modal
      className="profile-pic-modal"
      size="lg"
      show={show}
      onHide={hide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <input
            type="file"
            onChange={handleImageSelect}
            accept="image/*"
            required
          />
          <Button type="submit" className="modal-button">
            Save Image
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadPic;
