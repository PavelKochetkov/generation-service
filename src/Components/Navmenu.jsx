import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/navmenu.css';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="menu">
      <NavLink to="/" className="activ">
        <div>{t('navigation.main')}</div>
      </NavLink>
      <NavLink to="/password" className="activ">
        <div>{t('navigation.password')}</div>
      </NavLink>
      <NavLink to="/numbers" className="activ">
        <div>{t('navigation.numbers')}</div>
      </NavLink>
      <NavLink to="/qrservice" className="activ">
        <div>{t('navigation.qr')}</div>
      </NavLink>
      <NavLink to="/updates" className="activ">
        <div>{t('navigation.updates')}</div>
      </NavLink>
    </nav>
  );
};

export default Navmenu;
