/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import getPageRoute from './utils/routes';
import NavigationBar from './Components/NavigationBar';
import Password from './Pages/Password';
import Updates from './Pages/Updates';
import Home from './Pages/Home';
import Numbers from './Pages/Numbers';
import QrService from './Pages/QrService';

const App = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const handleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };
  return (
    <>
      <div className="burgerClick" onClick={handleBurgerMenu} />
      <NavigationBar active={burgerMenuActive} setActive={setBurgerMenuActive} />
      <Routes>
        <Route path={getPageRoute('HOME_PAGE')} element={<Home />} />
        <Route path={getPageRoute('PASSWORD_PAGE')} element={<Password />} />
        <Route path={getPageRoute('NUMBER_PAGE')} element={<Numbers />} />
        <Route path={getPageRoute('QR_PAGE')} element={<QrService />} />
        <Route path={getPageRoute('UPDATE_PAGE')} element={<Updates />} />
      </Routes>
    </>
  );
};
export default App;
