import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className="numbersform">
      <div className="result">{result}</div>
      <button
        className="btn-number"
        type="button"
        onClick={generateNumber}
        disabled={(minNumber > maxNumber) || (typeof minNumber !== 'number' && typeof maxNumber !== 'number')}
      >
        {t('numberPage.getRandomNumber')}
      </button>
      <hr className="hr" />
      <div className="lenght">{t('numberPage.range')}</div>
      {typeof minNumber !== 'number' && typeof maxNumber !== 'number'
                && <div className="er">{t('numberPage.notToBeText')}</div> }
      {minNumber > maxNumber
                && (
                <div className="er">
                  {t('numberPage.canNotToBeGreater')}
                </div>
                )}
      <div className="range">
        {t('numberPage.from')}
        <input
          className="min"
          type="number"
          value={minNumber}
          onChange={changeMinNumber}
        />
        {t('numberPage.to')}
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
