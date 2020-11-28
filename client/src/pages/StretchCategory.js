import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import CategoryCard from '../components/FindingAStretch/CategoryCard';

const StretchCategory = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <CategoryCard />
      </Container>
    </div>
  );
};

export default StretchCategory;
