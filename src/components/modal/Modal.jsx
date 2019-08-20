import React from 'react'
import "./style.css";

const Modal = ({children}) => {
    return(
            <div className="modal">
                <div className="modal-content">
                    {children}
                </div>
            </div>
    )
}

const ModalFooter = ({children}) => {
    return(
        <div className="modal-footer">
            {children}
        </div>
    );
}

const ModalContent = ({children}) => {
    return(
        <div className="content">
            {children}
        </div>
    );
}

const ModalHeader = ({children}) => {
    return(
        <div className="modal-header">
            {children}
        </div>
    );
}

export { Modal, ModalFooter, ModalHeader, ModalContent };