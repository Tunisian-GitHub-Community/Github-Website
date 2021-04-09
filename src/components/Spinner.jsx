import React from 'react';

const Spinball = require('react-spinkit');

function Spinner() {
  return (
    <div className="Spinner">
      <Spinball name="ball-clip-rotate-multiple" color="green" />
    </div>
  );
}

export default Spinner;
