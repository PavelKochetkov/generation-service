import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/QrPage.css';

const QrPage = (props) => {
  const {
    qrCode, changeText, text, fetchData,
  } = props;
  const { t } = useTranslation();

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
        {t('qrPage.getQrCode')}
      </button>
    </div>
  );
};

export default QrPage;
