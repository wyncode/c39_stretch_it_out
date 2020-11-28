import React, { useState, useEffect, useContext } from 'react';
import SelectedStretch from '../components/FindingAStretch/SelectedStretch';
import Navigation from '../components/Navigation';

const IndividualStretch = () => {
  return (
    <div>
      <Navigation />
      <SelectedStretch />
    </div>
  );
};

export default IndividualStretch;
