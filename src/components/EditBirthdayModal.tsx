import { useState } from 'react';
import { Birthday } from '../models/interfaces';

interface EditBirthdayModalProps {
  birthday: Birthday;
  onEdit: (newBirthday: Birthday) => void;
  onClose: () => void;
}

const EditBirthdayModal = (props: EditBirthdayModalProps) => {
  const [firstName, setFirstName] = useState(props.birthday.firstName);
  const [lastName, setLastName] = useState(props.birthday.lastName);
  const [birthday, setBirthday] = useState(props.birthday.birthday);

  const editBirthdayHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newBirthday = {
      id: props.birthday.id,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    props.onEdit(newBirthday);
  };

  const firstNameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const lastNameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const birthdayChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setBirthday(event.currentTarget.value);
  };

  return (
    <div>
      <div>
        <p>Edit a birthday!</p>
        <form onSubmit={editBirthdayHandle}>
          <input
            id='firstName'
            type='text'
            value={firstName}
            onChange={firstNameChangeHandler}
          />
          <input
            id='lastName'
            type='text'
            value={lastName}
            onChange={lastNameChangeHandler}
          />
          <input
            id='birthday'
            type='date'
            value={birthday}
            onChange={birthdayChangeHandler}
          />
          <button type='submit'>Save</button>
          <button onClick={props.onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default EditBirthdayModal;
