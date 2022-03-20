import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, title, body = "Body", action }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {title && <div className="title">
          <h1>{title}</h1>
        </div> }
        <div className="body">
          <p>{body}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={action}
          >Oke</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;