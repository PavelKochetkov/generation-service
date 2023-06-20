import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import { Password } from "./Pages/Password";
import { Updates } from "./Pages/Updates";
import { Home } from "./Pages/Home";
import { Numbers } from "./Pages/Numbers";
import { QrService } from "./Pages/QrService";

function App() {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false)
  const handleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive)
  }
  return (
    <React.Fragment>
      <div className='burgerClick' onClick={handleBurgerMenu}></div>
      <NavigationBar active={burgerMenuActive} setActive={setBurgerMenuActive}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/qrservice" element={<QrService/>} />
        <Route path="/updates" element={<Updates/>} />
      </Routes>
    </React.Fragment>
  );
}
export default App;