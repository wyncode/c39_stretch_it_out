import React from 'react';
import Progress2 from '../images/Progress-2.png';
import Image from 'react-bootstrap/Image';
const Dedication = ({ handleChange, formData }) => {
  return (
    <div className="modal-div">
      <Image fluid src={Progress2} alt="progress bar" />
      <h3>How much time would you dedicate to stretching?</h3>
      <p>Select one answer</p>
      <div className="form-group">
        <div className="radio-button">
          <input
            type="radio"
            name="timeDedicated"
            id="timeDedicated1"
            onChange={handleChange('timeDedicated')}
            checked={formData.timeDedicated === 'Under 10 minutes'}
            value="Under 10 minutes"
          />
          <label for="timeDedicated1">Under 10 minutes</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            name="timeDedicated"
            id="timeDedicated2"
            onChange={handleChange('timeDedicated')}
            checked={formData.timeDedicated === '10-20 minutes'}
            value="10-20 minutes"
          />
          <label for="timeDedicated1">10-20 minutes</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="timeDedicated3"
            name="timeDedicated"
            onChange={handleChange('timeDedicated')}
            checked={formData.timeDedicated === 'More than 20 minutes'}
            value="More than 20 minutes"
          />
          <label for="timeDedicated3">More than 20 minutes</label>
        </div>
      </div>
    </div>
  );
};

export default Dedication;
