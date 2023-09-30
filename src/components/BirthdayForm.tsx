import { useState } from 'react';
import { Birthday } from '../models/interfaces';

interface BirthdayFormProps {
  onAddBirthday: (birthday: Birthday) => void;
}

const BirthdayForm = ({ onAddBirthday }: BirthdayFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');

  const addBirthdayHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    const newBirthday = {
      id: randomNumber,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    onAddBirthday(newBirthday);
    setFirstName('');
    setLastName('');
    setBirthday('');
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
      <h1>Add a birthday!</h1>
      <form onSubmit={addBirthdayHandle}>
        <label>
          Firstname:
          <input
            id='firstName'
            type='text'
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </label>
        <label>
          Lastname:
          <input
            id='lastName'
            type='text'
            value={lastName}
            onChange={lastNameChangeHandler}
          />
        </label>
        <label>
          Birthdate:
          <input
            id='birthday'
            type='date'
            value={birthday}
            onChange={birthdayChangeHandler}
          />
        </label>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default BirthdayForm;
