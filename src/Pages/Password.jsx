/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPasswordPageDataQuery } from '../api/passwordApi';
import PasswordForm from '../Components/PasswordForm';
import Header from '../Components/Header';

const Password = () => {
  const { t } = useTranslation();
  const { data: passwordData = [], isLoading } = useGetPasswordPageDataQuery();
  return (
    <>
      <Header title={t('passwordPage.title')} />
      <PasswordForm
        passwordData={passwordData}
        isLoading={isLoading}
      />
    </>
  );
};

export default Password;
