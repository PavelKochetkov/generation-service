import React from 'react';
import '../css/numbersform.css';

const NumbersForm = (props) => {
  const {
    result,
    generateNumber,
    minNumber,
    maxNumber,
    changeMaxNumber,
    changeMinNumber,
  } = props;

  return (
    <div className="numbersform">
      <div className="result">{result}</div>
      <button
        type="button"
        onClick={generateNumber}
        disabled={(minNumber > maxNumber) || (typeof minNumber !== 'number' && typeof maxNumber !== 'number')}
      >
        Случайное число
      </button>
      <hr className="hr" />
      <div className="lenght">Укажите диапазон</div>
      {typeof minNumber !== 'number' && typeof maxNumber !== 'number'
                && <div className="er">Число не может быть текстом</div> }
      {minNumber > maxNumber
                && (
                <div className="er">
                  Начальное значение не может быть больше конечного
                </div>
                )}
      <div className="range">
        от
        <input
          className="min"
          type="number"
          value={minNumber}
          onChange={changeMinNumber}
        />
        до
        <input
          className="max"
          type="number"
          value={maxNumber}
          onChange={changeMaxNumber}
        />
      </div>
    </div>
  );
};

export default NumbersForm;
