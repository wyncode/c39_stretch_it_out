import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const AddStretch = () => {
  const { setCurrentUser } = useContext(AppContext);

  const handleClick = async () => {
    const { data } = await axios.put('/api/users/increment', {
      withCredentials: true
    });
    setCurrentUser(data);
    swal('Good Work!', 'Stretch added to Daily Goal', 'success');
  };

  return (
    <>
      <Button
        className="add-stretch-button"
        onClick={handleClick}
        variant="outline-dark"
      >
        Mark Stretch as Completed
      </Button>
    </>
  );
};

export default AddStretch;
