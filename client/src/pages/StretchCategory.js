import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/navigation/Navigation';
import CategoryCard from '../components/finding-a-stretch/CategoryCard';
import { BlueBanner } from '../stretchimages/index';
import ContactFooter from '../pages/anon-home-page/components/ContactFooter';
import GetStartedFooter from '../pages/anon-home-page/components/GetStartedFooter';

const StretchCategory = () => {
  return (
    <div>
      <Navigation />
      <div className="stretch-banner-div">
        <img src={BlueBanner} className="stretch-banner" />
        <div className="find-your-stretch">Find Your Stretch</div>
      </div>
      <Container>
        <CategoryCard />
      </Container>
      <GetStartedFooter />
      <ContactFooter />
    </div>
  );
};

export default StretchCategory;
