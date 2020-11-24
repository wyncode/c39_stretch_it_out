import React from 'react';

const PreviousButton = ({ activeSchema, handlePrevious }) =>
  activeSchema.previous ? (
    <div onClick={handlePrevious} className="previous">
      <h3>Previous</h3>
    </div>
  ) : null;

export default PreviousButton;
