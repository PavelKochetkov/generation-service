import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <h3>{t('status.loading')}</h3>
  );
};

export default Loading;
