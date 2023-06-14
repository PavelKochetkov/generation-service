import React from "react";
import '../css/UpdatesPage.css'

export const UpdatesPage = (props) => {
    return (
        <React.Fragment>
            <div className="updatesTitle">
                <button className="bt" onClick={props.handle}>{props.update.updateone.title}</button>
            </div>
            <div className={props.active ? 'updatesForm onactive': "updatesForm"}>
                <div className="change">
                    <div className="titleUpdate">{props.update.updateone.change.changeOne.title}</div>
                        <div className="changeOne">
                            <div className="old">
                                <img
                                    className="img" 
                                    src={props.update.updateone.change.changeOne.old}
                                    alt={props.update.updateone.change.changeOne.alt}
                                />
                            </div>
                            {<img
                                className="arrow" 
                                src={props.update.updateone.change.changeOne.arrow}
                                alt={props.update.updateone.change.changeOne.alt}
                            />}
                            <div className="new">
                                <img
                                    className="img"  
                                    src={props.update.updateone.change.changeOne.new}
                                    alt={props.update.updateone.change.changeOne.alt}
                                />
                            </div>
                        </div>
                    <div className="titleUpdate">{props.update.updateone.change.changeTwo.title}</div>
                        <div className="changeTwo">
                            <div className="desctop">
                                <img 
                                    src={props.update.updateone.change.changeTwo.desctop}
                                    alt={props.update.updateone.change.changeOne.alt}
                                />
                            </div>
                            <div className="tablet">
                                <img 
                                    src={props.update.updateone.change.changeTwo.tablet}
                                    alt={props.update.updateone.change.changeOne.alt}
                                />
                            </div>
                            <div className="mobile">
                                <img 
                                    src={props.update.updateone.change.changeTwo.mobile}
                                    alt={props.update.updateone.change.changeOne.alt}
                                />
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}