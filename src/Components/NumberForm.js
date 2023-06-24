import React from "react";
import '../css/numbersform.css'

export const NumbersForm = (props) => {
    return (
        <div className="numbersform">
            <div className="result">{props.result}</div>
            <button 
                onClick={props.generateNumber} 
                disabled={(props.minNumber>props.maxNumber) || (typeof props.minNumber !='number' && typeof props.maxNumber !='number')}>
                Случайное число
            </button>
            <hr className="hr"/>
            <div className="lenght">Укажите диапазон</div>
            {typeof props.minNumber !='number' && typeof props.maxNumber !='number' && 
                <div className="er">Число не может быть текстом</div> }
            {props.minNumber>props.maxNumber && 
                <div className="er">
                    Начальное значение не может быть больше либо равно конечному
                </div>}
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