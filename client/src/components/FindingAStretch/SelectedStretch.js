import React, { useEffect, useContext } from 'react';
import { Container, Button, ResponsiveEmbed, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import './FindingAStretch.css';
import Lightbulb from './Group.png';
import AddStretch from '../../pages/Profile/components/AddStretch';

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
            Remember that the sensation during the stretch should be discomfort,
            but not pain.
          </p>
        </div>

        <Image src={selectedStretch?.video} fluid />

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

      <Container>
        <h3>Suggested Stretches</h3>
      </Container>

      <Link className="share-your-feedback">
        <u>Share Your Feedback</u>
      </Link>
    </div>
  );
};

export default SelectedStretch;
