import React from 'react';

const ButtonGetRandomNumber = ({ name, disabled }) => (
  <button
    className="btn-number"
    type="submit"
    disabled={disabled}
  >
    { name }
  </button>
);

export default ButtonGetRandomNumber;
