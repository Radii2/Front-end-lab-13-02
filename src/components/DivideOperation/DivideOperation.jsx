import React from 'react';
import { useSearchParams } from 'react-router-dom';

const DivideOperation = () => {
  const [searchParams] = useSearchParams();
  const result =
    parseInt(searchParams.get('x')) / parseInt(searchParams.get('y'));
  return (
    <div>
      <h1>x / y = {result}</h1>
    </div>
  );
};

export default DivideOperation;
