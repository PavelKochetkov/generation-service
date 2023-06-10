import React from "react";
import '../css/TitlePageHeader.css'

export const Header = (props) => {
    return (
        <div className="titlePageHeader">
            <h1>{props.title}</h1>
        </div>
    )
}