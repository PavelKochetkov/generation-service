/* eslint-disable no-param-reassign */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Components/Header';
import NumberForm from '../Components/NumberForm';

const Numbers = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('numberPage.title')} />
      <NumberForm />
    </>
  );
};

export default Numbers;
