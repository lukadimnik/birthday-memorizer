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
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.birthday}</td>
      <td>
        <button onClick={closeModalHandler}>Edit</button>
      </td>
      <td>
        <button onClick={deleteBirthdayHandler}>Delete</button>
      </td>

      {showModal && (
        <Modal closeModal={closeModalHandler}>
          <EditBirthdayModal
            birthday={props.birthdayObject}
            onEdit={onEdit}
            onClose={closeModalHandler}
          />
        </Modal>
      )}
    </tr>
  );
};

export default BirthdayListItem;
