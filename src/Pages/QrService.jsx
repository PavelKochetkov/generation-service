import React from 'react';
import { useTranslation } from 'react-i18next';
import QrForm from '../Components/QrForm';
import Header from '../Components/Header';

const QrService = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('qrPage.title')} />
      <QrForm />
    </>
  );
};

export default QrService;
