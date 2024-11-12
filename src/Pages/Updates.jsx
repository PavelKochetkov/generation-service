import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUpdatePageDataQuery } from '../api/updatesApi';
import Header from '../Components/Header';
import UpdatesList from '../Components/UpdatesList';

const Updates = () => {
  const { data: updateData = {}, isLoading } = useGetUpdatePageDataQuery();
  const { t } = useTranslation();
  return (
    <>
      <Header title={t('updatePage.title')} />
      <UpdatesList
        updateData={updateData}
        isLoading={isLoading}
      />
    </>
  );
};

export default Updates;
