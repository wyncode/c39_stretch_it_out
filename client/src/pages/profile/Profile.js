import React, { useState, useContext, useEffect } from 'react';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import { AppContext } from '../../context/AppContext';
import ProfilePref from './components/ProfilePref';
import axios from 'axios';
import './Profile.css';
import swal from 'sweetalert';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import AnonPic from './images/AnonPic.png';
import { Navigation } from '../../components/navigation';
import AccountPref from './components/AccountPref';
import UploadPic from './components/UploadPic';
import Cog from './images/cog.png';
import UserCog from './images/user-cog.png';
import Camera from './images/camera.png';
import Trash from './images/trash.png';
import GetStartedFooter from '../anon-home-page/components/GetStartedFooter';
import ContactFooter from '../anon-home-page/components/ContactFooter';

const Profile = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [preview, setPreview] = useState(null);
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [dailyStretchNum, setDailyStretchNum] = useState(0);
  const [maxValue, setMaxValue] = useState(3);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowTwo = () => setShowTwo(true);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowThree = () => setShowThree(true);
  const handleCloseThree = () => setShowThree(false);

  useEffect(() => {
    setDailyStretchNum(currentUser?.dailyStretches?.completed);
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.stretchingLevel === 'Beginner') {
      setMaxValue(3);
    } else if (currentUser?.stretchingLevel === 'Intermediate') {
      setMaxValue(5);
    } else setMaxValue(7);
  }, [currentUser]);

  const value = dailyStretchNum;
  const value2 = currentUser?.weeklyStretches.completed;

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
      <div className="user-profile-body">
        <div className="user-pref-buttons">
          <div className="button-sub-div-1">
            <Button className="profile-buttons" onClick={handleShow}>
              <img className="cog" src={Cog} /> Stretch Preferences
            </Button>
            <Button className="profile-buttons" onClick={handleShowTwo}>
              <img className="cog" src={UserCog} /> Account Settings
            </Button>
          </div>
          <div className="button-sub-div-2">
            <Button className="profile-buttons" onClick={handleShowThree}>
              <img className="cog" src={Camera} /> Choose Avatar
            </Button>
            <Button
              className="profile-buttons"
              variant="danger"
              onClick={handleDelete}
            >
              <img className="cog" src={Trash} />
              Delete Account
            </Button>
          </div>
          <Link className="find-a-stretch" to="/body-area">
            Find a Stretch!
          </Link>
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
        <div className="user-stats-visible">
          <div className="user-stat">
            <label className="pr-4 font-weight-bold">Name:</label>
            <p>
              {currentUser?.firstName} {currentUser?.lastName}
            </p>
          </div>
          <div className="user-stat">
            <label htmlFor="email" className="pr-4 font-weight-bold">
              Email:
            </label>
            <p>{currentUser?.email}</p>
          </div>
          <div className="user-stat">
            <label htmlFor="email" className="pr-4 font-weight-bold">
              Level:
            </label>
            <p>{currentUser?.stretchingLevel}</p>
          </div>
          <div className="user-stat">
            <label htmlFor="email" className="pr-4 font-weight-bold">
              Stretch Time:
            </label>
            <p>{currentUser?.timeDedicated}</p>
          </div>
          <div>
            <label className="pr-4 font-weight-bold">
              My Favorite Stretches:
            </label>
            <div className="favorite-stretch-list">
              {currentUser &&
                currentUser?.stretches?.map((stretch) => {
                  return (
                    <Link as={Link} to={`/stretch/${stretch._id}`}>
                      {stretch.stretchName}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="stretch-tracker">
          <div className="daily-stretches">
            <h3>Stretches Completed Today</h3>
            <div style={{ width: '200px', overflowWrap: 'break-word' }}>
              <CircularProgressbar
                value={value}
                maxValue={maxValue}
                text={`${value} / ${maxValue} Stretches`}
                styles={buildStyles({ textSize: '10px' })}
              />
            </div>
          </div>
          <div className="day-count">
            <h3 className="day-count-header">
              You've Met Your Stretch Goal For:{' '}
            </h3>
            <div className="day-count-value">
              <h3>{value2} days</h3>
            </div>
          </div>
        </div>

        <GetStartedFooter />
        <ContactFooter />
      </div>
    </>
  );
};
export default Profile;
