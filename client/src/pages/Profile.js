import React, { useState, useContext } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

import Navigation from '../components/Navigation';

import Navbar from '../components/Navbar';

const Profile = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageSelect = async (e) => {
    if (e.target.files[0].size > 1000000)
      throw new Error('file size is too large');
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
          sessionStorage.remooveItem('user');
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

      <Navbar />

      <Container
        className="d-flex justify-content-center align-items-center
         flex-column"
      >
        <h1 className="mt-4">Your Profile</h1>
        <div className="mt-4">
          <Image
            src={
              // preview ? preview: currentUser?.avatar ? currentUser.avatar
            }
            alt="profile-picture"
            width={250}
            height={250}
            roundCircle
          />
        </div>
        <div className="mt-4">
          <Form
            Datamethod="post"
            onSubmit={handleSubmit}
            className="d-flex flex-column"
          >
            <input
              type="file"
              onChange={handleImageSelect}
              accept="image/*"
              required
            />
            <Button type="submit" size="sm" className="mt-4">
              Save Image
            </Button>
          </Form>
        </div>
        <div
          className="d-flex flex-column align-items-center 
             justify-content-center mt-4"
        >
          <div className="d-flex">
            <label htmlFor="name" className="pr-4 font-weight-bold">
              Name:
            </label>
            <p>{currentUser?.name}</p>
          </div>
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
