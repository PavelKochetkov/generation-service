import React from "react";
import '../css/navmenu.css'
import { NavLink } from "react-router-dom";

export default function Navmenu() {
    return(
        <div className="menu">
            <NavLink to='/' className='activ'>
                <div>Главная</div>
            </NavLink>
            <NavLink to='/password' className='activ'>
                <div>Пароли</div>
            </NavLink>
            <NavLink to='/numbers' className='activ'>
                <div>Числа</div>
            </NavLink>
            <NavLink to='/faq' className='activ'>
                <div>Обновления</div>
            </NavLink>
        </div>
    )
}