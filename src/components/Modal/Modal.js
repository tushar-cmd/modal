import React from 'react';
import './Modal.css';

export const Modal = ({ show, close }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Kyu aaya h be</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>bosdika</h4>
          <p>Ma chuda li na apni bola tha mat dabaa
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">ja na be</button>
        </div>
      </div>
    </div>
  )
};