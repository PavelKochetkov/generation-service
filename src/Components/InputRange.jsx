import React from 'react';

const InputRange = ({
  min, max, step, value, onChange, length, name,
}) => (
  <label>
    {name}
    :
    {' '}
    {length}
    <input
      type="range"
      id="lengthPassword"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default InputRange;
