import React from 'react'
import './style.css';
interface ModalProps{
    isOpen : boolean;
    onClose: ()=>void;
    children: React.ReactNode
}

const Modal = ({isOpen, onClose, children}: ModalProps)=>{
    if(!isOpen) return null;
    return(
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
            <div className="modal-content">{children}</div>
            </div>
        </div>
    )
}

export default Modal