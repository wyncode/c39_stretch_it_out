import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import './FindingAStretch.css';

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
      <Container className="selected-stretch">
        <h1>{selectedStretch?.stretchName}</h1>
        <p>
          Remember that the sensation during the stretch should be discomfort,
          but not pain.
        </p>
        <video src={selectedStretch?.video} />
        <Link className="share-your-feedback">Share Your FeedBack</Link>
        <Link to="/profile">Add to my programs</Link>
      </Container>
    </div>
  );
};

export default SelectedStretch;
