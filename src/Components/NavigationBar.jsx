/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/NavigationBar.css';
import logo from '../assets/logo.jpg';
import Navmenu from './Navmenu';

const NavigationBar = ({ active, setActive }) => {
  const { t } = useTranslation();

  return (
    <div className={active ? 'navbar activated' : 'navbar'} onClick={() => { setActive(false); }}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="siteName">
          <span className="strong">{t('navigation.title')}</span>
          {' '}
          -
          {' '}
          {t('navigation.description')}
        </div>
      </div>
      <Navmenu />
    </div>
  );
};

export default NavigationBar;
