import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../../context/AppContext';
import axios from 'axios';

const AddStretch = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleClick = async () => {
    const { data } = await axios.put('/api/users/increment', {
      withCredentials: true
    });
    setCurrentUser(data);
  };

  return (
    <>
      <Button onClick={handleClick}>increment</Button>
      <span>{currentUser?.dailyStretches?.completed}</span>
    </>
  );
};

export default AddStretch;
