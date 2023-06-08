import React from "react";
import "../css/passwordForm.css";

export default function PasswordForm(props) {
  return (
    <React.Fragment>
        <div className="flex-container">
        <div className="titlePage"><h1>Генератор паролей</h1></div>
            <div className="item2">
                <div className="password">{props.password}</div>
                <div className="title">Настройте свой пароль</div>
                <hr />
                <div className="setup">
                    <div className="setupRange">
                        <label>
                            Длина пароля: {props.lenght}
                            <input
                                type="range"
                                id="lengthPassword"
                                min={6}
                                max={36}
                                step={1}
                                onChange={props.handleChangedLenght}
                            />
                        </label>
                    </div>
                    <div className="setupCheckBox">
                        <label>
                            Верхний регистр
                            <input
                                type="checkbox"
                                checked={props.checkedUpperCase}
                                onChange={props.changeCheckBoxUpperCase}
                                id="upperCase"
                            />
                        </label>
                        <label>
                            Нижний регистр
                            <input
                                type="checkbox"
                                id="lowerCase"
                                checked={props.checkedLowerCase}
                                onChange={props.changeCheckBoxLowerCase}
                            />
                        </label>
                        <label>
                            Числа
                            <input
                                type="checkbox"
                                id="numbers"
                                checked={props.checkedNumber}
                                onChange={props.changeCheckBoxNumber}
                            />
                        </label>
                        <label>
                            Символы
                            <input
                                type="checkbox"
                                id="symbols"
                                checked={props.checkedSymbols}
                                onChange={props.changeCheckBoxSymbols}
                            />
                        </label>
                    </div>
                </div>
                <button className="btn" onClick={props.generatePassword}>Сгенерировать пароль</button>
            </div>
        </div>
    </React.Fragment>
  );
}
