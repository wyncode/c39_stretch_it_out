import React from 'react';
import { Button } from 'react-bootstrap';

const Submit = ({ activeSchema, handleSubmit }) =>
  !activeSchema.next ? (
    <div className="form-group submit-group">
      <Button onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </div>
  ) : null;

export default Submit;
