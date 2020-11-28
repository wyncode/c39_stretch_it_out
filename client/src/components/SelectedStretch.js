import React, { useState, useEffect, useContext } from 'react';
import { Container, ResponsiveEmbed } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const SelectedStretch = () => {
  const { selectedStretch, setSelectedStretch } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    history.push(`/stretch/${selectedStretch}`);
    // setSelectedStretch(response.data.results);
  }, [selectedStretch]);

  return (
    <div>
      <h1> hello </h1>
      <Container>
        <ResponsiveEmbed>
          <video />
        </ResponsiveEmbed>
      </Container>
    </div>
  );
};

export default SelectedStretch;
