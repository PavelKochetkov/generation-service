import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import getId from '../utils/generateId';
import Header from '../Components/Header';
import UpdatesPage from '../Components/UpdatesPage';
import baseURL from '../config';

const Updates = () => {
  const { t } = useTranslation();
  const [updates, setUpdates] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const handleShowUpdate = () => {
    setShowUpdate(!showUpdate);
  };
  const [showUpdateTwo, setShowUpdateTwo] = useState(false);
  const handleShowUpdateTwo = () => {
    setShowUpdateTwo(!showUpdateTwo);
  };
  useEffect(() => {
    const fetchData = async () => {
      const respUpdates = await axios.get(`${baseURL}updates.json`);
      setUpdates(respUpdates.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header title={t('updatePage.title')} />
      {updates.map((update) => (
        <UpdatesPage
          key={getId()}
          update={update}
          active={showUpdate}
          handle={handleShowUpdate}
          activetwo={showUpdateTwo}
          handletwo={handleShowUpdateTwo}
        />
      ))}
    </>
  );
};

export default Updates;
