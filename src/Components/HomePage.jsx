import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';
import down from '../assets/down.jpg';
import '../css/home.css';

const HomePage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="home">
        <div className="logoPage">
          <img src={logo} alt={t('homePage.logoHomePage')} />
        </div>
        <div className="info">{t('homePage.title')}</div>
        <div className="down">
          <img src={down} alt={t('homePage.downwardViewingDirection')} />
        </div>
      </div>
      <div className="description">
        <div className="descrTitle">{t('homePage.mainQuestion')}</div>
        <div className="genereateInfo">
          {data.map((item) => (
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
