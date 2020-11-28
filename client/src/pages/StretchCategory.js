import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import CategoryCard from '../components/FindingAStretch/CategoryCard';
import { StretchBanner } from '../StretchImages/index';

const StretchCategory = () => {
  return (
    <div>
      <Navigation />
      <img src={StretchBanner} />
      <Container>
        <CategoryCard />
      </Container>
    </div>
  );
};

export default StretchCategory;
