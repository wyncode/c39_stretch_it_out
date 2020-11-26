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
import UploadPic from './components/UploadPic';

const Profile = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [formData, setFormData] = useState();
  const [preview, setPreview] = useState(null);
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [dailyStretchNum, setDailyStretchNum] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowTwo = () => setShowTwo(true);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowThree = () => setShowThree(true);
  const handleCloseThree = () => setShowThree(false);

  // const setDailyStretches=async()=>{

  //   try {

  //   } catch (error) {

  //   }
  // }
  let count = 0;
  const addStretch = () => {
    setDailyStretchNum((dailyStretchNum) => {
      return { count: dailyStretchNum + 1 };
    });
  };

  const value = count;

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
          {/* Image must stay on this page */}
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
      <div className="user-profile-body">
        <div className="user-pref-buttons">
          <Button onClick={handleShow}>Stretch Preferences</Button>
          <Button onClick={handleShowTwo}>Account Settings</Button>
          <Button onClick={handleShowThree}>Choose Avatar</Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Account
          </Button>
          <ProfilePref
            setCurrentUser={setCurrentUser}
            show={show}
            hide={handleClose}
          />
          <AccountPref
            setCurrentUser={setCurrentUser}
            show={showTwo}
            hide={handleCloseTwo}
          />
          <UploadPic
            preview={preview}
            setPreview={setPreview}
            show={showThree}
            hide={handleCloseThree}
          />
        </div>
        <h3>Stretches Completed Today</h3>
        <div style={{ width: '200px', overflowWrap: 'break-word' }}>
          <CircularProgressbar
            value={value}
            maxValue={3}
            text={`${value} Stretch`}
            styles={buildStyles({ textSize: '10px' })}
          />
        </div>

        <Button onClick={addStretch}>Add Stretch</Button>
        <div className="user-stats-visible">
          <label htmlFor="email" className="pr-4 font-weight-bold">
            Name:
          </label>
          <p>
            {currentUser?.firstName} {currentUser?.lastName}
          </p>
          <label htmlFor="email" className="pr-4 font-weight-bold">
            Email:
          </label>
          <p>{currentUser?.email}</p>
          <label htmlFor="email" className="pr-4 font-weight-bold">
            Level:
          </label>
          <p>{currentUser?.stretchingLevel}</p>
          <label htmlFor="email" className="pr-4 font-weight-bold">
            Stretch Time:
          </label>
          <p>{currentUser?.timeDedicated}</p>
          {/* </div> */}
          {/* <Button variant="danger" onClick={handleDelete}>
            Delete Account
          </Button> */}
        </div>
        {/* </Container> */}
      </div>
    </>
  );
};
export default Profile;
