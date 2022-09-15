import React, { useState } from "react";
import MailBody from "./MailBody";
import "./mailBox.css"
import MailList from "./MailList";
const MailBox = ()=>{
    const[selected, setSelected] = useState("")
    const getSelected = (obj)=>{
        setSelected(obj)
    }
    return(
        <div className="mailBox-parent">
            <div className="mailBox-mail-list">
                <MailList getSelected={getSelected}/>
            </div>
           {selected.id  && <div className="mailBox-body"><MailBody {...selected}/></div> }
        </div>
    )
}

export default MailBox