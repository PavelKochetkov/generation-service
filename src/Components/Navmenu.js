import React from "react";
import '../css/navmenu.css'
import { NavLink } from "react-router-dom";

export default function Navmenu() {
    return(
        <div className="menu">
            <NavLink to='/' className='activ'>
                {/* <div className="bt">!!!</div> */}
                <div>Главная</div>
            </NavLink>
            <NavLink to='/password' className='activ'>
                {/* <div className="bt">***</div> */}
                <div>Пароли</div>
            </NavLink>
            <NavLink to='/numbers' className='activ'>
                {/* <div className="bt">123</div> */}
                <div>Числа</div>
            </NavLink>
            <NavLink to='/faq' className='activ'>
                {/* <div className="bt">???</div> */}
                <div>Обновления</div>
            </NavLink>
        </div>
    )
}