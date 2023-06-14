import React from "react";
import { Header } from "../Components/Header";
import { NumbersForm } from "../Components/NumberForm";

export const Numbers = () => {
  return (
    <div className="numbers">
      <Header title={'Генератор чисел'}/>
      <NumbersForm/>
    </div>
  );
};
