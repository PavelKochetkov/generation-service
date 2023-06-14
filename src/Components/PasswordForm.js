import React from "react";
import "../css/passwordForm.css";

export default function PasswordForm(props) {
  return (
    <React.Fragment>
        <div className="flex-container">
            <div className="passwordContainer">
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
            <div className="descriptions">
                <div className="descriptionTitle">{props.description.title}</div>
                <div className="noteOne">
                    <div className="noteOneTitle">{props.description.noteone.title}</div>
                    <div className="noteOneDescription">
                        <div className="descr">{props.description.noteone.description}</div>
                            <img 
                                className="logoimg"
                                src={props.description.noteone.img} 
                                alt={props.description.noteone.alt}
                            />
                    </div>
                </div>
                <div className="noteTwo">
                    <div className="noteTwoTitle">{props.description.notetwo.title}</div>
                    <div className="noteTwoDescription">
                            <img 
                                className="logoimg"
                                src={props.description.notetwo.img} 
                                alt={props.description.notetwo.alt}
                            />
                        <div className="descr">{props.description.notetwo.description}</div>
                    </div>
                </div>
                <div className="noteThree">
                    <div className="noteThreeTitle">{props.description.notethree.title}</div>
                    <div className="noteThreeDescription">
                        <div className="descr">{props.description.notethree.description}</div>
                            <img 
                                className="logoimg" 
                                src={props.description.notethree.img}    
                                alt={props.description.notethree.alt}
                            />
                        
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}