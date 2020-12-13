import React from 'react';
import Progress3 from '../images/Progress-3.png';
import Image from 'react-bootstrap/Image';

const Info = ({ handleChange, formData, setChecked, checked }) => {
  return (
    <div className="modal-div">
      <Image fluid src={Progress3} alt="progress bar" />
      <div className="input-form-group">
        <label>First Name</label>
        <input
          className="text-input"
          type="text"
          onChange={handleChange('firstName')}
          value={formData.firstName}
        />
      </div>
      <div className="input-form-group">
        <label>Last Name</label>
        <input
          className="text-input"
          type="text"
          onChange={handleChange('lastName')}
          value={formData.lastName}
        />
      </div>
      <div className="input-form-group">
        <label>Email Address</label>
        <input
          className="text-input"
          type="email"
          onChange={handleChange('email')}
          value={formData.email}
        />
      </div>
      <div className="input-form-group">
        <label>Password</label>
        <input
          className="text-input"
          type="password"
          onChange={handleChange('password')}
          value={formData.password}
        />
      </div>
      <div className="input-form-group-last">
        <div>
          <label for="agreeToTerms">
            I agree to Stretch It Out’s Terms of Use and Privacy Policy.{' '}
          </label>

          <input
            className="text-input"
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
