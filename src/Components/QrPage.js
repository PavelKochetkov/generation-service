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
            <div className="errorQr">{props.error}</div>
            <input
                type="text"
                placeholder="Введите значение"
                onChange={props.changeText}
                value={props.text}
                className="inputQr"
            />
            <button className="btQr" onClick={props.fetchData}>Сгенерировать QR-код</button>
        </div>
    )
}