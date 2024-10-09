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
    description,
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
        <div className="descriptionTitle">{description.title}</div>
        <div className="noteOne">
          <div className="noteTitle">{description.noteone.title}</div>
          <div className="noteDescription">
            <div className="descr">{description.noteone.description}</div>
            <img
              className="logoimg"
              src={description.noteone.img}
              alt={description.noteone.alt}
            />
          </div>
        </div>
        <div className="noteTwo">
          <div className="noteTitle">{description.notetwo.title}</div>
          <div className="noteDescription">
            <img
              className="logoimg"
              src={description.notetwo.img}
              alt={description.notetwo.alt}
            />
            <div className="descr">{description.notetwo.description}</div>
          </div>
        </div>
        <div className="noteThree">
          <div className="noteTitle">{description.notethree.title}</div>
          <div className="noteDescription">
            <div className="descr">{description.notethree.description}</div>
            <img
              className="logoimg"
              src={description.notethree.img}
              alt={description.notethree.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
