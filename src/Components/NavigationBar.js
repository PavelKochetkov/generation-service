import React from "react";
import '../css/NavigationBar.css'
import logo from '../logo.jpg'
import Navmenu from "./Navmenu";


export default function NavigationBar({active, setActive}) {
    return (
        <React.Fragment>
            <div className={active ? 'navbar activated':'navbar'} onClick={() => {setActive(false)}}>
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