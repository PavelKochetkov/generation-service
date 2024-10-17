import React from 'react';

const ButtonResetPassword = ({ name, onClick }) => (
  <div>
    <button
      className="btn-reset"
      type="button"
      onClick={onClick}
    >
      { name }
    </button>
  </div>
);

export default ButtonResetPassword;
