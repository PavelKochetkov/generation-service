import React, { useState } from "react";
import { Header } from "../Components/Header";
import { NumbersForm } from "../Components/NumberForm";

export const Numbers = () => {
  const [minNumber, setMinNumber] = useState(0)
  const changeMinNumber = (event) => {
    setMinNumber(+event.target.value)
  }
  const [maxNumber, setMaxNumber] = useState(0)
  const changeMaxNumber = (event) => {
    setMaxNumber(+event.target.value)
  }
  const [result, setResult] = useState(0)
  const generateNumber = (min, max) => {
    max = maxNumber
    min = minNumber
    setResult(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return (
    <React.Fragment>
      <Header title={'Генератор чисел'}/>
      <NumbersForm
        minNumber={minNumber}
        changeMinNumber={changeMinNumber}
        maxNumber={maxNumber}
        changeMaxNumber={changeMaxNumber}
        result={result}
        generateNumber={generateNumber}
      />
    </React.Fragment>
  );
};
