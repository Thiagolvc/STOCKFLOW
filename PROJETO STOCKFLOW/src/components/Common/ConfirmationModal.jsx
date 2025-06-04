import React from "react";

const ConfirmationModal = ({ show, message, onClose }) => { if (!show) return null; return ( <div className="modal" style={{ display: "block" }}> <div className="modal-content"> <span onClick={onClose} style={{ float: "right", cursor: "pointer" }}>×</span> <p>{message}</p> <button onClick={onClose}>OK</button> </div> </div> ); };

export default ConfirmationModal;