import React from "react";
import '../css/home.css'

export default function HomePage (props) {
    return (
        <React.Fragment>
            <div className='home'>
                <div className="logoPage">
                    <img src={props.home.logo.img} alt={props.home.logo.alt}/>
                </div>
                <div className='info'>{props.home.info}</div>
                <div className='down'>
                    <img src={props.home.down.img} alt={props.home.down.alt}/>
                </div>
            </div>
            <div className="description">
                <div className="descrTitle">Для чего нужен сервис?</div>
                <div className="genereateInfo">
                    <div className="genPass">
                        <img 
                            src={props.home.description.password.img} 
                            alt={props.home.description.password.alt}
                        />    
                        <div>{props.home.description.password.title}</div>
                    </div>
                    <div className="genNum">
                        <img 
                            src={props.home.description.numbers.img} 
                            alt={props.home.description.numbers.alt}
                        />    
                        <div>{props.home.description.numbers.title}</div>
                    </div>
                    <div className="genOther">
                        <img 
                            src={props.home.description.others.img} 
                            alt={props.home.description.others.alt}
                        />    
                        <div>{props.home.description.others.title}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}