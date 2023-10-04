import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

interface ModalProps {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ title, isOpen, closeModal, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>{title}</h2>
      {children}
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default CustomModal;
