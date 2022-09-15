import React, { useEffect, useMemo, useState } from "react";
import MailCard from "../../components/uicomponents/MailCard";
import Button from "../../components/uxComponents/Button/Button";
import "./mailList.css"
import { useGetEmailListQuery } from "../../services/email.services";
import { useSelector } from "react-redux";

const MailList = ({getSelected}) => {
  const {favourites, read} = useSelector((state)=>state.emailSlice)
  const[button, setButton] = useState("")
  const[page, setPage] = useState(1)
  const {isError, isLoading, data, isSuccess, error} = useGetEmailListQuery(page)
  const {list =[], total=0} = data || {}
  console.log( total)
  const onFilterClick = (name)=>{
    setButton(name)
  }

  const memoisedList = useMemo(()=>{
    if(button==="unread"){
      return list.filter(ele=> !read.includes(ele.id))
    }
    if(button==="read"){
      return list.filter(ele=>read.includes(ele.id))
    }
    if(button==="fav"){
      return list.filter(ele=>favourites.includes(ele.id))
    }
    return list
  }, [button, JSON.stringify(list)])

  const totalPages = useMemo(()=>{
   const pages =[]
   for(let i=1; i<= Math.ceil(total/10); i++){
    pages.push(i)
   }
   return pages
  }, [total])

  const onPageClick=(page)=>{
    setPage(page)
  }

  return (
    <div>
      <header>
        <div className="header-div">
        <span className="mail-list-header">Filter By:</span>
        <Button text="Unread" isActive={button==="unread"} onClick={()=>onFilterClick("unread")}/>
        <Button text="Read" isActive={button==="read"} onClick={()=>onFilterClick("read")}/>
        <Button text="Favorites" isActive={button==="fav"} onClick={()=>onFilterClick("fav")}/>
        <Button text="Clear" onClick={()=>onFilterClick("")}/>
        </div>
        <div className="page-section">
          {totalPages.map(pg=> <span className="page-number">
            <Button isActive={pg==page} onClick={()=> onPageClick(pg)} key={pg} type="link" text={pg} />
          </span>)}
        </div>
      </header>
      <section className="mail-section">
        {memoisedList.map(mail=>{
          return <MailCard isFav={favourites.includes(mail.id)} isRead={read.includes(mail.id)} key={mail.id} {...mail} getSelected={getSelected} />
        })}
        
      </section>
    </div>
  );
};

export default MailList;
