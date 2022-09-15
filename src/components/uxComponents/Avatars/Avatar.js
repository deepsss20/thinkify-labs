import React from "react";
import "./avatar.css"
const Avatar = ({icon})=>{
    return(
        <div className="card-logo">
            <div className="logo-font">{icon}</div>
      </div>
    )
}
export default Avatar