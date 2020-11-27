import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddStretch = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button onClick={incrementCount}>increment</Button>
      <span>{count}</span>
    </>
  );
};

export default AddStretch;
