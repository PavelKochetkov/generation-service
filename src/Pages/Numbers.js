import React, { useState } from 'react';
import Header from '../Components/Header';
import NumbersForm from '../Components/NumberForm';

const Numbers = () => {
  const [minNumber, setMinNumber] = useState(0);
  const changeMinNumber = (event) => {
    setMinNumber(+event.target.value);
  };
  const [maxNumber, setMaxNumber] = useState(0);
  const changeMaxNumber = (event) => {
    setMaxNumber(+event.target.value);
  };
  const [result, setResult] = useState(0);
  const generateNumber = (min, max) => {
    const tempMaxNumber = max;
    const tempMinNumber = min;
    setResult(Math.floor(Math.random() * (tempMaxNumber - tempMinNumber + 1)) + tempMinNumber);
  };
  return (
    <>
      <Header title="Генератор чисел" />
      <NumbersForm
        minNumber={minNumber}
        changeMinNumber={changeMinNumber}
        maxNumber={maxNumber}
        changeMaxNumber={changeMaxNumber}
        result={result}
        generateNumber={generateNumber}
      />
    </>
  );
};

export default Numbers;
