import React from "react";
import '../css/navmenu.css'
import { NavLink } from "react-router-dom";

export default function Navmenu() {
    return(
        <div className="menu">
            <NavLink to='/' className='activ'>Главная</NavLink>
            <NavLink to='/password' className='activ'>Пароли</NavLink>
            <NavLink to='/numbers' className='activ'>Числа</NavLink>
            <NavLink to='/faq' className='activ'>FAQ</NavLink>
        </div>
    )
}