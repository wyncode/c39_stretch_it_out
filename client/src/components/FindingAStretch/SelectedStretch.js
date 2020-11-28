import React, { useState, useEffect, useContext } from 'react';
import { Container, ResponsiveEmbed, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import './FindingAStretch.css';
import Lightbulb from './Group.png';

const SelectedStretch = () => {
  const { selectedStretch, setSelectedStretch } = useContext(AppContext);

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

  const handleClick = async () => {
    try {
      let response = axios.get(`/api/me`);
      console.log(response);
      const userStretches = await response.data.stretches;
      console.log(userStretches);
      userStretches.push(id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Container className="selected-stretch-container">
        <h1 className="stretch-name">{selectedStretch?.stretchName}</h1>
        <div className="reminder-div">
          <img src={Lightbulb} />
          <p className="reminder">
            Remember that the sensation during the stretch should be discomfort,
            but not pain.
          </p>
        </div>
        <ResponsiveEmbed>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u3Ocw5UIpYs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ResponsiveEmbed>
        <Link className="share-your-feedback">
          <u>Share Your Feedback</u>
        </Link>
        <Button
          className="add-to-my-programs"
          to="/profile"
          onClick={handleClick}
        >
          Add to my programs
        </Button>
      </Container>
      <Container>
        <h3>Suggested Stretches</h3>
      </Container>
    </div>
  );
};

export default SelectedStretch;
