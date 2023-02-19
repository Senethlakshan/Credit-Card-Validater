import React from 'react';

function OtherDetails({ nextPage, prevPage }) {
  return (
    <div>
      <h1>Add Other Details</h1>
      <p>Enter additional information here</p>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default OtherDetails;
