import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const IndividualStretch = () => {
  const [selectedStretch, setSelectedStretch] = useState('');

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`/stretch/${id}`);
      setSelectedStretch(response.data.results);
    };
    fetchData();
  }, [id]);

  return <div></div>;
};

export default IndividualStretch;
