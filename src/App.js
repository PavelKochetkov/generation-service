import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { Password } from "./Pages/Password";
import { Faq } from "./Pages/Faq";
import { Home } from "./Pages/Home";
import { Numbers } from "./Pages/Numbers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<Password />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}
export default App;