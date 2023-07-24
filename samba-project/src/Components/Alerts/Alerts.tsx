import React, {useState} from "react"
import "./style.css"

export type NotificationType = "success" | "error" | "info";

interface AlertsProps {
    type: NotificationType;
    message: string;
    isOpen:boolean
    handleClose: ()=>void
}

const Alerts = ({type, message, isOpen, handleClose}:AlertsProps)=>{
    return(
    <>
        {isOpen && (
            <div className={`notification ${type}`}>
            <div className="message">{message}</div>
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
          </div>
        )}
    </>
    )
}

export default Alerts