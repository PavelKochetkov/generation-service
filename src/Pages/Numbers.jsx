/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Header';
import NumbersForm from '../Components/NumberForm';
import getId from '../utils/generateId';

const Numbers = () => {
  const { t } = useTranslation();
  const [minNumber, setMinNumber] = useState(0);
  const changeMinNumber = (event) => {
    setMinNumber(+event.target.value);
  };
  const [maxNumber, setMaxNumber] = useState(0);
  const changeMaxNumber = (event) => {
    setMaxNumber(+event.target.value);
  };
  const [result, setResult] = useState(0);
  const generateNumber = () => {
    setResult(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
  };
  return (
    <>
      <Header title={t('numberPage.title')} />
      <NumbersForm
        key={getId()}
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
