import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectIsHomeDataError, selectError } from '../store/slice/appSlice';
import handleError from '../utils/handleError';
import logo from '../assets/logo.jpg';
import Loading from './Loading';
import '../css/home.css';

const HomePage = (props) => {
  const { homeData, isLoading } = props;
  const { t } = useTranslation();
  const error = useSelector(selectError);
  const isHomeDataError = useSelector(selectIsHomeDataError);

  const errorMessage = handleError(error, t);

  return (
    <>
      <div className="home">
        <div className="logoPage">
          <img src={logo} alt={t('homePage.logoHomePage')} />
        </div>
        <div className="info">{t('homePage.title')}</div>
      </div>
      <div className="description">
        <div className="descrTitle">{t('homePage.mainQuestion')}</div>
        <div className="genereateInfo">
          {isHomeDataError && <div className="er">{errorMessage}</div>}
          {isLoading && <Loading />}
          {homeData.map((item) => (
            <div className="block" key={item.id}>
              <img
                src={item.img}
                alt={item.alt}
              />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
