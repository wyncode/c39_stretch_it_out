import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Logout = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });

      sessionStorage.removeItem('user');
      setCurrentUser(null);

      history.push('/');
    } catch (error) {
      console.log('Login Error: ' + error);
    }
  };
  return <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>;
};

export default Logout;
