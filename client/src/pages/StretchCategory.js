import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation/Navigation';
import CategoryCard from '../components/FindingAStretch/CategoryCard';
import { StretchBanner } from '../StretchImages/index';
import ContactFooter from '../components/ContactFooter';
import GetStarted from '../components/GetStartedFooter';

const StretchCategory = () => {
  return (
    <div>
      <Navigation />
      <img src={StretchBanner} className="find-your-stretch" />
      <Container>
        <CategoryCard />
      </Container>
      <GetStarted />
      <ContactFooter />
    </div>
  );
};

export default StretchCategory;
