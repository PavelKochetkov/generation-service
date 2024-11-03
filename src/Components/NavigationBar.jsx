import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectIsActive } from '../store/slice/appSlice';
import '../css/NavigationBar.css';
import logo from '../assets/logo.jpg';
import Navmenu from './Navmenu';

const NavigationBar = () => {
  const { t } = useTranslation();
  const isActive = useSelector(selectIsActive);

  return (
    <div className={cn('navbar', { 'navbar activated': isActive })}>
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
