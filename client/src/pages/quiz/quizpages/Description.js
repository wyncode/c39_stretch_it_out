import React from 'react';
import Progress1 from '../images/Progress-1.png';
import Image from 'react-bootstrap/Image';

const Description = ({ handleChange, formData }) => {
  return (
    <div className="modal-div">
      <Image fluid src={Progress1} alt="progress-bar" />
      <h3>Which person best describes who you are?</h3>
      <p>Select one answer</p>
      <div className="form-group">
        <label for="personType1" className="radio-button">
          <input
            type="radio"
            id="personType1"
            name="personType"
            onChange={handleChange('personType')}
            checked={formData.personType === 'Active'}
            value="Active"
          />
          <label for="personType1">Active</label>
        </label>
        <label for="personType2" className="radio-button">
          <input
            type="radio"
            id="personType2"
            name="personType"
            onChange={handleChange('personType')}
            checked={formData.personType === 'Sedentary'}
            value="Sedentary"
          />
          <label for="personType2">Sedentary</label>
        </label>
        <label for="personType3" className="radio-button">
          <input
            type="radio"
            id="personType3"
            name="personType"
            onChange={handleChange('personType')}
            checked={formData.personType === 'Senior'}
            value="Senior"
          />
          <label for="personType3">Senior</label>
        </label>
        <label for="personType4" className="radio-button">
          <input
            type="radio"
            id="personType4"
            name="personType"
            onChange={handleChange('personType')}
            checked={formData.personType === 'Chronic illnesses'}
            value="Chronic illnesses"
          />
          <label for="personType4">Chronic illnesses</label>
        </label>
      </div>
    </div>
  );
};

export default Description;
