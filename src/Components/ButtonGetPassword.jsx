import React from 'react';

const ButtonGetPassword = ({ name, onClick }) => (
  <button
    className="btn"
    type="button"
    onClick={onClick}
  >
    { name }
  </button>
);

export default ButtonGetPassword;
