import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/passwordForm.css';

const PasswordForm = (props) => {
  const {
    lenght,
    password,
    handleChangedLenght,
    checkedUpperCase,
    changeCheckBoxUpperCase,
    checkedLowerCase,
    changeCheckBoxLowerCase,
    checkedNumber,
    changeCheckBoxNumber,
    checkedSymbols,
    changeCheckBoxSymbols,
    generatePassword,
    data,
  } = props;
  const { t } = useTranslation();
  return (
    <div className="flex-container">
      <div className="passwordContainer">
        <div className="password">{password}</div>
        <div className="title">{t('passwordPage.setupPassword')}</div>
        <hr />
        <div className="setup">
          <div className="setupRange">
            <label>
              {t('passwordPage.passwordLength')}
              :
              {' '}
              {lenght}
              <input
                type="range"
                id="lengthPassword"
                min={6}
                max={36}
                step={1}
                onChange={handleChangedLenght}
              />
            </label>
          </div>
          <div className="setupCheckBox">
            <label>
              {t('passwordPage.upperCase')}
              <input
                type="checkbox"
                checked={checkedUpperCase}
                onChange={changeCheckBoxUpperCase}
                id="upperCase"
              />
            </label>
            <label>
              {t('passwordPage.lowerCase')}
              <input
                type="checkbox"
                id="lowerCase"
                checked={checkedLowerCase}
                onChange={changeCheckBoxLowerCase}
              />
            </label>
            <label>
              {t('passwordPage.numbers')}
              <input
                type="checkbox"
                id="numbers"
                checked={checkedNumber}
                onChange={changeCheckBoxNumber}
              />
            </label>
            <label>
              {t('passwordPage.symbols')}
              <input
                type="checkbox"
                id="symbols"
                checked={checkedSymbols}
                onChange={changeCheckBoxSymbols}
              />
            </label>
          </div>
        </div>
        <button
          className="btn"
          type="button"
          onClick={generatePassword}
        >
          {t('passwordPage.getPassword')}
        </button>
      </div>
      <div className="descriptions">
        <div className="descriptionTitle">{t('passwordPage.passwordStrength')}</div>
        {data.map((item) => (
          <div key={item.id}>
            <div className="noteTitle">{item.title}</div>
            <div className="noteDescription">
              <div className="descr">{item.description}</div>
              <img
                className="logoimg"
                src={item.img}
                alt={item.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordForm;
