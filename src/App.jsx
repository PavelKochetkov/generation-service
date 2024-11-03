import React from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { setActiveMenu } from './store/slice/appSlice';
import { getPageRoute } from './utils/routes';
import ButtonActiveBurgerMenu from './Components/ButtonActiveBurgerMenu';
import NavigationBar from './Components/NavigationBar';
import Password from './Pages/Password';
import Updates from './Pages/Updates';
import Home from './Pages/Home';
import Numbers from './Pages/Numbers';
import QrService from './Pages/QrService';

const App = () => {
  const dispatch = useDispatch();

  const handleBurgerMenu = () => {
    dispatch(setActiveMenu());
  };
  return (
    <>
      <ButtonActiveBurgerMenu
        onClick={handleBurgerMenu}
      />
      <HashRouter>
        <NavigationBar />
        <Routes>
          <Route path={getPageRoute('HOME_PAGE')} element={<Home />} />
          <Route path={getPageRoute('PASSWORD_PAGE')} element={<Password />} />
          <Route path={getPageRoute('NUMBER_PAGE')} element={<Numbers />} />
          <Route path={getPageRoute('QR_PAGE')} element={<QrService />} />
          <Route path={getPageRoute('UPDATE_PAGE')} element={<Updates />} />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </>
  );
};
export default App;
