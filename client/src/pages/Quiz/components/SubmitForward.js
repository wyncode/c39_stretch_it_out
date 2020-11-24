import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitForward = ({ activeSchema }) => (
  <div className="form-group submit-group">
    <Button type="submit">{activeSchema.next ? 'Continue' : 'Submit!'}</Button>
  </div>
);

export default SubmitForward;
