import React from 'react';
import ReactDOM from 'react-dom';

const OVERLAY_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex: 1000,
  border: '1px solid red',
};

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  border: '1px solid red',
};

const Modal = ({ children, closeModal }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLES}>
        <button onClick={closeModal}>Close</button>
        {children}
      </div>
    </React.Fragment>,
    document.getElementById('portal')
  );
};

export default Modal;
