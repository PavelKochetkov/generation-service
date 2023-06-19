import React from "react";
import '../css/numbersform.css'

export const NumbersForm = (props) => {
    return (
        <div className="numbersform">
            <div className="result">{props.result}</div>
            <button onClick={props.generateNumber}>Случайное число</button>
            <hr className="hr"/>
            <div className="lenght">Укажите диапазон</div>
            <div className="range">
                от
                <input
                    className="min" 
                    type="number"
                    value={props.minNumber}
                    onChange={props.changeMinNumber}
                />
                до
                <input 
                    className="max"
                    type="number"
                    value={props.maxNumber}
                    onChange={props.changeMaxNumber}
                />
            </div>
        </div>
    )
}