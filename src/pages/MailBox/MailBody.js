import React from "react";
import Avatar from "../../components/uxComponents/Avatars/Avatar";
import Button from "../../components/uxComponents/Button/Button";
import "./mailBody.css"
import { useGetEmailBodyQuery } from "../../services/email.services";
import dayjs from "dayjs"
import { useDispatch } from "react-redux";
import { emailActions } from "../../store/slices/email.slice";
import { useSelector } from "react-redux";
const MailBody = ({id, from, subject,date})=>{
    const {data={},isLoading,isSuccess,isError} = useGetEmailBodyQuery(id)
    // console.log(data)
    const dateFormatted = dayjs(date).format("DD/MM/YYYY hh:mma")
    const dispatch = useDispatch()
    const favourites = useSelector(state=>state.emailSlice.favourites)
    const isFav = favourites.includes(id)
    const onFavClick = ()=>{
        if(isFav){
            dispatch(emailActions.removeFavHandler(id))
        }else{

        dispatch(emailActions.addFavHandler(id))
        }
    }
    return(
        <div className="border-view">
         <div>  
         <Avatar icon={from.name[0].toUpperCase()}/>
         </div>
         <div className="align-body">
         <div className="text-button">
         <span className="text-spacing">{subject}</span>
         <div className="button-align">
         <Button type="primary" text={isFav?"Remove from Favorite" :"Mark as Favorite"} onClick={onFavClick}/>
         </div>
         </div>
         <div className="date-text">
         <span>{dateFormatted}</span>
         <br />
         <span className="text-align" dangerouslySetInnerHTML={{__html:data.body}}/> 
         </div>
         </div>
        </div>
    )
}

export default MailBody