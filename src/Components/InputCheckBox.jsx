import React from 'react';

const Input = ({
  checked, id, onChange, name,
}) => (
  <label>
    {name}
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={id}
    />
  </label>
);

export default Input;
