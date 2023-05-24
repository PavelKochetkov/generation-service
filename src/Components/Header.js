import React from "react";
import '../css/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <div>
                    <img src="/logo.jpg" alt="logo"/>
                </div>
            </div>
            <div className="siteName">
                    <span className="strong">Strong</span> - генератор паролей
            </div>
        </div>
    )
}