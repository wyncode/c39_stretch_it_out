import React, { useState, useContext } from 'react';
import { Container, Image, Button, Form } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import { AppContext } from '../../context/AppContext';
import ProfilePref from './components/ProfilePref';
import axios from 'axios';
import './Profile.css';
import swal from 'sweetalert';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import AnonPic from './images/AnonPic.png';
import Navigation from '../../components/Navigation';
import AccountPref from './components/AccountPref';

const Profile = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState();
  const [preview, setPreview] = useState(null);
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowTwo = () => setShowTwo(true);
  const handleCloseTwo = () => setShowTwo(false);
  const handleImageSelect = async (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const value = 1;

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

  const handleDelete = async () => {
    setLoading(true);
    try {
      const willDelete = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this account!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: '/api/users/me',
            withCredentials: true
          });
          swal('Proof! Your account has been deleted!', {
            icon: 'success'
          });
          setLoading(false);
          sessionStorage.removeItem('user');
          setCurrentUser(null);
          push('/login');
        } catch (error) {
          swal('Oops!', 'Something went wrong.');
        }
      } else {
        swal('Your account is safe!');
      }
    } catch (error) {
      swal('Oops!', 'Something went wrong.');
    }
  };
  return (
    <>
      <Navigation />
      <div className="profile-banner">
        <div className="user-pic-div">
          <Image
            // src={currentUser?.avatar ? currentUser.avatar : Amy}
            src={preview || currentUser?.avatar || AnonPic}
            alt="profile-picture"
            width={250}
            height={250}
            roundedCircle
          />
        </div>
        <div className="user-greeting-div">
          <h1 className="user-greeting-text">
            Hi there, {currentUser?.firstName}!
          </h1>
          <h3 className="user-greeting-text">
            What would you like to do right now?
          </h3>
        </div>
      </div>
      <div className="user-pref-buttons">
        <Button onClick={handleShow}>Stretch Preferences</Button>
        <Button onClick={handleShowTwo}>Account Settings</Button>
        <ProfilePref show={show} hide={handleClose} />
        <AccountPref
          setCurrentUser={setCurrentUser}
          show={showTwo}
          hide={handleCloseTwo}
        />
      </div>
      <div style={{ width: '25%', overflowWrap: 'break-word' }}>
        <CircularProgressbar
          value={value}
          maxValue={3}
          text={`${value} Stretch`}
          styles={buildStyles({ textSize: '10px' })}
        />
      </div>
      ;
      <Container
        className="d-flex justify-content-center align-items-center
         flex-column"
      >
        <div className="mt-4"></div>
        <div className="mt-4">
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <input
              type="file"
              onChange={handleImageSelect}
              accept="image/*"
              required
            />
            <Button type="submit" size="sm" className="mt-4">
              Save Image
            </Button>
          </form>
        </div>
        <div
          className="d-flex flex-column align-items-center 
             justify-content-center mt-4"
        >
          <div className="d-flex">
            <label htmlFor="email" className="pr-4 font-weight-bold">
              Email:
            </label>
            <p>{currentUser?.email}</p>
          </div>
          <Button variant="danger" onClick={handleDelete}>
            Delete Account
          </Button>
        </div>
      </Container>
    </>
  );
};
export default Profile;
