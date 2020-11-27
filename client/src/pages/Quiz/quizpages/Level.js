import React from 'react';
import Progress1Filled from '../images/Progress-1-filled.png';
import Image from 'react-bootstrap/Image';
const Level = ({ handleChange, formData }) => {
  return (
    <div className="modal-div">
      <Image fluid src={Progress1Filled} alt="progress bar" />
      <h3>What is your stretching level?</h3>
      <p>Select one answer</p>
      <div className="form-group">
        <div className="radio-button">
          <input
            id="levelChoice1"
            type="radio"
            name="stretchingLevel"
            onChange={handleChange('stretchingLevel')}
            checked={formData.stretchingLevel === 'Beginner'}
            value="Beginner"
          />
          <label for="levelChoice1">Beginner</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="levelChoice2"
            name="stretchingLevel"
            onChange={handleChange('stretchingLevel')}
            checked={formData.stretchingLevel === 'Intermediate'}
            value="Intermediate"
          />
          <label for="levelChoice2">Intermediate</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="levelChoice3"
            name="stretchingLevel"
            onChange={handleChange('stretchingLevel')}
            checked={formData.stretchingLevel === 'Advanced'}
            value="Advanced"
          />
          <label for="levelChoice3">Advanced</label>
        </div>
      </div>
    </div>
  );
};

export default Level;
