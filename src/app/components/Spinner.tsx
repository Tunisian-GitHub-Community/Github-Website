import React from 'react';

const Spinball = require('react-spinkit');
//style={{ height: "100%", width: "100%" }}
function Spinner() {
  return (
    <div className="Spinner">
      <Spinball name="ball-clip-rotate-multiple " color="white" />
    </div>
  );
}

export default Spinner;
