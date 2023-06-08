import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { Password } from "./Pages/Password";
import { Faq } from "./Pages/Faq";
import { Home } from "./Pages/Home";
import { Numbers } from "./Pages/Numbers";

function App() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false)
  const handleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive)
  }
  return (
    <React.Fragment>
      <div className='burgerClick' onClick={handleBurgerMenu}></div>
      <Header active={burgerMenuActive} setActive={setBurgerMenuActive}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
