import React from 'react';

const ButtonCopyPassword = ({ name, onClick }) => (
  <button
    className="btn-copy"
    type="button"
    onClick={onClick}
  >
    { name }
  </button>
);

export default ButtonCopyPassword;
