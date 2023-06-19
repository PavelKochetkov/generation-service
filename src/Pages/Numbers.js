import React, { useState } from "react";
import { Header } from "../Components/Header";
import { NumbersForm } from "../Components/NumberForm";

export const Numbers = () => {
  const [minNumber, setMinNumber] = useState()
  const changeMinNumber = (event) => {
    setMinNumber(+event.target.value)
  }
  const [maxNumber, setMaxNumber] = useState()
  const changeMaxNumber = (event) => {
    setMaxNumber(+event.target.value)
  }
  const [result, setResult] = useState(0)
  const generateNumber = (min, max) => {
    max = maxNumber
    min = minNumber
    setResult(Math.floor(Math.random() * (max - min)) + min)
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
