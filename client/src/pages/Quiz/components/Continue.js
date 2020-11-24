import React from 'react';
import { Button } from 'react-bootstrap';

const Continue = ({ activeSchema, handleSkip }) =>
  activeSchema.next ? (
    <div>
      <Button className="sounds-good-button" onClick={handleSkip}>
        Continue
      </Button>
    </div>
  ) : null;

export default Continue;
