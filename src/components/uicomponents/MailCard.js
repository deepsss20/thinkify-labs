import React from "react";
import Button from "../uxComponents/Button/Button";
import "./mailCard.css"
import dayjs from "dayjs"
import Avatar from "../uxComponents/Avatars/Avatar";
import { useDispatch } from "react-redux";
import { emailActions } from "../../store/slices/email.slice";
const MailCard = ({id, from, date, subject, short_description, getSelected, isRead, isFav})=>{
    const dispatch = useDispatch()
    const icon = from?.name[0].toUpperCase()
    const nameAndEmail = `${from?.name} <${from?.email}>`
    const dateFormatted = dayjs(date).format("DD/MM/YYYY hh:mma")
    const onMailClick=()=>{
        dispatch(emailActions.readHandler(id))
        getSelected({id, from, subject,date})
    }
    return(
        <div className="mail-card mail-card-details" onClick={onMailClick}>
            <Avatar icon={icon}/>
            <div className="mail-card-details">
            <span className="text-font">From: <span className="text-email">{nameAndEmail} {!isRead && "(Unread)"}</span></span>
            <br />
            <span className="text-font">Subject: <span className="text-subject">{subject}</span></span>
            <br />
            <br />
            <div className="text-font text-desc">{short_description}</div>
            <br />
            <div className="text-button-align">
            <span className="text-font">{dateFormatted}</span>&emsp;
            {isFav && <Button type="link" text="Favorite"/>}
            </div>
            </div>
        </div>
    )
}

export default MailCard