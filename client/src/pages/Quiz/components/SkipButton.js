import React from 'react';
import { Button } from 'react-bootstrap';

const SkipButton = ({ activeSchema, handleSkip }) =>
  activeSchema.next ? (
    <div>
      <Button onClick={handleSkip}>Skip</Button>
    </div>
  ) : null;

export default SkipButton;
