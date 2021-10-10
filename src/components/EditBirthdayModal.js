import React, { useState } from 'react';

const EditBirthdayModal = (props) => {
  const [firstName, setFirstName] = useState(props.birthday.firstName);
  const [lastName, setLastName] = useState(props.birthday.lastName);
  const [birthday, setBirthday] = useState(props.birthday.birthday);

  const editBirthdayHandle = (event) => {
    event.preventDefault();

    let newBirthday = {
      id: props.birthday.id,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    props.onEdit(newBirthday);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const birthdayChangeHandler = (event) => {
    setBirthday(event.target.value);
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
