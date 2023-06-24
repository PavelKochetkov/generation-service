import React from "react";
import '../css/QrPage.css'

export const QrPage = (props) => {
    return (
        <div className="qrForm">
            <img 
                src={props.qrCode}
                alt=""
                className="qrImage"
            />
            <input
                type="text"
                placeholder="Введите значение"
                onChange={props.changeText}
                value={props.text}
                className="inputQr"
            />
            <button 
                className="btQr" 
                onClick={props.fetchData}
                disabled={!props.text}>
                Сгенерировать QR-код
            </button>
        </div>
    )
}