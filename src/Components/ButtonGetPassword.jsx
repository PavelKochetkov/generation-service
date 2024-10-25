import React from 'react';

const ButtonGetPassword = ({ name, onClick, disabled }) => (
  <button
    className="btn"
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    { name }
  </button>
);

export default ButtonGetPassword;
