import React from 'react';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Navmenu from './Components/Navmenu';
import Header from './Components/Header';
import { Main } from './Pages/Main';
import { Faq } from './Pages/Faq';

function App() {
  return (
    <div className='grid-container'>
      <div className='item1'><Header/></div>
      <div className='item2'>
          <Routes>
            <Route path='/'element = {<Main/>}/>
            <Route path='/faq' element = {<Faq/>}/>
          </Routes>
      </div>
      <div className='item3'>
          <Navmenu/>
      </div>
    </div>
  );
}
export default App;
