import React from 'react';

const ButtonGetQrCode = ({ name, disabled }) => (
  <button
    className="btQr"
    type="submit"
    disabled={disabled}
  >
    { name }
  </button>
);

export default ButtonGetQrCode;
