import React from 'react';
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
  return (
    <div className="flex-container">
      <div className="passwordContainer">
        <div className="password">{password}</div>
        <div className="title">Настройте свой пароль</div>
        <hr />
        <div className="setup">
          <div className="setupRange">
            <label>
              Длина пароля:
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
              Верхний регистр
              <input
                type="checkbox"
                checked={checkedUpperCase}
                onChange={changeCheckBoxUpperCase}
                id="upperCase"
              />
            </label>
            <label>
              Нижний регистр
              <input
                type="checkbox"
                id="lowerCase"
                checked={checkedLowerCase}
                onChange={changeCheckBoxLowerCase}
              />
            </label>
            <label>
              Числа
              <input
                type="checkbox"
                id="numbers"
                checked={checkedNumber}
                onChange={changeCheckBoxNumber}
              />
            </label>
            <label>
              Символы
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
          Сгенерировать пароль
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
