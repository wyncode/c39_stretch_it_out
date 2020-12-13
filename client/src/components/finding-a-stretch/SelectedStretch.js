import React, { useEffect, useContext } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import './FindingAStretch.css';
import Lightbulb from './Group.png';
import AddStretch from '../../pages/profile/components/AddStretch';
import swal from 'sweetalert';

const SelectedStretch = () => {
  const {
    selectedStretch,
    setSelectedStretch,
    currentUser,
    setCurrentUser
  } = useContext(AppContext);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`/api/stretch/${id}`);
      setSelectedStretch(response.data);
    };
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const user = currentUser?.stretches;
      user.push(id);
      const { update } = await axios.put(
        '/api/users/update',
        { stretches: user },
        { withCredentials: true }
      );
      setCurrentUser(update);
      swal(
        'Glad you liked it!',
        'Stretch added to Favorite Stretches',
        'success'
      );
    } catch (error) {
      console.log(e);
    }
  };

  return (
    <div className="selected-stretch-div">
      <Container className="selected-stretch-container">
        <h1 className="stretch-name">{selectedStretch?.stretchName}</h1>
        <div className="reminder-div">
          <Image src={Lightbulb} />
          <p className="reminder">
            Remember that the sensation during the stretch should be slight
            discomfort, not pain.
          </p>
        </div>

        <Container className="video-div">
          <iframe
            margin="20"
            width="840"
            height="460"
            src={selectedStretch?.video}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Container>

        <Container className="stretch-user-buttons">
          <AddStretch />
          <Button
            variant="outline-dark"
            className="add-to-my-programs"
            to="/profile"
            onClick={handleClick}
          >
            Add to my programs
          </Button>
        </Container>
      </Container>

      <Link className="share-your-feedback">
        <u>Share Your Feedback</u>
      </Link>
    </div>
  );
};

export default SelectedStretch;
