import React from 'react';
import SelectedStretch from '../components/finding-a-stretch/SelectedStretch';
import Navigation from '../components/navigation/Navigation';
import ContactFooter from '../pages/anon-home-page/components/ContactFooter';
import GetStartedFooter from '../pages/anon-home-page/components/GetStartedFooter';

const IndividualStretch = () => {
  return (
    <div>
      <Navigation />
      <SelectedStretch />
      <GetStartedFooter />
      <ContactFooter />
    </div>
  );
};

export default IndividualStretch;
