import React, { useState, useEffect, useContext } from 'react';
import { Container, ResponsiveEmbed } from 'react-bootstrap';
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
        {/* <ResponsiveEmbed>
           <video src={selectedStretch?.video} />
          </ResponsiveEmbed> */}
        <Link className="share-your-feedback">
          <u>Share Your Feedback</u>
        </Link>
        <Link className="add-to-my-programs" to="/profile">
          Add to my programs
        </Link>
      </Container>
      <Container>
        <h3>Suggested Stretches</h3>
      </Container>
    </div>
  );
};

export default SelectedStretch;
