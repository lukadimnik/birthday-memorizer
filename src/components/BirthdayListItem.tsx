import { useState } from 'react';
import EditBirthdayModal from './EditBirthdayModal';
import Modal from './UI/Modal';
import { Birthday } from '../models/interfaces';

interface BirthdayListItemProps {
  birthdayObject: {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
  };
  onDeleteBirthday: (id: number) => void;
  onEdit: (newBirthday: Birthday) => void;
}

const BirthdayListItem = ({
  birthdayObject,
  onDeleteBirthday,
  onEdit,
}: BirthdayListItemProps) => {
  const [showModal, setShowModal] = useState(false);

  const deleteBirthdayHandler = () => {
    onDeleteBirthday(birthdayObject.id);
  };

  const closeModalHandler = () => {
    setShowModal((oldState) => !oldState);
  };

  const onEditBirthday = (newBirthday: Birthday) => {
    onEdit(newBirthday);
    setShowModal(false);
  };

  return (
    <tr>
      <td>{birthdayObject.firstName}</td>
      <td>{birthdayObject.lastName}</td>
      <td>{birthdayObject.birthday}</td>
      <td>
        <button onClick={closeModalHandler}>Edit</button>
      </td>
      <td>
        <button onClick={deleteBirthdayHandler}>Delete</button>
      </td>

      {showModal && (
        <Modal
          closeModal={closeModalHandler}
          title='Edit Birthday'
          isOpen={false}
        >
          <EditBirthdayModal
            birthday={birthdayObject}
            onEdit={onEditBirthday}
            onClose={closeModalHandler}
          />
        </Modal>
      )}
    </tr>
  );
};

export default BirthdayListItem;
