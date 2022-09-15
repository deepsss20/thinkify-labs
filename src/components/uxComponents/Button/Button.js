import React from "react";
import cs from "classnames"
import "./button.css"
const Button = ({isActive, onClick, text, type})=>{
    if(type==='link'){
        return(
            <div className={cs("button-link-color", {
                'buton-link-active': isActive
            })}onClick={onClick}>{text}</div>
        )
    }
    if(type==='primary'){
        return(
            <div className="primary-button-type"onClick={onClick}>{text}</div>
        )
    }
    return(
        <div className="button-div">
            <div className={cs('button-secondary', {
                'button-secondary-active' : isActive
            })} onClick={onClick}><span className="button-secondary-text">{text}</span></div>
        </div>
    )
}

export default Button