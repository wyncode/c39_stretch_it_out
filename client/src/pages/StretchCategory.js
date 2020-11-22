import React, { useEffect, useContext } from 'react';
//import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import Navigation from '../components/Navigation';
import CategoryCard from '../components/CategoryCard';
import Search from '../components/Search';
import Stretches from './Stretches';

import { AppContext } from '../context/AppContext';

const StretchCategory = () => {
  const {
    setStretches,
    search,
    filteredStretches,
    setFilteredStretches,
    loading
  } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/stretches?sortBy=Category', {
        withCredentials: true
      })
      .then((response) => {
        setStretches(response.data);
        setFilteredStretches(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStretches, setFilteredStretches, search, loading]);

  return (
    <div>
      <Navigation />
      <CategoryCard />
    </div>
  );
};

export default StretchCategory;
