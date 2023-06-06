import React from "react";
import '../css/header.css'
import logo from '../img/logo.jpg'
import Navmenu from "./Navmenu";

export default function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <div className="siteName">
                        <span className="strong">Strong</span> - generation service
                    </div>
                </div>
                <Navmenu/>
            </div>
        </React.Fragment>

    )
}