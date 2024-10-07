import React from 'react';
import '../css/QrPage.css';

const QrPage = (props) => {
  const {
    qrCode, changeText, text, fetchData,
  } = props;

  return (
    <div className="qrForm">
      <img
        src={qrCode}
        alt=""
        className="qrImage"
      />
      <input
        type="text"
        placeholder="Введите значение"
        onChange={changeText}
        value={text}
        className="inputQr"
      />
      <button
        className="btQr"
        type="button"
        onClick={fetchData}
        disabled={!text}
      >
        Сгенерировать QR-код
      </button>
    </div>
  );
};

export default QrPage;
