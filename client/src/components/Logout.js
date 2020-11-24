import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Logout = () => {
  //doesn't need a route because it's just a button
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      setCurrentUser(response.data);
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      swal(response.data.message, 'You have signed out!', 'success');
      history.push('/');
    } catch (error) {
      console.log('Login Error: ' + error);
    }
  };
  return <Button onClick={handleLogOut}>Logout</Button>;
};

export default Logout;
