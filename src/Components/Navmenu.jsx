import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { setNotActiveMenu } from '../store/slice/appSlice';
import '../css/navmenu.css';
import { getPageRoute } from '../utils/routes';

const Navmenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleActive = () => {
    dispatch(setNotActiveMenu());
  };

  return (
    <nav className="menu">
      <NavLink to={getPageRoute('HOME_PAGE')} className="nav-link" onClick={handleActive}>
        <div>{t('navigation.main')}</div>
      </NavLink>
      <NavLink to={getPageRoute('PASSWORD_PAGE')} className="nav-link" onClick={handleActive}>
        <div>{t('navigation.password')}</div>
      </NavLink>
      <NavLink to={getPageRoute('NUMBER_PAGE')} className="nav-link" onClick={handleActive}>
        <div>{t('navigation.numbers')}</div>
      </NavLink>
      <NavLink to={getPageRoute('QR_PAGE')} className="nav-link" onClick={handleActive}>
        <div>{t('navigation.qr')}</div>
      </NavLink>
      <NavLink to={getPageRoute('UPDATE_PAGE')} className="nav-link" onClick={handleActive}>
        <div>{t('navigation.updates')}</div>
      </NavLink>
    </nav>
  );
};

export default Navmenu;
