import React, { useState } from 'react';

const BirthdayForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');

  const addBirthdayHandle = (event) => {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    const newBirthday = {
      id: randomNumber,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    props.onAddBirthday(newBirthday);
    setFirstName('');
    setLastName('');
    setBirthday('');
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
      <h1>Add a birthday!</h1>
      <form onSubmit={addBirthdayHandle}>
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
      </form>
    </div>
  );
};

export default BirthdayForm;
