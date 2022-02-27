import React, { useState } from 'react';
import EditBirthdayModal from './EditBirthdayModal';
import Modal from './UI/Modal';

const BirthdayListItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const deleteBirthdayHandler = () => {
    props.onDeleteBirthday(props.id);
  };

  const closeModalHandler = () => {
    setShowModal((oldState) => !oldState);
  };

  const onEdit = (newBirthday) => {
    props.onEdit(newBirthday);
    setShowModal(false);
  };

  return (
    <li>
      {`${props.firstName} ${props.lastName} ${props.birthday}   `}
      <button onClick={closeModalHandler}>Edit</button>
      <button onClick={deleteBirthdayHandler}>Delete</button>
      {showModal && (
        <Modal closeModal={closeModalHandler}>
          <EditBirthdayModal
            birthday={props.birthdayObject}
            onEdit={onEdit}
            onClose={closeModalHandler}
          />
        </Modal>
      )}
    </li>
  );
};

export default BirthdayListItem;
