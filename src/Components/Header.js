import React from "react";
import '../css/header.css'
import logo from '../img/logo.jpg'
import Navmenu from "./Navmenu";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="siteName">
                <span className="strong">Strong</span> - generation service
            </div>
            <Navmenu/>
        </div>
    )
}