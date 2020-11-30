import React from 'react';
import SelectedStretch from '../components/FindingAStretch/SelectedStretch';
import Navigation from '../components/Navigation/Navigation';
import ContactFooter from '../components/ContactFooter';
import GetStarted from '../components/GetStartedFooter';

const IndividualStretch = () => {
  return (
    <div>
      <Navigation />
      <SelectedStretch />
      <GetStarted />
      <ContactFooter />
    </div>
  );
};

export default IndividualStretch;
