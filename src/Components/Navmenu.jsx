import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/navmenu.css';
import { NavLink } from 'react-router-dom';
import { getPageRoute } from '../utils/routes';

const Navmenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="menu">
      <NavLink to={getPageRoute('HOME_PAGE')} className="activ">
        <div>{t('navigation.main')}</div>
      </NavLink>
      <NavLink to={getPageRoute('PASSWORD_PAGE')} className="activ">
        <div>{t('navigation.password')}</div>
      </NavLink>
      <NavLink to={getPageRoute('NUMBER_PAGE')} className="activ">
        <div>{t('navigation.numbers')}</div>
      </NavLink>
      <NavLink to={getPageRoute('QR_PAGE')} className="activ">
        <div>{t('navigation.qr')}</div>
      </NavLink>
      <NavLink to={getPageRoute('UPDATE_PAGE')} className="activ">
        <div>{t('navigation.updates')}</div>
      </NavLink>
    </nav>
  );
};

export default Navmenu;
