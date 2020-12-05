import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/navigation/Navigation';
import CategoryCard from '../components/finding-a-stretch/CategoryCard';
import { StretchBanner } from '../stretchimages/index';
import ContactFooter from './anon-home-page/components/ContactFooter';
import GetStarted from './anon-home-page/components/GetStartedFooter';

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
