import React, { useState } from 'react';
import QrPage from '../Components/QrPage';
import Header from '../Components/Header';
import logo from '../assets/JustDoIt.png';

const QrService = () => {
  const [qrCode, setQrCode] = useState(logo);
  const [text, setText] = useState('');

  const changeText = (event) => {
    setText(event.target.value);
  };
  const fetchData = () => {
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`);
    setText('');
  };
  return (
    <>
      <Header title="Генератор QR-кода" />
      <QrPage
        text={text}
        changeText={changeText}
        qrCode={qrCode}
        fetchData={fetchData}
      />
    </>
  );
};

export default QrService;
