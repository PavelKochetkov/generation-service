import React from "react";
import '../css/header.css'
import logo from '../logo.jpg'
import Navmenu from "./Navmenu";


export default function Header({active, setActive}) {
    return (
        <React.Fragment>
            <div className={active ? 'header activated':'header'} onClick={() => {setActive(false)}}>
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