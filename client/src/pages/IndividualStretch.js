import React from 'react';
import SelectedStretch from '../components/finding-a-stretch/SelectedStretch';
import Navigation from '../components/navigation/Navigation';
import ContactFooter from './anon-home-page/components/ContactFooter';
import GetStarted from './anon-home-page/components/GetStartedFooter';

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
