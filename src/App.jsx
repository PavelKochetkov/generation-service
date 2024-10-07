/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/qrservice" element={<QrService />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
    </>
  );
};
export default App;
