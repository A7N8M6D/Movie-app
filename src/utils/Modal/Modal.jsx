import React from 'react'

const Modal = ({ message, closeModal }) => (
    <div className="modal show" tabIndex={-1} style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Error</h5>
          <div className="modal-body">
            <p style={{color:"black"}}>{message}</p>
          </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
         
        </div>
      </div>
    </div>
  );

export default Modal