import React from 'react';
import { Button } from 'react-bootstrap';

const Submit = ({ activeSchema }) =>
  !activeSchema.next ? (
    <div className="form-group submit-group">
      <Button type="submit">Submit</Button>
    </div>
  ) : null;

export default Submit;
